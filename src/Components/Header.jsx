import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/Logo.png";
import "../css/header.css";
import data from "../json/datas.json";


function Header() {

    const [showSearch, setShowSearch] = useState(false);
    let searchRef = useRef();

    const [showLinks, setShowLinks] = useState(false);
    let menuRef = useRef();

    const newData = [...new Set(data.map(item => (item.category)))];

    useEffect(() => {

        let closeSearch = (e) => {
            if (!searchRef.current.contains(e.target)){
                setShowSearch(false);
            }
        };
        
        let closeMenu = (e) => {
            if (!menuRef.current.contains(e.target)){
                setShowLinks(false);
            }
        };

        window.addEventListener('resize', () => {
            if(window.innerWidth > 719) {
                setShowLinks(false);
                setShowSearch(false);
            }
        })

        document.addEventListener("mousedown", closeSearch);
        document.addEventListener("mousedown", closeMenu);

        return() => {
            document.removeEventListener("mousedown", closeSearch);
            document.removeEventListener("mousedown", closeMenu);
        };

    });
    
    
    return(
        <header>
            <nav className="nav">
                <div className="header-logo-div">
                    <Link to="/"><img className="header-logo" src={Logo} alt="Trouve ton artisan avec la région Auvergne-Rhône-Alpes" /></Link>
                </div>
                <div className="nav-items">
                    <div className="nav-search-container" ref={searchRef}>
                        <div className="nav-search-logo">    
                            <button className="nav-btn-search" onClick={()=>{setShowSearch(!showSearch)}}>
                                <i className="material-symbols-outlined nav-logo">search</i>
                            </button>
                        </div>
                        <div className={`nav-search ${showSearch ? "show-search" : "hide-search"}`}>
                            <input type="text" className="nav-search-input" placeholder="Rechercher" />
                            <i className="material-symbols-outlined nav-logo-search">search</i>
                        </div>
                    </div>
                    <div className="nav-menu-container" ref={menuRef}>
                        <div className="nav-burger-logo">
                            <button className="nav-btn-burger" onClick={()=>{setShowLinks(!showLinks)}}>
                                <i className="material-symbols-outlined nav-logo">menu</i> 
                            </button>
                        </div>
                        <div className={`nav-menu ${showLinks ? "show-links" : "hide-links"}`}>
                            <ul className="nav-menu-items">
                                {newData.map((cat, index) => {
                                    return(
                                        <li className="nav-menu-item" key={index}><NavLink to={`/category/:${cat}`} className="nav-menu-link">{cat}</NavLink></li>
                                    )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
