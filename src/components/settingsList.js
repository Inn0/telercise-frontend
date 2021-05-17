import React from 'react';
import Divider from './divider';
import './settingsList.css'
import SettingsListItem from './settingsListItem'

function SettingsList(props) {
    return (
        <div className="settingsListContainer">
            <div>
                <SettingsListItem title="Change target audience" isRed = {false} toggle = {props.toggle}/>
                <SettingsListItem title="Change username" isRed = {false}/>
                <SettingsListItem title="Change password" isRed = {false}/>
                <SettingsListItem title="Delete account" isRed = {true}/>
                <Divider height = "calc(100vh - 450px)"></Divider>
                <SettingsListItem title="Log out" isRed = {true}/>
            </div>
        </div>
    );
}

export default SettingsList;