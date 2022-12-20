import React from "react";
import './post-status-filter.css'
import {Button} from 'reactstrap';
const PostFilter = ()=>{
    return(
            <div>
                <Button  color='info' type='button' >Всё</Button>
                <Button outline color='info' type='button'>Понравилось</Button>
            </div>
    )
}
export default PostFilter;