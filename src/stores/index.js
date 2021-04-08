import GraphQLService from "../contentfull";
import { action, decorate, observable } from "mobx";


class PortfolioStore {
    constructor() {
        this.portfolioItems = [];
        this.graphQlService = new GraphQLService();
    }

    loadAllItems = async () => {
        const items = await this.graphQlService.getAll();
        console.log(items.portfolioItemCollection.items);
        this.portfolioItems.push(items)
    }
}

decorate(PortfolioStore, {
    portfolioItems: observable, 
    loadAllItems: action
})


export default PortfolioStore; 