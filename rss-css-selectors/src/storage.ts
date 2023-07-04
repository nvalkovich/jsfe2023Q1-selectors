class Storage {
  private readonly levelKey;

  private readonly passedLevelsKey;

  private readonly helpPassedLevelsKey;

  constructor() {
    this.levelKey = 'level';
    this.passedLevelsKey = 'passedLevelsKey';
    this.helpPassedLevelsKey = 'helpPassedLevels';
  }

  public setLevel = (level: number): void => localStorage.setItem(this.levelKey, level.toString());

  public getLevel = (): number => +(localStorage.getItem(this.levelKey) || 1);

  public setPassedLevels = (passedLevels:number[]): void => localStorage.setItem(
    this.passedLevelsKey,
    JSON.stringify(passedLevels),
  );

  public getPassedLevels = ():number[] => JSON.parse(
    localStorage.getItem(this.passedLevelsKey) as string,
  ) || [];

  public setLevelsPassedWithHelp = (levelsPassedWithHelp:number[]): void => localStorage.setItem(
    this.helpPassedLevelsKey,
    JSON.stringify(levelsPassedWithHelp),
  );

  public getLevelsPassedWithHelp = ():number[] => JSON.parse(
    localStorage.getItem(this.helpPassedLevelsKey) as string,
  ) || [];

  public clearLocalStorage = (): void => localStorage.clear();
}

export default Storage;
