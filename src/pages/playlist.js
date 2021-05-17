import React, { useState, useEffect } from 'react';
import './playlist.css'
import { useParams } from 'react-router-dom';
import TutorialListItem from '../components/tutorialListItem';
import Header from '../components/header';

function Playlist(props) {
    const params = useParams()
    const [tutorials, setTutorials] = useState([])
    const [playlist, setPlaylist] = useState({})

    function getPlaylist(playlistId) {
        fetch('https://telercise-api.herokuapp.com/playlists/' + playlistId)
            .then(res => res.json())
            .then(response => {
                setPlaylist(response)
                var newTutorialsArray = []
                response.tutorials.map(tutorial => {
                    fetch('https://telercise-api.herokuapp.com/tutorials/id/' + tutorial)
                        .then(res => res.json())
                        .then(response => {
                            newTutorialsArray.push(response)
                            setTutorials(newTutorialsArray)
                        })
                })
            })
    }

    useEffect(() => {
        getPlaylist(params.id)
    }, [])

    return (
        <div>
            <Header title={playlist.title} />
            <div className="tutorialListContainer">
                {
                tutorials.map(tutorial => {
                    return (
                        <TutorialListItem key={tutorial.id} tutorial={tutorial} />
                    )
                })}
            </div>
        </div>
    );
}

export default Playlist;