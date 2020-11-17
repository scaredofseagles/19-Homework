import React from 'react'
import Search from './Search'
import './style.css'

function Navbar(){
    return(
        <nav>
            <ul>
                <li>Employee Directory</li>
                <li>
                    <Search/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar