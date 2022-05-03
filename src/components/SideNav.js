import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = (props) => {

    return (
        <div className='sidenav' style={{ width: props.width, paddingTop: '20px' }}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/dbz_reborn">Home</Link>
            <Link to="/galleries">Galleries</Link>
            <Link to="/winamp">Winamp Skins</Link>
            <Link to="/gifs">Animations</Link>
            <Link to="/fan_art">Fan Art</Link>
        </div>
    )
}

export default SideNav;