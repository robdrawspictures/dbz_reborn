import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideNav from '../SideNav';
import Home from '../Home';
import Winamp from '../Winamp';
import NotFound from '../NotFound';
import Assets from '../Assets';

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
        <img id="logo" src={Assets.Images.logo} alt="logo" width="500"/>
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
        <footer>&#169; Sneed Co. All Rights Reserved</footer>
      </div>
    )
}

export default MainContainer;