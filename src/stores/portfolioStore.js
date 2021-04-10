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
        console.log(items.portfolioItemCollection.items);
        items.portfolioItemCollection.items.forEach(item => {
            this.portfolioItems.push(item);
        });
    }
}

decorate(PortfolioStore, {
    portfolioItems: observable, 
    loadAllItems: action
})


export default PortfolioStore; 