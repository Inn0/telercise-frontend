import React, { useEffect, useState } from 'react';
import './tutorialList.css'
import TutorialListItem from './tutorialListItem'

function TutorialList(props) {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('difficulty') === null) {
            localStorage.setItem('difficulty', 1)
        }

        var targetAudience = ""

        if(localStorage.getItem('target audience') !== null) {
            targetAudience = "/" + localStorage.getItem('target audience');
        }

        fetch('https://telercise-api.herokuapp.com/tutorials/' + props.category.toLowerCase() + '/' + localStorage.getItem('difficulty') + targetAudience)
        .then(res => res.json())
        .then(response => {
            setTutorials(response)
        })
    })

    return (
        <div className="tutorialListContainer">
            {tutorials.map((tut) => {
                return <TutorialListItem add={true} key={tut.id} tutorial={tut}/>
            })}
            <div >

            </div>
        </div>
    );
}

export default TutorialList;