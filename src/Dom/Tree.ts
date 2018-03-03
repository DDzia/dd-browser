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
    if(!(root instanceof HTMLElement) || !(toCheck instanceof HTMLElement)) {
      return false;
    }

    let cursorElement: HTMLElement = toCheck;
    while (cursorElement !== document.body) {
        if (cursorElement === root) {
            return true;
        }
        if(!(cursorElement.parentElement instanceof HTMLElement)) {
          return false;
        }
        cursorElement = cursorElement.parentElement;
    }
    return false;
  }

  private constructor() {}
}