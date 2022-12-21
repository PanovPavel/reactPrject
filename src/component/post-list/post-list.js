import React from "react";
import './post-list.css'
import PostListItem from "../post-list-item/post-list-item";

const PostList =  ({data, onDelete, onLike, onImpotent})=>{
    let elements = data.map((item)=>{
        const {id, ...itemProps} = item;
        return (
            <div key={id}>
                <PostListItem {...itemProps}
                              onDelete={()=>{
                                    onDelete(id);
                              }}
                              onLike={()=>{
                                  onLike(id);
                              }}
                              onImpotent={()=>{
                                  onImpotent(id);
                              }}
                              like={item.like}
                              important={item.impotent}
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