import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import levelsConfig from './levelsConfig';
import Level from './level';
import { parseLocalStorage } from './storage';
import { findElement, findElementCollections, createBlock } from './helpers';

hljs.registerLanguage('css', css);

class Page {
  private readonly level: Level;

  private passedLevels = parseLocalStorage<number[]>('passedLevelsKey') || [];

  private helpPassedLevel = parseLocalStorage<number[]>('helpPassedLevels') || [];

  constructor() {
    this.level = new Level();
  }

  public render(): void {
    const body = findElement<HTMLBodyElement>('body');

    const mainWrapper = createBlock('div', 'main-wrapper', null, body);

    const header = createBlock('header', 'main-wrapper__header header', null, mainWrapper);

    const headerLogo = createBlock('h1', 'header__logo', 'CSS Picnic', header);

    const task = createBlock('h2', 'main-wrapper__task', null, mainWrapper);

    const helpBtn = createBlock('div', 'main-wrapper__btn-help', 'Help', mainWrapper);

    const picnic = createBlock('div', 'main-wrapper__picnic picnic', null, mainWrapper);

    const codeWrapper = createBlock('div', 'main-wrapper__code-wrapper', null, mainWrapper);

    const codeContainer = createBlock('div', 'code-container', null, codeWrapper);

    const cssEditor = createBlock('div', 'code-container__item css-editor', null, codeContainer);

    const cssEditorHeader = createBlock('div', 'css-editor__header code-header', null, cssEditor);

    const cssEditorHeaderTitle = createBlock('p', 'light-text', 'CSS Editor', cssEditorHeader);

    const cssEditorHeaderLang = createBlock('p', null, 'style.css', cssEditorHeader);

    const cssEditorContent = createBlock('div', 'css-editor__content code-content', null, cssEditor);

    const cssContentLineNumbers = createBlock('div', 'code-content__line-numbers line-numbers line-numbers_css', null, cssEditorContent);

    const cssEditField = createBlock('div', 'code-content__code css-edit-field', null, cssEditorContent);

    const textareaField = createBlock('div', 'css-edit-field__textarea-field textarea-field', null, cssEditField);

    const textareaContainer = createBlock('div', 'textarea-field__textarea-container textarea-container', null, textareaField);

    const textarea = createBlock('textarea', 'textarea-container__textarea textarea', null, textareaContainer);

    const textareaMarkup = createBlock('div', 'textarea-container__textarea-markup textarea-markup', null, textareaContainer);

    const textareaPre = createBlock('pre', 'textarea-markup__pre', null, textareaMarkup);

    const textareaCode = createBlock('code', 'textarea-markup__code', 'Type in a CSS selector', textareaPre);

    const textareaBtn = createBlock('div', 'textarea-field__btn', 'Enter', textareaField);

    const htmlViewer = createBlock('div', 'code-container__item html-viewer', null, codeContainer);

    const htmlViewerHeader = createBlock('div', 'html-viewer__header code-header', null, htmlViewer);

    const htmlViewerHeaderTitle = createBlock('p', 'light-text', 'HTML Viewer', htmlViewerHeader);

    const htmlViewerHeaderLang = createBlock('p', null, 'table.html', htmlViewerHeader);

    const htmlViewerContent = createBlock('div', 'html-viewer__content code-content', null, htmlViewer);

    const htmlViewerLineNumbers = createBlock('div', 'code-content__line-numbers line-numbers line-numbers_html', null, htmlViewerContent);

    const htmlViewField = createBlock('div', 'code-content__code html-view-field', null, htmlViewerContent);

    const markup = createBlock('div', 'markup', null, htmlViewField);

    const basicLinesAmount = 20;
    for (let i = 1; i <= basicLinesAmount; i += 1) {
      cssContentLineNumbers.innerHTML += `${i}<br>`;
      htmlViewerLineNumbers.innerHTML += `${i}<br>`;
    }

    const footer = createBlock('footer', 'main-wrapper__footer footer', null, mainWrapper);

    const footerContent = createBlock('div', 'footer__content footer-content', 'Made by ', footer);

    const footerGuthubLink = createBlock('a', 'link  link_gh', '@nvalkovich', footerContent);
    footerGuthubLink.href = 'https://github.com/nvalkovich';

    const footerRSSLinkContainer = createBlock('div', 'footer-content__rss-link-container rss-link-container', null, footerContent);

    const footerRSSLink = createBlock('a', 'rss-link-container__link link rss-link', null, footerRSSLinkContainer);
    footerRSSLink.href = 'https://rs.school/js/';

    const levelsWrapper = createBlock('div', 'levels-wrapper', null, mainWrapper);

    const levelsContainer = createBlock('div', 'levels', null, levelsWrapper);

    const levelsTitle = createBlock('h2', 'levels__title', 'Levels', levelsContainer);

    const levelsList = createBlock('ul', 'levels__list levels-list', null, levelsContainer);

    const levelsNumber: number = levelsConfig.length;

    for (let i = 0; i < levelsNumber; i += 1) {
      const levelsItem = createBlock('li', 'levels-list__item', `Level ${levelsConfig[i].level}`, levelsList);
      levelsItem.setAttribute('level', `${levelsConfig[i].level}`);
    }

    this.passedLevels.forEach((level) => {
      const passedLevellistItem = findElement<HTMLLIElement>(`li[level='${level}']`);
      passedLevellistItem.classList.add('passed-level');
    });

    this.helpPassedLevel.forEach((level) => {
      const helpPassedLevellistItem = findElement<HTMLLIElement>(`li[level='${level}']`);
      helpPassedLevellistItem?.setAttribute('with-help', 'true');
    });

    const levelsResetBtn = createBlock('div', 'levels__btn', 'Reset', levelsContainer);

    levelsResetBtn.addEventListener('click', (e: Event): void => {
      const { target } = e;
      if (target instanceof HTMLElement) {
        this.level.resetProgress();
      }
    });

    textareaBtn.addEventListener('click', (e: Event): void => {
      const { target } = e;
      if (target instanceof HTMLElement) {
        this.level.checkSelector(textarea.value);
      }
    });

    const setTextareaValue = (string?: string): void => {
      const content = string || textarea.value;
      textareaCode.innerHTML = hljs.highlight(
        content,
        {
          language: 'css',
        },
      ).value;
    };

    const createCssMarkup = ():void => {
      textareaCode.innerHTML = hljs.highlight(
        textarea.value,
        {
          language: 'css',
        },
      ).value;
    };

    textarea.addEventListener('input', ():void => {
      createCssMarkup();
      if (!textareaCode.innerHTML.length) {
        textareaCode.innerHTML = 'Type in a CSS selector';
      }
    });

    textarea.addEventListener('keydown', (e: KeyboardEvent): void => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.level.checkSelector(textarea.value);
      }
    });

    const typeSelector = (value: string):void => {
      const splittedValue = value.split('');
      let i = 0;
      let result = '';
      const addChar = setInterval(() => {
        if (i >= splittedValue.length) {
          clearInterval(addChar);
        } else {
          result += splittedValue[i];
          setTextareaValue(result);
          i += 1;
        }
        textarea.value = result;
      }, 100);
    };

    helpBtn.addEventListener('click', (): void => {
      const currentListItem = findElement<HTMLLIElement>('.current-level');
      currentListItem.setAttribute('with-help', 'true');
      textarea.value = this.level.getSelector();
      typeSelector(textarea.value);
    });

    const createSelector = (element: HTMLElement): string => {
      let selector = '';
      if (element.hasAttribute('markup')) {
        selector += `[markup = '${element.getAttribute('markup')}']`;
      }
      if (element.hasAttribute('order')) {
        selector += `[order = '${element.getAttribute('order')}']`;
      }
      if (element.hasAttribute('location')) {
        selector += `[location = '${element.getAttribute('location')}']`;
      }
      return selector;
    };

    const selectElements = (container: HTMLElement, selector: string): void => {
      if (!selector.length) {
        return;
      }
      const elements = findElementCollections(selector);
      elements.forEach((el) => {
        if (el.closest('div')?.classList.contains('markup__item')
        || el.closest('div')?.classList.contains('markup__container')) {
          el.classList.add('selected-markup');
        } else if (el.classList.contains('picnic__item')) {
          el.classList.add('selected-element');
          el.setAttribute('tooltip', `${container.getAttribute('markup')}`);
          if (el.hasAttribute('state')) {
            el.setAttribute('state', 'stop');
          }
        }
      });
    };

    document.addEventListener('mouseover', (e:Event):void => {
      const { target } = e;
      if (target) {
        const element = target as HTMLElement;
        if (element.closest('div')?.classList.contains('markup__item')) {
          const container = element.closest('div');
          if (container) {
            const selector = createSelector(container);
            selectElements(container, selector);
          }
        }
        if (element.closest('div')?.classList.contains('picnic__item')) {
          const selector = createSelector(element);
          selectElements(element, selector);
        }
      }
    });

    document.addEventListener('mouseout', (e:Event):void => {
      const { target } = e;
      if (target) {
        const element = target as HTMLElement;
        if (element.closest('div')?.classList.contains('markup__item')
        || element.closest('div')?.classList.contains('picnic__item')) {
          if (findElementCollections('.selected-element') && findElementCollections('.selected-markup')) {
            const selectedElements = findElementCollections('.selected-element');
            const selectedMarkup = findElementCollections('.selected-markup');
            selectedElements.forEach((el) => {
              el.classList.remove('selected-element');
              el.removeAttribute('tooltip');
              if (el.hasAttribute('state')) {
                el.setAttribute('state', 'active');
              }
            });
            selectedMarkup.forEach((el) => {
              el.classList.remove('selected-markup');
            });
          }
        }
      }
    });

    levelsList.addEventListener('click', (e: Event): void => {
      const { target } = e;
      if (
        target instanceof HTMLElement && target.classList.contains('levels-list__item')
      ) {
        this.level.render(Number(target.getAttribute('level')));
      }
    });
  }
}

export default Page;
