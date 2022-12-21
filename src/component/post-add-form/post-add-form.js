import React from "react";

export default class PostAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onValueChange(event){
        console.log(event.target.value)
        this.setState(state=>{
            return{
                text: event.target.value
            }
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAddPost(this.state.text)
        this.setState(state=>{
            return{
                text:``
            }
        })
    }
    render(){
        const {onAddPost} = this.props;
        return(
            <>
                <form className='d-flex bottom-panel'>
                    <input onChange={this.onValueChange} onSubmit={this.onSubmit} value={this.state.text} type='text' placeholder='Добавить пост' className='form-control new-post-label'/>
                    <button onClick={this.onSubmit} type='submit' className='btn btn-outline-secondary'>Добавить</button>
                </form>

            </>
        )
    }
}
