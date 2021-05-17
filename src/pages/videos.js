import React, { useState, useEffect } from 'react';
import './videos.css';
import Header from '../components/header'
import CategorySelection from '../components/categorySelection'
import TutorialList from '../components/tutorialList'
import Divider from '../components/divider'

function Videos() {
    const [category, setCategory] = useState("Categories")

    function changeCategory(cat) {
        setCategory(cat);
    }

    return (
        <div className="">
            <Header title={category} back={category === "Categories" ? false : true} difficultyDropdown={category === "Categories" ? false : true} changeFunction={changeCategory}/>
            {category === "Categories" &&
                <CategorySelection categoryFunction={changeCategory} />
            }

            {category !== "Categories" &&
                <TutorialList category={category} />
            }
            <Divider height={'70px'} />
        </div>
    );
}

export default Videos;