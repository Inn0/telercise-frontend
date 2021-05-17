import React from 'react';
import './playlistListItem.css';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function PlaylistListItem(props) {
    const handleClick = (e) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to delete " + props.playlist.title + "?")) {
            fetch('https://telercise-api.herokuapp.com/playlists/' + props.playlist.id, { method: 'DELETE' }).then(res => window.location.reload(false))
        }
    }

    return (
        <div className="playlistListItemContainer">
            <Link to={"/playlist/" + props.playlist.id}>
                <p>{props.playlist.title}</p>
            </Link>
            <MdDelete className="playlistListItemIcon" onClick={handleClick} />
        </div>
    );
}

export default PlaylistListItem;