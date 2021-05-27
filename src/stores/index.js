import PortfolioStore from "./portfolioStore";
import UIStore from "./uiStore";


class RootStore {
  constructor() {
    this.portfolioStore = new PortfolioStore(this);
    this.uiStore = new UIStore(this)
  }
}

export default RootStore;
