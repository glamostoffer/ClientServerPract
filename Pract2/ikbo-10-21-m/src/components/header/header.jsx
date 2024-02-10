import React from "react";
import "./header.css"

function Header(){
    return(
        <header class="header">
            <nav class="navigation">
                <ul class="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;