export type DOMElements = {
  textarea: HTMLTextAreaElement,
  textareaCode: HTMLElement,
  taskTitle: HTMLHeadingElement,
  picnic: HTMLDivElement,
  markup: HTMLDivElement,
  codeContainer: HTMLElement,
};

export type DOMElementCollections = {
  [name:string]: NodeListOf<Element>
};
