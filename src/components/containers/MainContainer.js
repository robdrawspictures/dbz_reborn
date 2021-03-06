import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideNav from '../SideNav';
import Home from '../Home';
import Winamp from '../Winamp';
import FanartList from '../../fanart/FanartList';
import FanartDetail from '../../fanart/FanartDetail';
import GalleryList from '../../gallery/GalleryList';
import GalleryDetail from '../../gallery/GalleryDetail';
import GalleryImageViewer from '../../gallery/GalleryImageViewer';
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
        <button className='open-sidebar' onClick={openSideNav}>>></button>
        <div className='banner'>
        <img src={Assets.Images.ball} alt='dragonball' width="150"/>
        <img id="logo" src={Assets.Images.logo} alt="logo" width="500"/>
        <img src={Assets.Images.ball} alt='dragonball' width="150"/>
        </div>
        <Router>
            <Fragment>
                <SideNav width = {wid} closeNav = {closeSideNav}/>
                <Routes>
                    <Route path="/dbz_reborn" element={<Home/>}/>
                    <Route path="/winamp" element={<Winamp/>}/>
                    <Route path="/fanart" element={<FanartList/>}/>
                    <Route path='/fanart/:id' element={<FanartDetail/>}/>
                    <Route path='/galleries' element={<GalleryList/>}/>
                    <Route path='/galleries/:name' element={<GalleryDetail/>}/>
                    <Route path='/galleries/:name/:id' element={<GalleryImageViewer/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Fragment>
        </Router>
        <footer>&#169; Sneed Co. All Rights Reserved</footer>
      </div>
    )
}

export default MainContainer;