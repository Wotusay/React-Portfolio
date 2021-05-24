import PortfolioStore from "./portfolioStore";

class RootStore {
  constructor() {
    this.portfolioStore = new PortfolioStore(this);
  }
}

export default RootStore;
