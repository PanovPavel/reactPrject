import React from "react";
import './post-list-item.css'
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

        return(
            <li  className={`d-flex justify-content-between app-list-item`}>
                <span onClick={this.onLike} className={`app-list-item-label ${this.state.impotent ? 'important' : ''}`}>{this.props.textPost}</span>

                <div className='d-flex justify-content align-items-center'>
                    <button onClick={this.changeImpotent} className='btn-star btn-sn'>
                        <i className={`fa fa-star ${this.state.impotent ? 'important' : ''}`} aria-hidden="true">{`\u2605`}</i>
                    </button>
                    <button className='btn-trash btn-sn'>
                        <i className='fa fa-trash-o'>{'\u1F5D1'}</i>
                    </button>
                    <button onClick={this.onLike} className={`btn-trash btn-sn  ${this.state.like?'hidden':''}`}>
                        <i className='fa fa-trash-o'>{'\u2764'}</i>
                    </button>
                </div>
            </li>
        )
    }

}
export default PostListItem;