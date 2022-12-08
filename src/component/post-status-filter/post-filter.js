import React from "react";
import './post-status-filter.css'
const PostFilter = ()=>{
    return(
            <div className='btn-group'>
                <button type='button' class="btn btn-primary active">Всё</button>
                <button type='button' className='btn btn-primary'>Понравилось</button>
            </div>
    )
}
export default PostFilter;