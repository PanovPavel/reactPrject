import React from "react";
import './asdda.scss'
import deleteImg from './img/delete.png'

class PostListItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {onDelete, onLike, onImpotent, textPost, like, important} = this.props;

        return(
            <li  className={`d-flex justify-content-between app-list-item`}>
                <span onClick={onLike} className={`app-list-item-label ${important ? 'important' : ''}`}>{textPost}</span>

                <div className='d-flex justify-content align-items-center'>
                    <button onClick={onImpotent} className='btn-star btn-sn'>
                        <span className={`fa fa-star ${important ? 'important' : ''}`} aria-hidden="true">{`\u2605`}</span>
                    </button>
                    <button onClick={onDelete} className='btn-trash btn-sn'>
                        <span className='fa fa-trash-o'><img src={deleteImg} width={'20px'} height={'20px'}/></span>
                    </button>
                    <button onClick={onLike} className={`btn-trash btn-sn  ${like ? '' : 'hidden'}`}>
                        <span className='fa fa-trash-o'>{'\u2764'}</span>
                    </button>
                </div>
            </li>
        )
    }

}
export default PostListItem;