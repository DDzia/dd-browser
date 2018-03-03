export class Tree {
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