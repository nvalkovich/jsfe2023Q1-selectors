import levelsConfig from './levelsConfig';
import Level from './level';

class Page {
  private readonly level: Level;

  constructor() {
    this.level = new Level();
  }

  public render(): void {
    const body: HTMLBodyElement | null = document.querySelector('body');

    const mainWrapper: HTMLDivElement = document.createElement('div');
    mainWrapper.className = 'main-wrapper';
    body?.append(mainWrapper);

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

    const inputContainer: HTMLDivElement = document.createElement('div');
    inputContainer.className = 'css-edit-field__input-container input-container';
    cssEditField.append(inputContainer);

    const input: HTMLInputElement = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type in a CSS selector';
    input.className = 'input-container__input';
    inputContainer.append(input);

    const inputBtn: HTMLDivElement = document.createElement('div');
    inputBtn.innerHTML = 'Enter';
    inputBtn.className = 'input-container__btn';
    inputContainer.append(inputBtn);

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

    const markup: HTMLPreElement = document.createElement('pre');
    markup.className = 'markup';
    htmlViewField.append(markup);

    for (let i = 1; i <= 20; i += 1) {
      cssContentLineNumbers.innerHTML += `${i}<br>`;
      htmlViewerLineNumbers.innerHTML += `${i}<br>`;
    }

    const footer: HTMLElement = document.createElement('footer');
    footer.className = 'main-wrapper__footer footer';
    mainWrapper.append(footer);

    const footerContent: HTMLParagraphElement = document.createElement('p');
    footerContent.innerText = 'Made by';
    footer.append(footerContent);

    const footerLink: HTMLAnchorElement = document.createElement('a');
    footerLink.className = 'link';
    footerLink.href = 'https://github.com/nvalkovich';
    footerLink.innerText = '@nvalkovich';
    footerContent.append(footerLink);

    const levelsWrapper: HTMLDivElement = document.createElement('div');
    levelsWrapper.className = 'levels-wrapper';
    mainWrapper.append(levelsWrapper);

    const levelsContainer: HTMLDivElement = document.createElement('div');
    levelsContainer.className = 'levels';
    levelsWrapper.append(levelsContainer);

    const levelsTitle: HTMLHeadingElement | null = document.createElement('h2');
    levelsTitle.className = 'levels__title';
    levelsTitle.innerHTML = 'Levels';
    levelsContainer.append(levelsTitle);

    const levelsList: HTMLUListElement | null = document.createElement('ul');
    levelsList.className = 'levels__list levels-list';
    levelsContainer.append(levelsList);

    const levelsNumber: number = levelsConfig.length;

    for (let i = 0; i < levelsNumber; i += 1) {
      const levelsItem: HTMLLIElement | null = document.createElement('li');
      levelsItem.className = 'levels-list__item';
      levelsItem.innerHTML += `Level ${levelsConfig[i].level}`;
      levelsList.append(levelsItem);
      levelsItem.setAttribute('level', `${levelsConfig[i].level}`);
    }

    inputBtn.addEventListener('click', (e: Event): void => {
      const { target } = e;
      if (target instanceof HTMLElement) {
        const { value } = input;
        this.level.checkSelector(value);
      }
    });

    input.addEventListener('keyup', (e: KeyboardEvent): void => {
      if (e.key === 'Enter') {
        const { value } = input;
        this.level.checkSelector(value);
      }
    });

    helpBtn.addEventListener('click', (): void => {
      const selector = this.level.getSelector();
      input.value = selector;
    });

    levelsList.addEventListener('click', (e: Event): void => {
      input.value = '';
      const { target } = e;
      if (
        target instanceof HTMLElement && target.classList.contains('levels-list__item')
      ) {
        const currentlistItem: HTMLLIElement | null = document.querySelector('.current-level');
        if (currentlistItem) {
          currentlistItem.classList.remove('current-level');
        }
        this.level.render(Number(target.getAttribute('level')));
      }
    });
  }
}

export default Page;
