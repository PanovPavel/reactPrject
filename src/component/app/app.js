import React from "react";
import Header from '../app-header'
import Search from "../search-panel/search";
import PostFilter from "../post-status-filter/post-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'
import data from "bootstrap/js/src/dom/data";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { id: 1, textPost: 'Первый', impotent: true, like: false},
                { id: 2, textPost: 'Второй', impotent: false, like: true},
                { id: 3, textPost: 'Третий пост', impotent: true, like: true },
                { id: 4, textPost: 'Четвёртый', impotent: true, like: true},
                { id: 5, textPost: 'Пятый', impotent: false, like: false}
            ]
        }
        this.deleteData = this.deleteData.bind(this);
    }
    deleteData(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem=>elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];
                return{
                    data: newArr
                }
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div className='app'>
                <Header dataLength={data.length} likeQTY={0}/>
                <div className='search-panel d-flex'>
                    <Search/>
                    <PostFilter/>
                </div>
                <PostList data={data}
                          onDelete={(id) => {
                              console.log("App delete" + id);
                              this.deleteData(id);
                          }}
                />
                <PostAddForm/>
            </div>
        )
    }
}

