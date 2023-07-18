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

    const mainWrapper = createBlock({
      tag: 'div',
      className: 'main-wrapper',
      parentBlock: body,
    });

    const header = createBlock({
      tag: 'header',
      className: 'main-wrapper__header header',
      parentBlock: mainWrapper,
    });

    const headerLogo = createBlock({
      tag: 'h1',
      className: 'header__logo',
      innerHTML: 'CSS Picnic',
      parentBlock: header,
    });

    const task = createBlock({
      tag: 'h2',
      className: 'main-wrapper__task',
      parentBlock: mainWrapper,
    });

    const helpBtn = createBlock({
      tag: 'div',
      className: 'main-wrapper__btn-help',
      innerHTML: 'Help',
      parentBlock: mainWrapper,
    });

    const picnic = createBlock({
      tag: 'div',
      className: 'main-wrapper__picnic picnic',
      parentBlock: mainWrapper,
    });

    const codeWrapper = createBlock({
      tag: 'div',
      className: 'main-wrapper__code-wrapper',
      parentBlock: mainWrapper,
    });

    const codeContainer = createBlock({
      tag: 'div',
      className: 'code-container',
      parentBlock: codeWrapper,
    });

    const cssEditor = createBlock({
      tag: 'div',
      className: 'code-container__item css-editor',
      parentBlock: codeContainer,
    });

    const cssEditorHeader = createBlock({
      tag: 'div',
      className: 'css-editor__header code-header',
      parentBlock: cssEditor,
    });

    const cssEditorHeaderTitle = createBlock({
      tag: 'p',
      className: 'light-text',
      innerHTML: 'CSS Editor',
      parentBlock: cssEditorHeader,
    });

    const cssEditorHeaderLang = createBlock({
      tag: 'p',
      innerHTML: 'style.css',
      parentBlock: cssEditorHeader,
    });

    const cssEditorContent = createBlock({
      tag: 'div',
      className: 'css-editor__content code-content',
      parentBlock: cssEditor,
    });

    const cssContentLineNumbers = createBlock({
      tag: 'div',
      className: 'code-content__line-numbers line-numbers line-numbers_css',
      parentBlock: cssEditorContent,
    });

    const cssEditField = createBlock({
      tag: 'div',
      className: 'code-content__code css-edit-field',
      parentBlock: cssEditorContent,
    });

    const textareaField = createBlock({
      tag: 'div',
      className: 'css-edit-field__textarea-field textarea-field',
      parentBlock: cssEditField,
    });

    const textareaContainer = createBlock({
      tag: 'div',
      className: 'textarea-field__textarea-container textarea-container',
      parentBlock: textareaField,
    });

    const textarea = createBlock({
      tag: 'textarea',
      className: 'textarea-container__textarea textarea',
      parentBlock: textareaContainer,
    });

    const textareaMarkup = createBlock({
      tag: 'div',
      className: 'textarea-container__textarea-markup textarea-markup',
      parentBlock: textareaContainer,
    });

    const textareaPre = createBlock({
      tag: 'pre',
      className: 'textarea-markup__pre',
      parentBlock: textareaMarkup,
    });

    const textareaCode = createBlock({
      tag: 'code',
      className: 'textarea-markup__code',
      innerHTML: 'Type in a CSS selector',
      parentBlock: textareaPre,
    });

    const textareaBtn = createBlock({
      tag: 'div',
      className: 'textarea-field__btn',
      innerHTML: 'Enter',
      parentBlock: textareaField,
    });

    const htmlViewer = createBlock({
      tag: 'div',
      className: 'code-container__item html-viewer',
      parentBlock: codeContainer,
    });

    const htmlViewerHeader = createBlock({
      tag: 'div',
      className: 'html-viewer__header code-header',
      parentBlock: htmlViewer,
    });

    const htmlViewerHeaderTitle = createBlock({
      tag: 'p',
      className: 'light-text',
      innerHTML: 'HTML Viewer',
      parentBlock: htmlViewerHeader,
    });

    const htmlViewerHeaderLang = createBlock({
      tag: 'p',
      innerHTML: 'table.html',
      parentBlock: htmlViewerHeader,
    });

    const htmlViewerContent = createBlock({
      tag: 'div',
      className: 'html-viewer__content code-content',
      parentBlock: htmlViewer,
    });

    const htmlViewerLineNumbers = createBlock({
      tag: 'div',
      className: 'code-content__line-numbers line-numbers line-numbers_html',
      parentBlock: htmlViewerContent,
    });

    const htmlViewField = createBlock({
      tag: 'div',
      className: 'code-content__code html-view-field',
      parentBlock: htmlViewerContent,
    });

    const markup = createBlock({
      tag: 'div',
      className: 'markup',
      parentBlock: htmlViewField,
    });

    const basicLinesAmount = 20;
    for (let i = 1; i <= basicLinesAmount; i += 1) {
      cssContentLineNumbers.innerHTML += `${i}<br>`;
      htmlViewerLineNumbers.innerHTML += `${i}<br>`;
    }

    const footer = createBlock({
      tag: 'footer',
      className: 'main-wrapper__footer footer',
      parentBlock: mainWrapper,
    });

    const footerContent = createBlock({
      tag: 'div',
      className: 'footer__content footer-content',
      innerHTML: 'Made by',
      parentBlock: footer,
    });

    const footerGuthubLink = createBlock({
      tag: 'a',
      className: 'link  link_gh',
      innerHTML: '@nvalkovich',
      parentBlock: footerContent,
    });
    footerGuthubLink.href = 'https://github.com/nvalkovich';

    const footerRSSLinkContainer = createBlock({
      tag: 'div',
      className: 'footer-content__rss-link-container rss-link-container',
      parentBlock: footerContent,
    });

    const footerRSSLink = createBlock({
      tag: 'a',
      className: 'rss-link-container__link link rss-link',
      parentBlock: footerRSSLinkContainer,
    });
    footerRSSLink.href = 'https://rs.school/js/';

    const levelsWrapper = createBlock({
      tag: 'div',
      className: 'levels-wrapper',
      parentBlock: mainWrapper,
    });

    const levelsContainer = createBlock({
      tag: 'div',
      className: 'levels',
      parentBlock: levelsWrapper,
    });

    const levelsTitle = createBlock({
      tag: 'h2',
      className: 'levels__title',
      innerHTML: 'Levels',
      parentBlock: levelsContainer,
    });

    const levelsList = createBlock({
      tag: 'ul',
      className: 'levels__list levels-list',
      parentBlock: levelsContainer,
    });

    const levelsNumber: number = levelsConfig.length;

    for (let i = 0; i < levelsNumber; i += 1) {
      const levelsItem = createBlock({
        tag: 'li',
        className: 'levels-list__item',
        innerHTML: `Level ${levelsConfig[i].level}`,
        parentBlock: levelsList,
      });
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

    const levelsResetBtn = createBlock({
      tag: 'div',
      className: 'levels__btn',
      innerHTML: 'Reset',
      parentBlock: levelsContainer,
    });

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
        this.level.removeCurrentLevel();
        this.level.render(Number(target.getAttribute('level')));
      }
    });
  }
}

export default Page;
