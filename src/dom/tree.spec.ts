import { assert } from 'chai';
import { Tree } from './tree';

describe('Tree', () => {
  describe('isChildNode', () => {
    let root: HTMLElement;
    let child: HTMLElement;
    beforeEach(() => {
      root = document.createElement('div');
      document.body.appendChild(root);
      child = document.createElement('div');
    });

    it('Child into first level', () => {
      // arrange
      root.appendChild(child);

      // act
      const result: boolean = Tree.isChildNode(root, child);

      // assert
      assert(result);
    });

    it('Child into second level', () => {
      // arrange
      root.appendChild(child);
      const middle: HTMLElement = document.createElement('div');
      root.appendChild(middle);
      middle.appendChild(child);

      // act
      const result: boolean = Tree.isChildNode(root, child);

      // assert
      assert(result);
    });

    it('Is not child', () => {
      // act
      const result: boolean = Tree.isChildNode(root, child);

      // assert
      assert(!result);
    });
  });
});