class UIStore {
  constructor(rootStore) {
    this.number = 0;
    this.progress = 1;
  }

  setNumber = (number) => {
    this.number = number;
    this.progress = this.number + 1;
    return this.number;
  };

  setProgress = (number) => {
    this.progress = number;
    return this.progress;
  };
}

export default UIStore;
