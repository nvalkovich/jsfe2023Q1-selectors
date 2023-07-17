import Level from '../src/modules/level';
import levelsConfig from '../src/modules/levelsConfig';
import { stringifyLocalStorage } from '../src/modules/storage';

import localStorageMock from './localStorageMock';

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('Level module', () => {
  test('check is it ".red" ?', () => {
    const level = new Level();
    level.setCurrentLevel(3);
    expect(level.getSelector()).toBe('.red');
  });
  test('check is it "plate" when specifying non-existent levels?', () => {
    const level = new Level();
    level.setCurrentLevel(11);
    expect(level.getSelector()).toBe('plate');
    level.setCurrentLevel(0);
    expect(level.getSelector()).toBe('plate');
  });
  test('check is getting a config-index correct', () => {
    const level = new Level();
    level.setCurrentLevel(10);
    expect(level.getCurrentConfigIndex()).toBe(9);
    expect(level.getCurrentConfigIndex()).toBeLessThanOrEqual(9);
    level.setCurrentLevel(3);
    expect(level.getCurrentConfigIndex()).toBe(2);
    expect(level.getCurrentConfigIndex()).toBeLessThanOrEqual(9);
  });
  test('check creating tag for markup ', () => {
    const level = new Level();
    expect(level.createTag(levelsConfig[1].html)).toBe('<div class="picnic-blanket">');
  });
  test('check getting passingLevels', () => {
    const level = new Level();
    const passedLevels = level.getPassedLevelsArray();
    expect(passedLevels).toStrictEqual([]);
  });
  test('check if the level is passed', () => {
    const level = new Level();
    stringifyLocalStorage('passedLevelsKey', '[1, 5, 8, 4]');
    expect(level.isLevelPassed(7)).toBeFalsy();
    expect(level.isLevelPassed(5)).toBeTruthy();
  });
  test('check correctness of received goal elements number', () => {
    const level = new Level();
    level.setCurrentLevel(5);
    expect(level.getGoalElementsNum()).toBeTruthy();
    expect(level.getGoalElementsNum()).toBe(3);
  });
  test('check render non-existent level', () => {
    const level = new Level();
    expect(level.render(11)).toBeUndefined();
  });
});
