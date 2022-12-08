import React from "react";
import './search-panel.css'
const Search = ()=>{
    return (
        <>
         <div className='search-panel'>
             <input className='search-input form-control' type='text'
                    placeholder='Поиск по записям'/>
         </div>
        </>
    )
}
export default Search;