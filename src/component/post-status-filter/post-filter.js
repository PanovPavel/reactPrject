import React, {Component} from "react";
import './post-status-filter.css'
import {Button} from 'reactstrap';

export default class PostFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            like: false
        }
    }
    onLikeFilter(){
        this.setState(state=>{
            this.props.changeLikeFilter(true);
            return {
                like: true
            }
        })
    }
    onAllFilter(){
        this.setState(state=>{
            this.props.changeLikeFilter(false);
            return{
                like: false
            }
        })
    }
    render() {
        const outline = (this.state.like) ? `outline` : '';
        return(
            <div>
                <Button onClick={()=>this.onAllFilter()} outline={this.state.like} color='info' type='button' >Всё</Button>
                <Button onClick={()=>this.onLikeFilter()} outline={!this.state.like} color='info' type='button'>Понравилось</Button>
            </div>
        )
    }
}


