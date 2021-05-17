import React from 'react';
import './playlistList.css';
import PlaylistListItem from '../components/playlistListItem'

function PlaylistList(props) {
    return (
        <div className="playlistListContainer">
            {props.playlists.map(playlist => {
                return <PlaylistListItem key={playlist.id} playlist={playlist} refresh={props.refresh}/>
            })}
        </div>
    );
}

export default PlaylistList;