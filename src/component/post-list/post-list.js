import React from "react";
import './post-list.css'
import PostListItem from "../post-list-item/post-list-item";
const PostList = ()=>{
    return(
            <ul className='app-list list-group d-flex'>
                <PostListItem textPost='Певый пост'/>
                <PostListItem textPost='Второй пост'/>
                <PostListItem textPost='Третий пост'/>
            </ul>
    )
}
export default PostList;