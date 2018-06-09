declare global {
  // tslint:disable-next-line:interface-name
  interface Document {
    /*
    * IE document compatibility mode.
    */
    documentMode?: string;
  }
}

/**
 * Detect browser features.
 * @export
 * @class Browser
 */
export class Browser {
  /**
   * Current brwoser is Microsoft Internet Explorer.
   * @readonly
   * @static
   * @memberof Browser
   */
  static get isIE() {
    return window.document.documentMode !== undefined;
  }

  /**
   * The Microsoft Internet Explorer browser version.
   * @readonly
   * @static
   * @memberof Browser
   * @throws {Error} throw if is it a not Microsoft Internet Explorer browser.
   */
  static get ieVersion() {
    if (!Browser.isIE) {
      throw new Error('Is not IE.');
    }

    const strIeVersion = (window.document.documentMode as string).toUpperCase().replace('IE', '');
    const version = Number(strIeVersion);
    return version;
  }

  private constructor() {}
}