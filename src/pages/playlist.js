import React, { useState, useEffect } from 'react';
import './playlist.css'
import { useParams, useHistory } from 'react-router-dom';
import TutorialListItem from '../components/tutorialListItem';
import Header from '../components/header';

function Playlist(props) {
    const history = useHistory()

    const params = useParams()
    const [tutorials, setTutorials] = useState([])
    const [playlist, setPlaylist] = useState({})

    function getPlaylist(playlistId) {
        fetch('https://telercise-api.herokuapp.com/playlists/' + playlistId)
            .then(res => res.json())
            .then(response => {
                setPlaylist(response)
                const arr = []
                response.tutorials.map(tut => {
                    getTutorial(tut).then(res => {
                        arr.push(res)
                        if (arr.length === response.tutorials.length) {
                            setTutorials(arr)
                        }
                    })
                })
            })
    }

    function getTutorial(tutorialId) {
        return fetch('https://telercise-api.herokuapp.com/tutorials/id/' + tutorialId)
            .then(res => res.json())
            .then(response => {
                return response
            })
    }

    useEffect(() => {
        getPlaylist(params.id)
    }, [])

    function func() {
        history.push('/playlists')
    }

    function deleteFromPlaylist(tutorialId) {
        fetch('https://telercise-api.herokuapp.com/playlists/' + playlist.id + '/remove/' + tutorialId, { method: 'PUT' })
            .then(res => res.json())
            .then(response => {
                window.location.reload(false)
            })
    }

    return (
        <div>
            <Header title={playlist.title} back={true} changeFunction={func} />
            <div className="tutorialListContainer">
                {tutorials !== undefined &&
                    tutorials.map(tutorial => {
                        return <TutorialListItem key={tutorial.id} tutorial={tutorial} delete={true} deleteFunction={deleteFromPlaylist} />
                    })
                }
            </div>
        </div>
    );
}

export default Playlist;