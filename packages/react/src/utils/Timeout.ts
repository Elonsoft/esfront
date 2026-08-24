/** A timeout that replaces the previously scheduled call every time it is started. */
export class Timeout {
  static create() {
    return new Timeout();
  }

  currentId: ReturnType<typeof setTimeout> | null = null;

  /** Executes `fn` after `delay`, clearing any previously scheduled call. */
  start(delay: number, fn: () => void) {
    this.clear();

    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }

  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };

  disposeEffect = () => {
    return this.clear;
  };
}
