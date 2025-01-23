import React from 'react';
import './navbar.css'

const Navbar =  ({menuItemsData})=> {
    return (
        <>
            <div>
                {menuItemsData.map((each) => {
                     <div id="menu">{each.title}</div>
                })}
            </div>
          
            <div id="menu">
                <a>hover me</a>
                <ul id="list">
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div>
        </>
        
    )
    
}

export default Navbar