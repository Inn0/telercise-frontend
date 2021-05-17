import React from 'react';
import './playlistListItem.css';
import { Link } from "react-router-dom";

function PlaylistListItem(props) {
    return (
        <Link to={"/playlist/" + props.playlist.id}>
            <div className="playlistListItemContainer">
                <p>{props.playlist.title}</p>
            </div>
        </Link>
    );
}

export default PlaylistListItem;