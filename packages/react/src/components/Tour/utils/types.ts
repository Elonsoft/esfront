/**
 * The free space found beyond each edge, in pixels, which is how much padding fits there. `null` means nothing was met
 * within the probing limit, so the padding is not constrained at all.
 */
export interface TourGap {
  top: number | null;
  right: number | null;
  bottom: number | null;
  left: number | null;
}

/** The edges where the cutout stops inside the element, because something covers or clips it there. */
export interface TourEdges {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export interface TourRect {
  top: number;
  left: number;
  width: number;
  height: number;
  gap: TourGap;
  cut: TourEdges;
}
