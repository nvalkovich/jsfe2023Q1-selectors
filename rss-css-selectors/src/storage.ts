class Storage {
  private readonly levelKey;

  private readonly passedLevelsKey;

  constructor() {
    this.levelKey = 'level';
    this.passedLevelsKey = 'passedLevelsKey';
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
}

export default Storage;
