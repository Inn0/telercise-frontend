import React from 'react';
import './categoryItem.css';
import { FaChild, FaDumbbell, FaSpa } from 'react-icons/fa'
import {GiBodyBalance} from 'react-icons/gi'

function CategoryItem(props) {
    return (
        <div onClick={() => props.click(props.title)} className="categoryItemContainer">
            <p>{props.title}</p>
            {props.title === "Dance" &&
                <GiBodyBalance className="categoryItemIcon"/>
            }
            {props.title === "Workout" &&
                <FaDumbbell className="categoryItemIcon"/>
            }
            {props.title === "Yoga" &&
                <FaChild className="categoryItemIcon"/>
            }
            {props.title === "Meditation" && 
                <FaSpa className="categoryItemIcon"/>
            }
        </div>
    );
}

export default CategoryItem;