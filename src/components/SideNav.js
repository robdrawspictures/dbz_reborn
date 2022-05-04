import React from 'react';
import {Link} from 'react-router-dom';
import Assets from './Assets';

const SideNav = (props) => {

    return (
        <div className='sidenav' style={{ width: props.width, paddingTop: '20px' }}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/dbz_reborn">Home</Link>
            <Link to="/galleries">Galleries</Link>
            <Link to="/winamp">Winamp Skins</Link>
            <Link to="/gifs">Animations</Link>
            <Link to="/fanart">Fan Art</Link>
            <br></br>
            <img src={Assets.Images.shenron} alt="shenron" width="250"/>
        </div>
    )
}

export default SideNav;