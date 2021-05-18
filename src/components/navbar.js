import React from 'react';
import './navbar.css';
import { AiFillPlaySquare, AiOutlinePlaySquare } from 'react-icons/ai';
import { BsCollectionPlay, BsCollectionPlayFill } from 'react-icons/bs';
import { IoSettings, IoSettingsOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbarContainer">
            <nav className="navbarNavContainer">
                <Link onClick={() => { props.changeFunction(0) }} className="navbarNavItem" to="/playlists">
                    {props.active === 0
                        ? <BsCollectionPlayFill className="navbarNavItemIcon" />
                        : <BsCollectionPlay className="navbarNavItemIcon" />
                    }
                </Link>
                <Link onClick={() => { props.changeFunction(1) }} className="navbarNavItem" to="/">
                    {props.active === 1
                        ? <AiFillPlaySquare className="navbarNavItemIcon" />
                        : <AiOutlinePlaySquare className="navbarNavItemIcon" />
                    }
                </Link>
                <Link onClick={() => { props.changeFunction(2) }} className="navbarNavItem" to="/settings">
                    {props.active === 2
                        ? <IoSettings className="navbarNavItemIcon" />
                        : <IoSettingsOutline className="navbarNavItemIcon" />
                    }
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;