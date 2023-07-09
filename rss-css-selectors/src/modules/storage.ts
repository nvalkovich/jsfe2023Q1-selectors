const getLocalStorage = (key: string): string | null => localStorage.getItem(key);

const parseLocalStorage = <T>(key: string): T | null => {
  const value = getLocalStorage(key);
  if (value === null) return value;
  try {
    return JSON.parse(value);
  } catch (e) {
    throw new Error();
  }
};

const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(
    key,
    value,
  );
};

const stringifyLocalStorage = <T>(key: string, value: T): void => {
  const string = JSON.stringify(value);
  setLocalStorage(key, string);
};

const clearLocalStorage = (): void => localStorage.clear();

export default {
  parseLocalStorage,
  stringifyLocalStorage,
  clearLocalStorage,
};
