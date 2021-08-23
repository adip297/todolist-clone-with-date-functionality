import React from "react";
import logo from "../assests/logo.png";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="Todolist"></img>
                </div>
            </nav>
        </header>
    );
};

export default Header;
