import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import rootReducer from "./rootReducer";

export interface postType {
  id: number;
  title: string;
  body: string;
  imgSrc: string;
}
export interface PostState {
  posts: any;
}

const store = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<Store<PostState>>(store, { debug: true });
