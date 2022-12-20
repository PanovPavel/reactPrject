import React from "react";
import './post-list.css'
import PostListItem from "../post-list-item/post-list-item";

const PostList =  ({data, onDelete})=>{
    let elements = data.map((item)=>{
        const {id, ...itemProps} = item;
        return (
            <div key={id}>
                <PostListItem {...itemProps}
                              onDelete={()=>{
                                    onDelete(id);
                              }}
                />
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