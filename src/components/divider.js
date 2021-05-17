import React from 'react';
import './divider.css';

function Divider(props) {
    return (
        <div className="dividerContainer" style={{minHeight: props.height}}>
        </div>
    );
}

export default Divider;