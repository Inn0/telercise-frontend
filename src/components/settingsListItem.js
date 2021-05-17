import React from 'react';
import './settingsListItem.css';

function SettingsListItem(props) {
    return (
        <div className="settingsListItemContainer" style={{backgroundColor: props.isRed ? '#CF4C3B' : 'var(--primary-color)'}} onClick={() => props.toggle()}>
            <p className="settingsListItemTitle">{props.title}</p>
        </div>
    );
}

export default SettingsListItem;