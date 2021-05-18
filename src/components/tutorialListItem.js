import React, { useState } from 'react';
import './tutorialListItem.css';
import { RiAddFill } from 'react-icons/ri';
import {MdDelete} from 'react-icons/md';
import AddPopup from './addPopup';

function TutorialListItem(props) {
    const [popup, setPopup] = useState(false)

    const handleAddClick = (e) => {
        e.stopPropagation();
        togglePopup();
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        props.deleteFunction(props.tutorial.id);
    }

    function togglePopup() {
        setPopup(!popup)
    }

    function addToPlaylist(playlistId) {
        fetch('https://telercise-api.herokuapp.com/playlists/' + playlistId + '/add/' + props.tutorial.id, { method: 'PUT' })
            .then(res => res.json())
            .then(response => {
                togglePopup();
                console.log(response);
            })
    }

    return (
        <div onClick={() => window.open(props.tutorial.url, "_blank")} className="tutorialListItemContainer" style={{ backgroundImage: 'url(' + props.tutorial.thumbnail + ')' }}>
            <p className="tutorialListItemTitle">{props.tutorial.title}</p>
            {props.add &&
                <div className="tutorialListItemAdd" onClick={handleAddClick}>
                    <RiAddFill className="tutorialListItemAddIcon" />
                </div>
            }

            {props.delete &&
                <div className="tutorialListItemAdd" onClick={handleDeleteClick}>
                    <MdDelete className="tutorialListItemAddIcon" />
                </div>
            }

            {popup &&
                <AddPopup toggle={togglePopup} add={addToPlaylist} />
            }
        </div>
    );
}

export default TutorialListItem;