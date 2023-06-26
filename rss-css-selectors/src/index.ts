import './styles/animation.css';
import './styles/style.css';
import Page from './page';
import Level from './level';

const page = new Page();
const level = new Level();

page.render();
level.render(1);

const input: HTMLInputElement | null = document.querySelector('.input-container__input');
const inputBtn: HTMLDivElement | null = document.querySelector('.input-container__btn');

if (inputBtn && input) {
  inputBtn.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const { value } = input;
      level.checkSelector(value);
    }
  });
  input.addEventListener('keyup', (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const { value } = input;
      level.checkSelector(value);
    }
  });
}

const helpBtn: HTMLDivElement | null = document.querySelector('.main-wrapper__btn-help');

if (helpBtn && input) {
  helpBtn.addEventListener('click', (): void => {
    const selector = level.getSelector();
    input.value = selector;
  });
}

const levelsList: HTMLDivElement | null = document.querySelector('.levels-list');

if (levelsList) {
  levelsList.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (
      target instanceof HTMLElement && target.classList.contains('levels-list__item')
    ) {
      level.render(Number(target.id));
      console.log(`rendered task ${level}`);
    }
  });
}
