import React, {useState} from 'react';
import './targetAudiencePopup.css';

function TargetAudiencePopup(props) {
    const [value, setValue] = useState("")
    const [target, setTarget] = useState("kids")

    const handleChange = (e) => {
        setTarget(e.target.value)
        setValue(e.target.value)
        localStorage.setItem("target audience", e.target.value)
    }

    return (
        <div className="popupShadow">
            <div className="popupContainer">
                <p className="popupTitle">Change target audience</p>
                <fieldset className="popupRadioButton" value={target} onChange={(event) => handleChange(event)}>
                <label htmlFor ="kids"><input type="radio" name="target-audience-option" value="kids" id="kids" />Kids</label>
                <label htmlFor="adults"><input type="radio" name="target-audience-option" value="adult" id="adults" />Adults</label>
                </fieldset>
                <div className="popupButton">
                    <p onClick={() => props.toggle()} className="popupButtonTitle">Save</p>
                </div>
            </div>
        </div>
    );
}

export default TargetAudiencePopup;