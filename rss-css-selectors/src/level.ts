import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import levelsConfig from './levelsConfig';
import Storage from './storage';

hljs.registerLanguage('xml', xml);

class Level {
  private storage = new Storage();

  private currentLevel = this.storage.getLevel();

  public render(level: number): void {
    const taskTitle: HTMLHeadingElement | null = document.querySelector('.main-wrapper__task');
    if (taskTitle) {
      const taskText = levelsConfig[level - 1].task;
      taskTitle.innerHTML = `${taskText}`;
    }

    const picnic: HTMLDivElement | null = document.querySelector('.picnic');
    if (picnic) {
      const htmlMarkup = levelsConfig[level - 1].html;
      picnic.innerHTML = `${htmlMarkup}`;
    }

    const markup: HTMLDivElement | null = document.querySelector('.markup');
    if (markup) {
      const htmlMarkup = levelsConfig[level - 1].markup;
      const highlightedCode = hljs.highlight(
        `<div class="picnic-blanket">${htmlMarkup}
</div>`,
        {
          language: 'xml',
        },
      ).value;
      markup.innerHTML = highlightedCode;
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

  public getSelector(): string {
    return levelsConfig[this.currentLevel - 1].selector;
  }
}

export default Level;
