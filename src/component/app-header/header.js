import React from "react";
import './app-header.css'
const Header = ({dataLength, likeQty, impotentQty})=>{
    return (
        <>
            <div className='app-header d-flex'>
                <h1>Менеджер записей</h1>
                <h2>{dataLength} записей, понравилось {likeQty}, избрано{impotentQty}</h2>
            </div>
        </>
    )
}
export default Header;