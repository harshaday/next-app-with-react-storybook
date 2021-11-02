import { PostState } from "./store";
import { FETCH_POSTS, DELETE_POSTS } from "./actions";

const postInitialState: PostState = {
  posts: [],
};

export const postReducer = (state = postInitialState, action) => {
  console.log(state);

  switch (action.type) {
    case FETCH_POSTS:
      if (state.posts.length > 1) {
        return state;
      }
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POSTS:
      let updatedPosts = { ...state };
      updatedPosts = updatedPosts.posts.filter(
        (post) => post.id !== action.payload
      );
      deletePosts(action.payload);
      return {
        ...state,
        posts: updatedPosts,
      };
    default: {
      return state;
    }
  }
};
const deletePosts = async (id) => {
  const res = await fetch("http://localhost:3002/skyPackages/" + id, {
    method: "DELETE",
  });
  console.log(res);
};

export default postReducer;
