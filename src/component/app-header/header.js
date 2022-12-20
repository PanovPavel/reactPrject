import React from "react";
import './app-header.css'
const Header = ({dataLength, likeQTY})=>{
    return (
        <>
            <div className='app-header d-flex'>
                <h1>Менеджер записей</h1>
                <h2>{dataLength} записей, понравилось {likeQTY}</h2>
            </div>
        </>
    )
}
export default Header;