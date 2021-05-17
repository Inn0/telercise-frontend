import React, { useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Videos from './pages/videos';
import Playlists from './pages/playlists';
import Settings from './pages/settings';
import Playlist from './pages/playlist';
import Navbar from './components/navbar';

function App() {
    const [activePage, setActivePage] = useState(1);

    function changeActivePage(page) {
        setActivePage(page);
    }
    
    return (
        <Router>
            <div className="appContainer">
                <div className="appSwitch">
                    <Switch>
                        <Route path="/settings" >
                            <Settings />
                        </Route>
                        <Route path="/playlists" >
                            <Playlists />
                        </Route>
                        <Route path="/playlist/:id">
                            <Playlist />
                        </Route>
                        <Route path="/">
                            <Videos />
                        </Route>
                    </Switch>
                </div>

                <Navbar active={activePage} changeFunction={changeActivePage}/>
            </div>
        </Router>
    );
}

export default App;
