import React, { useState, useEffect } from 'react';
import './playlists.css';
import Header from '../components/header'
import PlaylistList from '../components/playlistList'
import PlaylistPopup from '../components/playlistPopup'

function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [popup, setPopup] = useState(false)

    function addPlaylist(title) {
        if (title !== "") {
            const newPlaylist = {
                "title": title,
                "tutorials": []
            }

            fetch('https://telercise-api.herokuapp.com/playlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPlaylist)
            })
                .then(res => {
                    if (res.status === 226) {
                        alert('Name ' + newPlaylist.title + ' is already taken!');
                    } else if(res.status === 409) {
                        alert('You can\'t have more than 10 playlists!');
                        togglePopup()
                    } else if (res.status === 200) {
                        togglePopup()
                        getPlaylists()
                    }
                })
        } else {
            alert("Playlist name cannot be empty!")
        }
    }

    function togglePopup() {
        setPopup(!popup)
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
        <div className="">
            <Header title="Playlists" add={true} addFunction={togglePopup} />
            <PlaylistList playlists={playlists} refresh={getPlaylists}/>
            {popup &&
                <PlaylistPopup add={addPlaylist} toggle={togglePopup}/>
            }
        </div>
    );
}

export default Playlists;