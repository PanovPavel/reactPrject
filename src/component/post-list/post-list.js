import React from "react";
import './post-list.css'
import PostListItem from "../post-list-item/post-list-item";
const PostList =  ({posts})=>{
    let elements = posts.map((item)=>{
        return (
            <div>
                <PostListItem textPost={item.textPost} impotent={item.impotent} key={item.id} like={item.like}/>
            </div>
        )
    })
    return(
    <ul className='app-list list-group d-flex'>
        {elements}
    </ul>
    )
}
export default PostList;