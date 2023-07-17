const localStorageMock = ((): Partial<Storage> => {
  let store: { [key: string]: string } = {};
  return {
    getItem(key: string): string | null {
      return store[key];
    },
    setItem(key: string, value: string): void {
      store[key] = value.toString();
    },
    clear(): void {
      store = {};
    },
    removeItem(key: string): void {
      delete store[key];
    },
  };
})();

export default localStorageMock;
