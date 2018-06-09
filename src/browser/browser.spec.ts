import { assert } from 'chai';
import { Browser } from './browser';

describe('Browser', () => {

  describe('IE emulation.', () => {
    const ieTenVersion = 10;
    const setIeMode = () => window.document.documentMode = `IE${ieTenVersion}`;

    before(setIeMode);
    after(() => delete window.document.documentMode);

    it('isIE is true.', () => {
      // arrange
      const expectedIsIe = true;

      // act
      const isIe = Browser.isIE;

      // assert
      assert.isTrue(isIe);
    });

    it(`ieVersion is ${ieTenVersion}.`, () => {
      // arrange
      const expectedIeVersion = ieTenVersion;

      // act
      const version = Browser.ieVersion;

      // assert
      assert.equal(version, expectedIeVersion);
    });
  });

  describe('Without IE emulation.', () => {
    it('isIE is false.', () => {
      // arrange
      const expectedIsIe = false;

      // act
      const isIe = Browser.isIE;

      // assert
      assert.isFalse(isIe);
    });

    it('ieVersion is not defined. Expected exception.', () => {
      // arrange
      const expectedExMessage = 'Is not IE.';

      // assert
      assert.throws(() => Browser.ieVersion, Error);
    });
  });

});