import { createContext } from "react";
import RootStore from "../stores/index";

const store = new RootStore();

store.portfolioStore.loadAllItems();

export const storeContext = createContext(store);