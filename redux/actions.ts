import { PostState } from './store';
//Action Types
export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POSTS = 'DELETE_POSTS';

export const fetchPosts = (posts: PostState) => ({
    type: FETCH_POSTS,
    payload: posts
});

export const deletePosts = (postsid: number) => ({
    type: DELETE_POSTS,
    payload: postsid
})
