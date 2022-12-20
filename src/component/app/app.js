import React from "react";
import Header from '../app-header'
import Search from "../search-panel/search";
import PostFilter from "../post-status-filter/post-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'
const App = ()=>{
    let data = [
        { id: 1, textPost: 'Первый', impotent: true, like: false},
        { id: 2, textPost: 'Второй', impotent: false, like: true},
        { id: 3, textPost: 'Третий пост', impotent: true, like: true },
        { id: 4, textPost: 'Четвёртый', impotent: true, like: true},
        { id: 5, textPost: 'Пятый', impotent: false, like: false}
    ];
    return(
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <Search/>
                <PostFilter/>
            </div>
            <PostList data={data}
                      onDelete={(id)=>{
                          console.log("App delete" + id);
                      }}
            />
            <PostAddForm/>
        </div>
    )
}

export default App;