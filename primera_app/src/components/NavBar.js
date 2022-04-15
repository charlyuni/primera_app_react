import React from 'react'

const style = {
    border: 'solid red 1px',
    color: 'blue',
    
}


const NavBar = () => {
    return (
        <div>
            <li style={style}>Home</li>
            <li style={style}>Laptops</li>
            <li style={style}>Tablets</li>
            <li style={style}>Smartphones</li>
        </div>
        )
}

export default NavBar