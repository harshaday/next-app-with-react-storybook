export interface Post{
    id: number;
    title:string,
    body:string,
    imgSrc:URL
}

export type PostsState = {
    posts: Post[]
}

export type PostsAction = {
    type: string,
    post: Post
}

export type dispatchType = (args: PostsAction) => PostsAction;