import { Node } from 'slate';

const BYTE_LENGTH = 16;
const BYTE_VALUES = 256;

// Read lazily rather than at module load, so that a polyfill installed later is still picked up.
const getCrypto = (): Crypto | undefined => {
  return typeof globalThis === 'undefined' ? undefined : globalThis.crypto;
};

const getRandomBytes = () => {
  const bytes = new Uint8Array(BYTE_LENGTH);
  const webCrypto = getCrypto();

  if (typeof webCrypto?.getRandomValues === 'function') {
    return webCrypto.getRandomValues(bytes);
  }

  // No web crypto at all, which happens on Node below 19 and in a handful of older browsers. Node
  // ids only have to not collide — they are neither secrets nor a source of entropy for one — so a
  // weaker generator is an acceptable last resort.
  for (let index = 0; index < bytes.length; index++) {
    bytes[index] = Math.floor(Math.random() * BYTE_VALUES);
  }

  return bytes;
};

const toHex = (bytes: Uint8Array) => {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Returns a v4 UUID to identify a node by.
 *
 * Ids have to be unique against the document as a whole, including the parts of it that were saved
 * by an earlier session: a counter would start over on every load and hand out ids that nodes
 * already have.
 *
 * Falls back from `crypto.randomUUID`, which needs a secure context, to `crypto.getRandomValues`,
 * which does not, and finally to `Math.random` where there is no web crypto at all.
 */
export const createNodeId = () => {
  const webCrypto = getCrypto();

  if (typeof webCrypto?.randomUUID === 'function') {
    return webCrypto.randomUUID();
  }

  const bytes = getRandomBytes();

  // Set the version and variant fields that make the id a v4 UUID.
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = toHex(bytes);

  return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-');
};

/**
 * Returns the id {@link withNodeId} assigned to the node, or `undefined` when it has none.
 *
 * Reading it through this helper means an application does not have to declare `id` on its element
 * types just to look a node up by it.
 */
export const getNodeId = (node: Node): string | undefined => {
  const { id } = node as Node & Record<'id', unknown>;

  return typeof id === 'string' ? id : undefined;
};
