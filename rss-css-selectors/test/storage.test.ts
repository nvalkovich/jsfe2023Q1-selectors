import {
  getLocalStorage, parseLocalStorage, setLocalStorage, stringifyLocalStorage, clearLocalStorage,
} from '../src/modules/storage';

import localStorageMock from './localStorageMock';

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('Level module', () => {
  test('check setting to localStorage', () => {
    setLocalStorage('level', '7');
    expect(getLocalStorage('level')).toStrictEqual('7');
    expect(getLocalStorage('level')).not.toBeNull();
  });
  test('check getting non-existent value from localStorage', () => {
    expect(getLocalStorage('time')).toBeUndefined();
  });
  test('check parsing value from localStorage', () => {
    expect(parseLocalStorage('level')).toBe(7);
    setLocalStorage('empty', '');
    expect(parseLocalStorage('empty')).toBeNull();
  });
  test('check stringify value', () => {
    stringifyLocalStorage('level', 3);
    expect(getLocalStorage('level')).toBe('3');
  });
  test('check localStorage cleansing', () => {
    expect(clearLocalStorage()).toBeUndefined();
  });
});
