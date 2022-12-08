import React from "react";
import './post-list-item.css'
const PostListItem = ({textPost, impotent = false})=>{
    return(
            <li className='app-list-item d-flex justify-content-between'>
                <span className='app-list-item-label'>{textPost}</span>

            <div className='d-flex justify-content align-items-center'>
                <button className='btn-star btn-sn'>
                    <i className="fa fa-star" aria-hidden="true">LK</i>
                </button>
                <button className='btn-trash btn-sn'>
                    <i className='fa fa-trash-o'>DL</i>
                </button>

            </div>
            </li>
    )
}
export default PostListItem;