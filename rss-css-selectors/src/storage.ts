const levelKey = 'level';
const passedLevelsKey = 'passedLevelsKey';
const helpPassedLevelsKey = 'helpPassedLevels';

const setLevel = (level: number): void => localStorage.setItem(levelKey, level.toString());
const getLevel = (): number => (Number(localStorage.getItem(levelKey)) || 1);

const setPassedLevels = (passedLevels:number[]): void => localStorage.setItem(
  passedLevelsKey,
  JSON.stringify(passedLevels),
);
const getPassedLevels = ():number[] => JSON.parse(
  localStorage.getItem(passedLevelsKey) as string,
) || [];

const setLevelsPassedWithHelp = (levelsPassedWithHelp:number[]): void => localStorage.setItem(
  helpPassedLevelsKey,
  JSON.stringify(levelsPassedWithHelp),
);

const getLevelsPassedWithHelp = ():number[] => JSON.parse(
  localStorage.getItem(helpPassedLevelsKey) as string,
) || [];

const clearLocalStorage = (): void => localStorage.clear();

export default {
  setLevel,
  getLevel,
  setPassedLevels,
  getPassedLevels,
  setLevelsPassedWithHelp,
  getLevelsPassedWithHelp,
  clearLocalStorage,
};
