/**
 * Manage DOM tree helpers.
 * @export
 * @class Tree
 */
export class Tree {
  /**
   * Detect if some HTML element is child on any level.
   * @static
   * @param {HTMLElement} possibleParent Parent HTMLElement.
   * @param {HTMLElement} possibleChild HTMLElement to check.
   * @returns is child or not boolean value.
   * @memberof Tree
   */
  static isChildNode(possibleParent: HTMLElement, possibleChild: HTMLElement) {
    const isChild = possibleParent.contains(possibleChild);
    return isChild;
  }

  private constructor() {}
}