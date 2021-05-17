import React, {useState} from 'react';
import './playlistPopup.css';

function PlaylistPopup(props) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="popupShadow">
            <div className="popupContainer">
                <p className="popupTitle">Create a new playlist</p>
                <input onChange={handleChange} value={value} className="popupInputField" type="text" placeholder="New playlist name..." />
                <div className="popupButton">
                    <p onClick={() => props.add(value)} className="popupButtonTitle">Create</p>
                </div>
                <div className="popupButton">
                    <p onClick={() => props.toggle()} className="popupButtonTitleClose">Close</p>
                </div>
            </div>
        </div>
    );
}

export default PlaylistPopup;