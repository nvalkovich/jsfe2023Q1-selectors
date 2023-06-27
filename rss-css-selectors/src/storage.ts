class Storage {
  private readonly levelKey;

  constructor() {
    this.levelKey = 'level';
  }

  public setLevel = (level: number): void => localStorage.setItem(this.levelKey, level.toString());

  public getLevel = (): number => +(localStorage.getItem(this.levelKey) || 1);
}

export default Storage;
