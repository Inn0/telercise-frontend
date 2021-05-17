import React, {useState} from 'react';
import './settings.css';
import Divider from '../components/divider'
import Header from '../components/header'
import SettingsList from '../components/settingsList'
import TargetAudiencePopup from '../components/targetAudiencePopup'

function Settings() {
    const [popup, setPopup] = useState(false)

    function togglePopup() {
        setPopup(!popup)
    }
    
    return (
        <div className="">
            <Header title={"Anita"}/>
            <SettingsList toggle={togglePopup}/>
            <Divider height={'70px'} />
            {popup &&
                <TargetAudiencePopup toggle={togglePopup}/>
            }
        </div>
    );
}

export default Settings;