import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideNav from '../SideNav';
import Home from '../Home';
import Winamp from '../Winamp';
import NotFound from '../NotFound';

const MainContainer = (props, state) => {
    const [wid, setWid] = useState('25%');

    const openSideNav = () => {
      setWid('25%');
    }
  
    const closeSideNav = () => {
      setWid('0%');
    }

    return (
        <div className='container'>

        <button onClick={openSideNav}>>></button>
        <Router>
            <Fragment>
                <SideNav width = {wid} closeNav = {closeSideNav}/>
                <Routes>
                    <Route path="/dbz_reborn" element={<Home/>}/>
                    <Route path="/winamp" element={<Winamp/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Fragment>
        </Router>
      </div>
    )
}

export default MainContainer;