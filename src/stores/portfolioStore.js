import GraphQLService from "../contentfull";
import { action, decorate, observable } from "mobx";

class PortfolioStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.portfolioItems = [];
    this.graphQlService = new GraphQLService();
  }

  loadAllItems = async () => {
    const items = await this.graphQlService.getAll();
    items.portfolioItemCollection.items.forEach((item) => {
      this.portfolioItems.push(item);
    });

  };

  findArrayWithSlug = (slug) => {
    let obj = this.portfolioItems.find(s => s.slug === slug);
    return obj;
  }
}

decorate(PortfolioStore, {
  portfolioItems: observable,
  loadAllItems: action,
});

export default PortfolioStore;
