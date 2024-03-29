import React from "react";
import Header from '../app-header'
import Search from "../search-panel/search";
import PostFilter from "../post-status-filter/post-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'

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
            ],
            term: '',
            likeFilter: false,
        }
        this.maxId =  5;
        this.deleteData = this.deleteData.bind(this);
        this.onAddPost = this.onAddPost.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onImpotent = this.onImpotent.bind(this);
        this.onTermUpdate = this.onTermUpdate.bind(this);
        this.changeLikeFilter = this.changeLikeFilter.bind(this);
    }
    changeLikeFilter(likeFilter){
        this.setState(state=>{
            return{
                likeFilter: likeFilter
            }
        })
    }
    searchPost (dates, term, likeFilter){
        let findPosts;
        if(term === 0) findPosts = dates;
        else{
            findPosts = dates.filter((item) => {
                return (item.textPost.toLocaleLowerCase().indexOf(term.toLocaleLowerCase())) > -1
            });
        }
        if(likeFilter){
            return findPosts.filter((item)=>item.like === true);
        }
        else if(likeFilter == false){
            return findPosts;
        }
    }
    onTermUpdate(textTerm){
        this.setState(state=>{
            return{
                term: textTerm
            }
        })
    }
    onLike(id){
        console.log("like" + id);
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })
    }
    onImpotent(id){
        console.log("impotent" + id)
        this.setState(({data})=>{
            const index = data.findIndex(elem=>elem.id === id);
            const old = data[index];
            const newItem = {...old, impotent: !old.impotent}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })
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
    onAddPost(text){
        this.setState(({data}) => {
            const newItem = {
                id: ++this.maxId,
                textPost:text,
                important:false,
                like: false,
            }
            const newArr = [...data];
            newArr.push(newItem)
            return{
                data: newArr,
            }
        })
    }

    render() {
        const {data, term, likeFilter} = this.state;
        const visiblePosts = this.searchPost(data, term, likeFilter);

        const likeQty = data.filter((item)=>{
            if(item.like){return item}
        }).length

        const impotentQty = data.filter((item)=>{
            if(item.impotent){return item}
        }).length

        return (
            <div className='app'>
                <Header dataLength={data.length} likeQty={likeQty} impotentQty={impotentQty}/>
                <div className='search-panel d-flex'>
                    <Search onTermUpdate={(textTerm)=>this.onTermUpdate(textTerm)}/>
                    <PostFilter changeLikeFilter={(likeFilter)=>{this.changeLikeFilter(likeFilter)}}/>
                </div>
                <PostList
                    data={visiblePosts}
                          onDelete={(id) => {
                              this.deleteData(id);
                          }}
                          onLike={(id)=>{
                              this.onLike(id);
                          }}
                          onImpotent={(id)=>{
                              this.onImpotent(id);
                          }}
                />
                    <PostAddForm onAddPost={
                        (text)=>{this.onAddPost(text)}
                    }/>
            </div>
        )
    }
}

