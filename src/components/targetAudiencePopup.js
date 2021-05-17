import React, { useEffect, useState } from 'react';
import './targetAudiencePopup.css';

function TargetAudiencePopup(props) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("target audience", e.target.value)
    }

    useEffect(() => {
        if(localStorage.getItem("target audience")){
            setValue(localStorage.getItem("target audience"))
        }
    }, [])

    return (
        <div className="popupShadow">
            <div className="popupContainer">
                <p className="popupTitle">Change target audience</p>

                <div className="popupRadioButtonContainer">
                    <label>
                        <input
                            type="radio"
                            value="adults"
                            checked={value === "adults"}
                            onChange={handleChange}
                        />
                        Adults
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="kids"
                            checked={value === "kids"}
                            onChange={handleChange}
                        />
                        Kids
                    </label>
                </div>

                <div className="popupButton">
                    <p onClick={() => props.toggle()} className="popupButtonTitle">Save</p>
                </div>
            </div>
        </div>
    );
}

export default TargetAudiencePopup;