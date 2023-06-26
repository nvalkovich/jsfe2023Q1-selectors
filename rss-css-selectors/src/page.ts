import levelsConfig from './levelsConfig';

class Page {
  public render(): void {
    const cssLineNumbers: HTMLDivElement | null = document.querySelector('.line-numbers_css');
    const htmlLineNumbers: HTMLDivElement | null = document.querySelector('.line-numbers_html');

    if (cssLineNumbers && htmlLineNumbers) {
      for (let i = 1; i <= 20; i += 1) {
        cssLineNumbers.innerHTML += `${i}<br>`;
        htmlLineNumbers.innerHTML += `${i}<br>`;
      }
    }

    const levelsContainer: HTMLDivElement | null = document.querySelector('.levels');
    const levelsTitle: HTMLHeadingElement | null = document.createElement('h2');
    levelsTitle.className = 'levels__title';
    levelsTitle.innerHTML = 'Levels';
    levelsContainer?.append(levelsTitle);
    const levelsList: HTMLUListElement | null = document.createElement('ul');
    levelsList.className = 'levels__list levels-list';
    levelsContainer?.append(levelsList);

    const levelsNumber: number = levelsConfig.length;

    for (let i = 0; i < levelsNumber; i += 1) {
      const levelsItem: HTMLLIElement | null = document.createElement('li');
      levelsItem.className = 'levels-list__item';
      levelsItem.innerHTML += `Level ${levelsConfig[i].level}`;
      levelsList.append(levelsItem);
      levelsItem.id = `${levelsConfig[i].level}`;
    }
  }
}

export default Page;
