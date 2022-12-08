import React from "react";
import Header from '../app-header'
import Search from "../search-panel/search";
import PostFilter from "../post-status-filter/post-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'
const App = ()=>{
    return(
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <Search/>
                <PostFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App;