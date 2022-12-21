import React, {Component} from "react";
import './search-panel.css'
export default class Search extends Component{
    constructor(props) {
        super(props)
        // this.state = {
        //     term: ''
        // }
        this.onTermUpdate = this.onTermUpdate.bind(this);
    }
    onTermUpdate(e){
        console.log(e.target.value)
        // this.setState(state=>{
        //     return{
        //         term: e.target.value
        //     }
        // })
        this.props.onTermUpdate(e.target.value);
    }
    render() {
        return (
            <>
                <div className='search-panel'>
                    <input onChange={this.onTermUpdate} className='search-input form-control' type='text'
                           placeholder='Поиск по записям'/>
                </div>
            </>
        )
    }
}
