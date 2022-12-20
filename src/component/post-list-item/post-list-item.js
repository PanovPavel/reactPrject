import React from "react";
import './asdda.scss'
import deleteImg from './img/delete.png'
class PostListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            impotent: this.props.impotent,
            like: this.props.like,
        }
        this.changeImpotent = this.changeImpotent.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    changeImpotent(){
        this.setState(state => ({
            impotent: !this.state.impotent
        }))
    }
    onLike(){
        this.setState(like =>({
            like: !this.state.like,
        }))
    }
    render() {
        const {onDelete} = this.props;

        return(
            <li  className={`d-flex justify-content-between app-list-item`}>
                <span onClick={this.onLike} className={`app-list-item-label ${this.state.impotent ? 'important' : ''}`}>{this.props.textPost}</span>

                <div className='d-flex justify-content align-items-center'>
                    <button onClick={this.changeImpotent} className='btn-star btn-sn'>
                        <span className={`fa fa-star ${this.state.impotent ? 'important' : ''}`} aria-hidden="true">{`\u2605`}</span>
                    </button>
                    <button onClick={onDelete} className='btn-trash btn-sn'>
                        <span className='fa fa-trash-o'><img src={deleteImg} width={'20px'} height={'20px'}/></span>
                    </button>
                    <button onClick={this.onLike} className={`btn-trash btn-sn  ${this.state.like?'hidden':''}`}>
                        <span className='fa fa-trash-o'>{'\u2764'}</span>
                    </button>
                </div>
            </li>
        )
    }

}
export default PostListItem;