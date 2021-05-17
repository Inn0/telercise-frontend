import React, { useEffect, useState } from 'react';
import './addPopup.css';

function AddPopup(props) {
    const [playlists, setPlaylists] = useState([])

    const handleClick = (e) => {
        e.stopPropagation();
    }

    function getPlaylists() {
        fetch('https://telercise-api.herokuapp.com/playlists')
            .then(res => res.json())
            .then(response => {
                setPlaylists(response)
            })
    }

    useEffect(() => {
        getPlaylists();
    }, [])

    return (
        <div className="popupShadow" onClick={handleClick}>
            <div className="popupContainer">
                <p className="popupTitle">Add tutorial to a playlist</p>
                {playlists.map(playlist => {
                    return <p onClick={() => props.add(playlist.id)} key={playlist.id} className="popupPlaylistName">{playlist.title}</p>
                })}
                <div className="popupButton">
                    <p onClick={() => props.toggle()} className="popupButtonTitleClose">Close</p>
                </div>
            </div>
        </div>
    );
}

export default AddPopup;