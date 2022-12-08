import React from "react";

const PostAddForm = ()=>{
    return(
        <>
            <form className='d-flex bottom-panel'>
                <input type='text' placeholder='Добавить пост' className='form-control new-post-label'/>
                <button type='submit' className='btn btn-outline-secondary'>Добавить</button>
            </form>

        </>
    )
}
export default PostAddForm;