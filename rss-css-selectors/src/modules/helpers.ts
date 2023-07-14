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
