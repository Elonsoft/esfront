import { getClippedRect } from './getClippedRect';
import { TourRect } from './types';

/** The number of bisections used to locate an edge. Combined with the half-pixel bail out below it is never reached. */
const EDGE_PROBE_STEPS = 12;

/** The accuracy an edge is located with, in pixels. */
const EDGE_PROBE_ACCURACY = 0.5;

/**
 * How far beyond an edge to look for something the padding must not be drawn over, in pixels. The padding itself is a
 * CSS length the component never resolves, so the free space is reported instead and CSS takes the smaller of the two.
 * An obstruction further out than this is not reported, and a padding that large would not be clamped by it.
 */
const GAP_PROBE_LIMIT = 64;

/**
 * Where to look for a point of the element that is on screen, as fractions of its box. Bisecting an edge needs one to
 * bisect towards, and the middle is not it when a header covers the top half. The order walks outwards from the middle
 * so that the common case costs a single hit test and a thin visible sliver along an edge is still found.
 */
const SEED_FRACTIONS = [0.5, 0.25, 0.75, 0.125, 0.375, 0.625, 0.875, 0.0625, 0.9375];

/**
 * The part of `element` that is actually painted on screen, in viewport coordinates, together with the padding each of
 * its edges has room for.
 *
 * The bounding box is not enough: the element may be scrolled under a container with a hidden overflow, or covered by
 * a sticky header, which is not an ancestor and therefore invisible to a purely geometric computation. Each edge of
 * the clipped box is instead bisected towards the center until the topmost element at that point is the target, which
 * accounts for clipping and for overlapping elements alike.
 *
 * The cutout is drawn a padding beyond each edge, so the band outside it is measured as well, this time bisecting
 * outwards until something that is neither the target nor one of its ancestors is met. The free space found is what
 * the padding may grow to; an edge whose own pixels are covered reports none at all.
 *
 * Nodes inside `ignore` — the tour overlay itself — are skipped, so the card never counts as an obstruction.
 *
 * Returns `null` when no sampled point of the element turns out to be on screen, which is taken to mean it is covered.
 */
export const getVisibleRect = (element: Element, ignore: Element | null): TourRect | null => {
  const document = element.ownerDocument;
  const rect = getClippedRect(element);

  if (!rect) {
    return null;
  }

  const getTopmost = (x: number, y: number) => {
    for (const hit of document.elementsFromPoint(x, y)) {
      if (!ignore?.contains(hit)) {
        return hit;
      }
    }

    return null;
  };

  const isTarget = (x: number, y: number) => {
    const hit = getTopmost(x, y);

    return !!hit && (hit === element || element.contains(hit));
  };

  // Outside the element the background is whatever the target sits in, so its ancestors do not obstruct the padding.
  const isFree = (x: number, y: number) => {
    const hit = getTopmost(x, y);

    return !hit || hit === element || element.contains(hit) || hit.contains(element);
  };

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const findSeed = () => {
    for (const fraction of SEED_FRACTIONS) {
      const y = rect.top + rect.height * fraction;

      if (isTarget(centerX, y)) {
        return { x: centerX, y };
      }
    }

    for (const fraction of SEED_FRACTIONS) {
      const x = rect.left + rect.width * fraction;

      if (isTarget(x, centerY)) {
        return { x, y: centerY };
      }
    }

    return null;
  };

  const seed = findSeed();

  if (!seed) {
    return null;
  }

  // `from` is the point known to fail the test and `to` the one known to pass it. Returns the coordinate of the first
  // passing point met while moving from the former towards the latter.
  const probe = (isPassing: (value: number) => boolean, from: number, to: number) => {
    let failing = from;
    let passing = to;

    for (let i = 0; i < EDGE_PROBE_STEPS && Math.abs(passing - failing) > EDGE_PROBE_ACCURACY; i++) {
      const middle = (failing + passing) / 2;

      if (isPassing(middle)) {
        passing = middle;
      } else {
        failing = middle;
      }
    }

    return passing;
  };

  const probeEdge = (
    isPassing: (value: number) => boolean,
    edge: number,
    center: number,
    clippedGap: number | null
  ) => {
    const outwards = Math.sign(edge - center);
    const inset = edge - outwards * EDGE_PROBE_ACCURACY;

    // Where the element itself is covered the cutout stops at the covering boundary, and gets no padding: extending it
    // would put the cutout straight back over whatever was found.
    if (!isPassing(inset)) {
      return { value: probe(isPassing, inset, center), gap: 0, isCut: true };
    }

    if (clippedGap === 0) {
      return { value: edge, gap: 0, isCut: true };
    }

    const limit = edge + outwards * GAP_PROBE_LIMIT;

    if (isPassing(limit)) {
      return { value: edge, gap: null, isCut: false };
    }

    return { value: edge, gap: Math.abs(probe(isPassing, limit, edge) - edge), isCut: false };
  };

  const isTargetY = (y: number) => isTarget(seed.x, y);
  const isTargetX = (x: number) => isTarget(x, seed.y);
  const isFreeY = (y: number) => isFree(seed.x, y);
  const isFreeX = (x: number) => isFree(x, seed.y);

  const top = probeEdge((y) => (y < rect.top ? isFreeY(y) : isTargetY(y)), rect.top, seed.y, rect.gap.top);
  const left = probeEdge((x) => (x < rect.left ? isFreeX(x) : isTargetX(x)), rect.left, seed.x, rect.gap.left);

  const bottomEdge = rect.top + rect.height;
  const rightEdge = rect.left + rect.width;

  const bottom = probeEdge((y) => (y > bottomEdge ? isFreeY(y) : isTargetY(y)), bottomEdge, seed.y, rect.gap.bottom);
  const right = probeEdge((x) => (x > rightEdge ? isFreeX(x) : isTargetX(x)), rightEdge, seed.x, rect.gap.right);

  if (bottom.value <= top.value || right.value <= left.value) {
    return null;
  }

  return {
    top: top.value,
    left: left.value,
    width: right.value - left.value,
    height: bottom.value - top.value,
    gap: {
      top: top.gap,
      right: right.gap,
      bottom: bottom.gap,
      left: left.gap,
    },
    cut: {
      top: top.isCut,
      right: right.isCut,
      bottom: bottom.isCut,
      left: left.isCut,
    },
  };
};
