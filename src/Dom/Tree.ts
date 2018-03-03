export class Tree {
  /**
   * Detect if some HTML element is child on any level.
   * @static
   * @param {HTMLElement} root Parent HTMLElement.
   * @param {HTMLElement} toCheck HTMLElement to check.
   * @returns is child or not boolean value.
   * @memberof Tree
   */
  public static isChild(root: HTMLElement, toCheck: HTMLElement) {
    let cursorElement: HTMLElement | null = toCheck;
    while (cursorElement !== document.body) {
        if (cursorElement === null || cursorElement === root) {
            return true;
        }
        cursorElement = cursorElement.parentElement as HTMLElement;
    }
    return false;
  }

  private constructor() {}
}