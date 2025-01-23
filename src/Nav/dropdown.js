import React from 'react'

function Dropdown({submenu}) {
    return submenu.map((eachSubmenu) => {
        return <div>{ eachSubmenu.title}</div>
   })
}

export default Dropdown