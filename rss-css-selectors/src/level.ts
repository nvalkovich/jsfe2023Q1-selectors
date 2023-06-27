import levelsConfig from './levelsConfig';
import Storage from './storage';

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
      markup.innerHTML = `${htmlMarkup}`;
    }

    this.currentLevel = level;
    this.storage.setLevel(this.currentLevel);
  }

  public checkSelector(value: string): void {
    if (value === levelsConfig[this.currentLevel - 1].selector) {
      this.render(this.currentLevel + 1);
      const input: HTMLInputElement | null = document.querySelector('.input-container__input');
      if (input) {
        input.value = '';
      }
    } else {
      console.log('invalid');
    }
  }

  public getSelector(): string {
    return levelsConfig[this.currentLevel - 1].selector;
  }
}

export default Level;
