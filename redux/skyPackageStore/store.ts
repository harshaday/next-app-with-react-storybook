import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import rootReducer from "./rootReducer";

export interface SkyPackage {
  skyPackages: any;
}

const store = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<Store<SkyPackage>>(store, { debug: true });
