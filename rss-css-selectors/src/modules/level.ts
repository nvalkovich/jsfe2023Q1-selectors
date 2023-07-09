import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import levelsConfig from './levelsConfig';
import { Markup, Attributes } from '../types/interfaces';
import storage from './storage';

hljs.registerLanguage('xml', xml);

class Level {
  private currentLevel = Number(storage.parseLocalStorage('level')) || 1;

  private passedLevels = storage.parseLocalStorage<number[]>('passedLevelsKey') || [];

  private helpPassedLevels = storage.parseLocalStorage<number[]>('helpPassedLevels') || [];

  private nesting = 0;

  private passedLevelsArray: number[] = this.passedLevels;

  private helpPassedLevelsArray: number[] = this.helpPassedLevels;

  public static findElement<T extends Element>(selector: string) : T {
    const element = document.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Element for selector "${selector}" is not found`);
    }
    return element;
  }

  public static findElementCollections(selector: string): NodeListOf<Element> {
    const collection = document.querySelectorAll(selector);
    if (!collection) {
      throw new Error(`Elements for selector "${selector}" is not found`);
    }
    return collection;
  }

  public render(level: number): void {
    if (level > levelsConfig.length) {
      return;
    }

    const taskText = levelsConfig[level - 1].task;

    const textarea = Level.findElement<HTMLTextAreaElement>('.textarea');
    textarea.value = '';

    const textareaCode = Level.findElement<HTMLElement>('.textarea-markup__code');
    textareaCode.innerHTML = 'Type in a CSS selector';

    const taskTitle = Level.findElement<HTMLHeadingElement>('.main-wrapper__task');
    taskTitle.innerHTML = taskText;

    const picnic = Level.findElement<HTMLDivElement>('.picnic');
    picnic.innerHTML = '';

    const markup = Level.findElement<HTMLDivElement>('.markup');
    markup.innerHTML = '';

    this.createHTML(levelsConfig[level - 1].html, picnic);

    this.createMarkup(levelsConfig[level - 1].html, markup);
    const currentlistItem = document.querySelector('.current-level');
    if (currentlistItem) {
      currentlistItem.classList.remove('current-level');
    }
    const newCurrentlistItem: HTMLLIElement | null = document.querySelector(`li[level='${level}']`);
    newCurrentlistItem?.classList.add('current-level');

    this.currentLevel = level;
    this.passedLevelsArray = storage.parseLocalStorage<number[]>('passedLevelsKey') || [];
    this.helpPassedLevelsArray = storage.parseLocalStorage<number[]>('helpPassedLevels') || [];
    storage.stringifyLocalStorage('level', this.currentLevel);
  }

  public static shakeElement(element: Element) :void {
    if (element.hasAttribute('state')) {
      element.setAttribute('state', 'unactive');
      element.classList.add('shaking');
      setTimeout(() => {
        element.classList.remove('shaking');
        element.setAttribute('state', 'active');
      }, 300);
    } else {
      element.classList.add('shaking');
      setTimeout(() => {
        element.classList.remove('shaking');
      }, 300);
    }
  }

  public static shakeContainer() :void {
    const codeContainer = Level.findElement<HTMLElement>('.code-container');
    setTimeout(() => {
      codeContainer.classList.remove('shaking');
    }, 300);
  }

  public static increaseGoalElement(element: Element) :void {
    element.classList.add('goal');
    setTimeout(() => {
      element.classList.remove('goal');
    }, 300);
  }

  public moveToNextLevel() :void {
    const passedLevellistItem: HTMLLIElement | null = document.querySelector(`li[level='${this.currentLevel}']`);
    passedLevellistItem?.classList.add('passed-level');

    if (this.passedLevelsArray.includes(this.currentLevel)) {
      return;
    }

    if (passedLevellistItem?.hasAttribute('with-help')) {
      this.helpPassedLevelsArray.push(this.currentLevel);
    }

    this.passedLevelsArray.push(this.currentLevel);
    storage.stringifyLocalStorage('helpPassedLevels', this.helpPassedLevelsArray);
    storage.stringifyLocalStorage('passedLevelsKey', this.passedLevelsArray);
    this.passedLevelsArray = storage.parseLocalStorage<number[]>('passedLevelsKey') || [];

    this.currentLevel += 1;

    if (this.passedLevelsArray.length < levelsConfig.length) {
      setTimeout(() => {
        this.render(this.currentLevel);
      }, 700);
    } else {
      this.win();
    }
  }

  public checkSelector(value: string): void {
    if (!value) {
      Level.shakeContainer();
      return;
    }

    const selectedELements: NodeListOf<Element> = document.querySelectorAll(value);

    if (!selectedELements.length) {
      Level.shakeContainer();
      return;
    }

    const activeELements = [];
    for (let i = 0; i < selectedELements.length; i += 1) {
      const element = selectedELements[i];
      if (element.hasAttribute('state')) {
        activeELements.push(element);
      }
      Level.shakeElement(element);
    }

    if ((activeELements.length === selectedELements.length
        && selectedELements.length === levelsConfig[this.currentLevel - 1]?.goalElementsNumber)
        || value === levelsConfig[this.currentLevel - 1]?.selector) {
      activeELements.forEach((el: Element) => {
        Level.increaseGoalElement(el);
      });

      this.moveToNextLevel();
    }
  }

  private createHTML(data: Markup, parentElement: HTMLElement | null): void {
    const config = Object.keys(data);
    const element = document.createElement(data.element);

    if (config.includes('className')) {
      element.className = `${data.className}`;
    }
    if (config.includes('id')) {
      element.id = `${data.id}`;
    }
    if (config.includes('attributes')) {
      const { attributes } = data;
      attributes?.forEach((attr) => {
        element.setAttribute(attr.attributeName, attr.attributeValue);
      });
    }
    if (config.includes('commonAtributes')) {
      const { commonAtributes } = data;
      commonAtributes?.forEach((attr) => {
        element.setAttribute(attr.attributeName, attr.attributeValue);
      });
    }

    element.classList.add('picnic__item');
    parentElement?.append(element);

    if (data.children !== null) {
      data.children.forEach((child) => {
        this.createHTML(child, element);
      });
    }
  }

  private addMarkupItem(
    content: string,
    parent: HTMLElement,
    hasChildren: boolean,
    isClosed: boolean,
    commonAtributes: Attributes[] | undefined,
  ): void {
    if (isClosed) {
      this.nesting = this.nesting - 2 >= 0 ? this.nesting - 2 : 0;
    }

    const div = document.createElement('div');

    commonAtributes?.forEach((attr) => {
      div.setAttribute(attr.attributeName, attr.attributeValue);
      parent.setAttribute(attr.attributeName, attr.attributeValue);
    });

    div.className = 'markup__item';
    parent.classList.add('markup__container');
    parent.append(div);
    const pre = document.createElement('pre');
    div.append(pre);
    const code = document.createElement('code');
    pre.append(code);

    code.innerHTML = hljs.highlight(
      `${' '.repeat(this.nesting)}${content}`,
      {
        language: 'xml',
      },
    ).value;

    if ((hasChildren)) {
      this.nesting += 2;
    }
  }

  private createMarkup(data: Markup, parent: HTMLElement): void {
    const config = Object.keys(data);

    let content = '';
    content += `<${data.element}`;
    if (config.includes('toWiev')) {
      if (data.toWiev?.selector === 'className') {
        content += ` class="${data.toWiev?.value}"`;
      }
      if (data.toWiev?.selector === 'id') {
        content += ` id="${data.toWiev?.value}"`;
      }
      if (data.toWiev?.selector === 'attributes') {
        content += ` ${data.toWiev?.value}`;
      }
    }

    const container = document.createElement('div');
    parent.append(container);

    if (data.children) {
      content += '>';
      this.addMarkupItem(content, container, Boolean(data.children), false, data.commonAtributes);
      data.children.forEach((child) => {
        this.createMarkup(child, container);
      });
    } else if (!data.children) {
      content += '/>';
      this.addMarkupItem(content, container, Boolean(data.children), false, data.commonAtributes);
    }

    if (data.children) {
      const closedContent = `</${data.element}>`;
      this.addMarkupItem(closedContent, container, false, true, data.commonAtributes);
    }
  }

  public getSelector(): string {
    return levelsConfig[this.currentLevel - 1].selector;
  }

  public resetProgress(): void {
    const passedLevelsListItems = Level.findElementCollections('.passed-level');
    const helpPassedLevelsListItems = Level.findElementCollections('[with-help = "true"]');

    passedLevelsListItems.forEach((listItem) => {
      listItem.classList.remove('passed-level');
    });

    helpPassedLevelsListItems.forEach((listItem) => {
      listItem.removeAttribute('with-help');
    });

    storage.clearLocalStorage();
    this.render(Number(storage.parseLocalStorage('level') || 1));
  }

  public win(): void {
    const popupWrapper = document.createElement('div');
    popupWrapper.className = 'popup-wrapper popup-wrapper_active';
    document.body.append(popupWrapper);

    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    popupWrapper.append(popupContainer);

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-container__content popup-content';
    popupContainer.append(popupContent);

    const popupCongratulations = document.createElement('h3');
    popupCongratulations.className = 'popup-content__congratulations';
    popupCongratulations.textContent = 'Congratulations!';
    popupContent.append(popupCongratulations);

    const popupMessage = document.createElement('h3');
    popupMessage.className = 'popup-content__message';
    popupMessage.textContent = 'You have found all selectors';
    popupContent.append(popupMessage);

    const popupBtn = document.createElement('button');
    popupBtn.className = 'popup-content__btn';
    popupContent.append(popupBtn);
    popupBtn.innerText = 'Train again';

    if (popupBtn) {
      popupBtn.addEventListener('click', (): void => {
        this.resetProgress();
        popupWrapper.classList.remove('popup-wrapper_active');
      });
    }
  }
}

export default Level;
