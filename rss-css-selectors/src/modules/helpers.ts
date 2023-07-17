export const findElement = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Element for selector "${selector}" is not found`);
  }
  return element;
};

export const findElementCollections = (selector: string): NodeListOf<Element> => {
  const collection = document.querySelectorAll(selector);
  if (!collection) {
    throw new Error(`Elements for selector "${selector}" is not found`);
  }
  return collection;
};

export const createBlock = <K extends keyof HTMLElementTagNameMap>(data: {
  tag: K,
  className?: string;
  innerHTML?: string;
  parentBlock?: HTMLElement;
})
  : HTMLElementTagNameMap[K] => {
  const {
    tag, className, innerHTML, parentBlock,
  } = data;

  const block = document.createElement(tag);

  if (className) {
    block.className = className;
  }
  if (innerHTML) {
    block.innerHTML = innerHTML;
  }
  if (parentBlock) {
    parentBlock.append(block);
  }
  return block;
};
