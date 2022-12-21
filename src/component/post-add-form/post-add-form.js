import React from "react";

const PostAddForm = (props)=>{
    const {onAddPost} = props;
    return(
        <>
            <form className='d-flex bottom-panel'>
                <input type='text' placeholder='Добавить пост' className='form-control new-post-label'/>
                <button onClick={()=>{onAddPost("textPost")}} type='submit' className='btn btn-outline-secondary'>Добавить</button>
            </form>

        </>
    )
}
export default PostAddForm;