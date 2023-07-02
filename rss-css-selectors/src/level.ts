import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import levelsConfig from './levelsConfig';
import Storage from './storage';
import { Markup } from './types/interfaces';

hljs.registerLanguage('xml', xml);

class Level {
  private storage = new Storage();

  private nesting = 0;

  private currentLevel = this.storage.getLevel();

  public render(level: number): void {
    const taskTitle: HTMLHeadingElement | null = document.querySelector('.main-wrapper__task');
    if (taskTitle) {
      const taskText = levelsConfig[level - 1].task;
      taskTitle.innerHTML = `${taskText}`;
    }

    const picnic: HTMLDivElement | null = document.querySelector('.picnic');
    const markup: HTMLDivElement | null = document.querySelector('.markup');
    if (picnic && markup) {
      picnic.innerHTML = '';
      markup.innerHTML = '';
    }

    this.createHTML(levelsConfig[level - 1].html, picnic);

    if (markup) {
      this.createMarkup(levelsConfig[level - 1].html, markup);
    }

    const currentlistItem: HTMLLIElement | null = document.querySelector(`li[level='${level}']`);
    if (currentlistItem) {
      currentlistItem.classList.add('current-level');
    }

    this.currentLevel = level;
    this.storage.setLevel(this.currentLevel);
  }

  public checkSelector(value: string): void {
    if (!value) return;

    if (value === levelsConfig[this.currentLevel - 1].selector) {
      this.render(this.currentLevel + 1);
      const input: HTMLInputElement | null = document.querySelector('.input-container__input');
      if (input) {
        input.value = '';
      }
    } else {
      const selectedELements: NodeListOf<Element> = document.querySelectorAll(`${value}`);
      for (let i = 0; i < selectedELements.length; i += 1) {
        const element = selectedELements[i];
        if (element.getAttribute('state') === 'active') {
          element.setAttribute('state', 'unactive');
          element.classList.add('shaking');
          setTimeout(() => {
            element.classList.remove('shaking');
            element.setAttribute('state', 'active');
          }, 500);
        } else {
          element.classList.add('shaking');
          setTimeout(() => {
            element.classList.remove('shaking');
          }, 500);
        }
      }
    }
  }

  private createHTML(data: Markup, parentElement: HTMLElement | null): void {
    const config = Object.keys(data);
    const element = document.createElement(`${data.element}`);
    if (config.includes('className')) {
      element.className = `${data.className}`;
    }
    if (config.includes('id')) {
      element.id = `${data.id}`;
    }
    if (config.includes('attributes')) {
      const { attributes } = data;
      attributes?.forEach((attr) => {
        element.setAttribute(`${attr.attributeName}`, `${attr.attributeValue}`);
      });
    }

    parentElement?.append(element);

    if (data.children !== null) {
      data.children?.forEach((child) => {
        this.createHTML(child, element);
      });
    }
  }

  private addMarkupItem(
    content:string,
    parent: HTMLElement,
    hasChildren: boolean,
    isClosed: boolean,
  ): void {
    if (isClosed) {
      this.nesting = this.nesting - 2 >= 0 ? this.nesting - 2 : 0;
    }

    const div = document.createElement('div');
    parent.append(div);
    const pre = document.createElement('pre');
    div?.append(pre);
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

    if (data.children) {
      content += '>';
      this.addMarkupItem(content, parent, Boolean(data.children), false);
      data.children?.forEach((child) => {
        this.createMarkup(child, parent);
      });
    } else if (!data.children) {
      content += '/>';
      this.addMarkupItem(content, parent, Boolean(data.children), false);
    }

    if (data.children) {
      const closedContent = `</${data.element}>`;
      this.addMarkupItem(closedContent, parent, false, true);
    }
  }

  public getSelector(): string {
    return levelsConfig[this.currentLevel - 1].selector;
  }
}

export default Level;
