import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import levelsConfig from './levelsConfig';
import Level from './level';
import storage from './storage';
import helpers from './helpers';

hljs.registerLanguage('css', css);

class Page {
  private readonly level: Level;

  private passedLevels = storage.parseLocalStorage<number[]>('passedLevelsKey') || [];

  private helpPassedLevel = storage.parseLocalStorage<number[]>('helpPassedLevels') || [];

  constructor() {
    this.level = new Level();
  }

  public render(): void {
    const body = helpers.findElement<HTMLBodyElement>('body');

    const mainWrapper: HTMLDivElement = document.createElement('div');
    mainWrapper.className = 'main-wrapper';
    body.append(mainWrapper);

    const header: HTMLElement = document.createElement('header');
    header.className = 'main-wrapper__header header';
    mainWrapper.append(header);

    const headerLogo: HTMLHeadingElement = document.createElement('h1');
    headerLogo.className = 'header__logo';
    headerLogo.innerHTML = 'CSS Picnic';
    header.append(headerLogo);

    const task: HTMLHeadingElement = document.createElement('h2');
    task.className = 'main-wrapper__task';
    mainWrapper.append(task);

    const helpBtn: HTMLDivElement = document.createElement('div');
    helpBtn.className = 'main-wrapper__btn-help';
    helpBtn.innerHTML = 'Help';
    mainWrapper.append(helpBtn);

    const picnic: HTMLDivElement = document.createElement('div');
    picnic.className = 'main-wrapper__picnic picnic';
    mainWrapper.append(picnic);

    const codeWrapper: HTMLDivElement = document.createElement('div');
    codeWrapper.className = 'main-wrapper__code-wrapper';
    mainWrapper.append(codeWrapper);

    const codeContainer: HTMLDivElement = document.createElement('div');
    codeContainer.className = 'code-container';
    codeWrapper.append(codeContainer);

    const cssEditor: HTMLDivElement = document.createElement('div');
    cssEditor.className = 'code-container__item css-editor';
    codeContainer.append(cssEditor);

    const cssEditorHeader: HTMLDivElement = document.createElement('div');
    cssEditorHeader.className = 'css-editor__header code-header';
    cssEditor.append(cssEditorHeader);

    const cssEditorHeaderTitle: HTMLParagraphElement = document.createElement('p');
    cssEditorHeaderTitle.className = 'light-text';
    cssEditorHeaderTitle.innerText = 'CSS Editor';
    cssEditorHeader.append(cssEditorHeaderTitle);

    const cssEditorHeaderLang: HTMLParagraphElement = document.createElement('p');
    cssEditorHeaderLang.innerText = 'style.css';
    cssEditorHeader.append(cssEditorHeaderLang);

    const cssEditorContent: HTMLDivElement = document.createElement('div');
    cssEditorContent.className = 'css-editor__content code-content';
    cssEditor.append(cssEditorContent);

    const cssContentLineNumbers: HTMLDivElement = document.createElement('div');
    cssContentLineNumbers.className = 'code-content__line-numbers line-numbers line-numbers_css';
    cssEditorContent.append(cssContentLineNumbers);

    const cssEditField: HTMLDivElement = document.createElement('div');
    cssEditField.className = 'code-content__code css-edit-field';
    cssEditorContent.append(cssEditField);

    const textareaField: HTMLDivElement = document.createElement('div');
    textareaField.className = 'css-edit-field__textarea-field textarea-field ';
    cssEditField.append(textareaField);

    const textareaContainer: HTMLDivElement = document.createElement('div');
    textareaContainer.className = 'textarea-field__textarea-container textarea-container';
    textareaField.append(textareaContainer);

    const textarea: HTMLTextAreaElement = document.createElement('textarea');
    textarea.className = 'textarea-container__textarea textarea';
    textareaContainer.append(textarea);

    const textareaMarkup: HTMLDivElement = document.createElement('div');
    textareaMarkup.className = 'textarea-container__textarea-markup textarea-markup';
    textareaContainer.append(textareaMarkup);

    const textareaPre = document.createElement('pre');
    textareaPre.className = 'textarea-markup__pre';
    textareaMarkup.append(textareaPre);

    const textareaCode = document.createElement('code');
    textareaCode.className = 'textarea-markup__code';
    textareaCode.innerHTML = 'Type in a CSS selector';
    textareaPre.append(textareaCode);

    const textareaBtn: HTMLDivElement = document.createElement('div');
    textareaBtn.innerHTML = 'Enter';
    textareaBtn.className = 'textarea-field__btn';
    textareaField.append(textareaBtn);

    const htmlViewer: HTMLDivElement = document.createElement('div');
    htmlViewer.className = 'code-container__item html-viewer';
    codeContainer.append(htmlViewer);

    const htmlViewerHeader: HTMLDivElement = document.createElement('div');
    htmlViewerHeader.className = 'html-viewer__header code-header';
    htmlViewer.append(htmlViewerHeader);

    const htmlViewerHeaderTitle: HTMLParagraphElement = document.createElement('p');
    htmlViewerHeaderTitle.className = 'light-text';
    htmlViewerHeaderTitle.innerText = 'HTML Viewer';
    htmlViewerHeader.append(htmlViewerHeaderTitle);

    const htmlViewerHeaderLang: HTMLParagraphElement = document.createElement('p');
    htmlViewerHeaderLang.innerText = 'table.html';
    htmlViewerHeader.append(htmlViewerHeaderLang);

    const htmlViewerContent: HTMLDivElement = document.createElement('div');
    htmlViewerContent.className = 'html-viewer__content code-content';
    htmlViewer.append(htmlViewerContent);

    const htmlViewerLineNumbers: HTMLDivElement = document.createElement('div');
    htmlViewerLineNumbers.className = 'code-content__line-numbers line-numbers line-numbers_html';
    htmlViewerContent.append(htmlViewerLineNumbers);

    const htmlViewField: HTMLDivElement = document.createElement('div');
    htmlViewField.className = 'code-content__code html-view-field';
    htmlViewerContent.append(htmlViewField);

    const markup: HTMLDivElement = document.createElement('div');
    markup.className = 'markup';
    htmlViewField.append(markup);

    const basicLinesAmount = 20;
    for (let i = 1; i <= basicLinesAmount; i += 1) {
      cssContentLineNumbers.innerHTML += `${i}<br>`;
      htmlViewerLineNumbers.innerHTML += `${i}<br>`;
    }

    const footer: HTMLElement = document.createElement('footer');
    footer.className = 'main-wrapper__footer footer';
    mainWrapper.append(footer);

    const footerContent: HTMLDivElement = document.createElement('div');
    footerContent.className = 'footer__content footer-content';
    footerContent.innerText = 'Made by ';
    footer.append(footerContent);

    const footerGuthubLink: HTMLAnchorElement = document.createElement('a');
    footerGuthubLink.className = 'link  link_gh';
    footerGuthubLink.href = 'https://github.com/nvalkovich';
    footerGuthubLink.innerText = '@nvalkovich';
    footerContent.append(footerGuthubLink);

    const footerRSSLinkContainer: HTMLDivElement = document.createElement('div');
    footerRSSLinkContainer.className = 'footer-content__rss-link-container rss-link-container';
    footerContent.append(footerRSSLinkContainer);

    const footerRSSLink: HTMLAnchorElement = document.createElement('a');
    footerRSSLink.className = 'rss-link-container__link link rss-link';
    footerRSSLink.href = 'https://rs.school/js/';
    footerRSSLinkContainer.append(footerRSSLink);

    const levelsWrapper: HTMLDivElement = document.createElement('div');
    levelsWrapper.className = 'levels-wrapper';
    mainWrapper.append(levelsWrapper);

    const levelsContainer: HTMLDivElement = document.createElement('div');
    levelsContainer.className = 'levels';
    levelsWrapper.append(levelsContainer);

    const levelsTitle: HTMLHeadingElement = document.createElement('h2');
    levelsTitle.className = 'levels__title';
    levelsTitle.innerHTML = 'Levels';
    levelsContainer.append(levelsTitle);

    const levelsList: HTMLUListElement = document.createElement('ul');
    levelsList.className = 'levels__list levels-list';
    levelsContainer.append(levelsList);

    const levelsNumber: number = levelsConfig.length;

    for (let i = 0; i < levelsNumber; i += 1) {
      const levelsItem: HTMLLIElement = document.createElement('li');
      levelsItem.className = 'levels-list__item';
      levelsItem.innerHTML += `Level ${levelsConfig[i].level}`;
      levelsList.append(levelsItem);
      levelsItem.setAttribute('level', `${levelsConfig[i].level}`);
    }

    this.passedLevels.forEach((level) => {
      const passedLevellistItem = helpers.findElement<HTMLLIElement>(`li[level='${level}']`);
      passedLevellistItem.classList.add('passed-level');
    });

    this.helpPassedLevel.forEach((level) => {
      const helpPassedLevellistItem = helpers.findElement<HTMLLIElement>(`li[level='${level}']`);
      helpPassedLevellistItem?.setAttribute('with-help', 'true');
    });

    const levelsResetBtn: HTMLDivElement = document.createElement('div');
    levelsResetBtn.textContent = 'Reset';
    levelsResetBtn.className = 'levels__btn';
    levelsContainer.append(levelsResetBtn);

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

    const createCssMarkup = ():void => {
      textareaCode.innerHTML = '';
      textareaCode.innerHTML = hljs.highlight(
        textarea.value,
        {
          language: 'css',
        },
      ).value;
    };

    textarea.addEventListener('input', ():void => {
      createCssMarkup();
      if (textareaCode.innerHTML.length === 0) {
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
          textareaCode.innerHTML = hljs.highlight(
            result,
            {
              language: 'css',
            },
          ).value;
          i += 1;
        }
        textarea.value = result;
      }, 100);
    };

    helpBtn.addEventListener('click', (): void => {
      const currentListItem = helpers.findElement<HTMLLIElement>('.current-level');
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
      if (selector.length === 0) {
        return;
      }
      const elements = helpers.findElementCollections(selector);
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
          if (helpers.findElementCollections('.selected-element') && helpers.findElementCollections('.selected-markup')) {
            const selectedElements = helpers.findElementCollections('.selected-element');
            const selectedMarkup = helpers.findElementCollections('.selected-markup');
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
