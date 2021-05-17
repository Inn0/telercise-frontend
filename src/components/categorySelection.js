import React from 'react';
import './categorySelection.css';
import CategoryItem from '../components/categoryItem'

function CategorySelection(props) {
    return (
        <div className="categorySelectionContainer">
            <CategoryItem title="Yoga" click={props.categoryFunction}/>
            <CategoryItem title="Dance" click={props.categoryFunction}/>
            <CategoryItem title="Workout" click={props.categoryFunction}/>
            <CategoryItem title="Meditation" click={props.categoryFunction}/>
        </div>
    );
}

export default CategorySelection;