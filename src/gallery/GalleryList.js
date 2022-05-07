import React from 'react';
import { Link } from 'react-router-dom';

const GalleryList = () => {

    return(
        <div className='gallery-list'>
            <h1>Gallery List Go Here.</h1>
            <ul>
                <Link to='/galleries/goku'>Goku</Link>
                <Link to='/galleries/vegeta'>Vegeta</Link>
                <Link to='/galleries/picollo'>Picollo</Link>
                <Link to='/galleries/gogeta'>Gogeta</Link>
                <Link to='/galleries/vegetto'>Vegetto</Link>
                <Link to='/galleries/Gotenks'>Gotenks</Link>
            </ul>
        </div>
    )
}

export default GalleryList;