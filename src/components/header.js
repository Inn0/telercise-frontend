import React from 'react';
import './header.css';
import { IoArrowBack } from 'react-icons/io5';
import { RiAddFill } from 'react-icons/ri';
import DifficultyDropdown from '../components/difficultyDropdown'

function Header(props) {
    return (
        <div className="headerContainer">
            {props.back &&
                <IoArrowBack className="headerBackIcon" onClick={() => props.changeFunction("Categories")} />
            }
            <p className="headerTitle">{props.title}</p>
            <div className="headerDropdownContainer">
                {props.difficultyDropdown &&
                    <DifficultyDropdown />
                }
                {props.add &&
                    <RiAddFill className="headerAddIcon" onClick={() => props.addFunction()}/>
                }
            </div>
        </div>
    );
}

export default Header;