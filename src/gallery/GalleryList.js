import React from 'react';
import { Link } from 'react-router-dom';

const GalleryList = () => {

    return(
        <div className='gallery-list'>
                <Link to='/galleries/goku'>Goku</Link>
                <Link to='/galleries/gohan'>Gohan</Link>
                <Link to='/galleries/vegeta'>Vegeta</Link>
                <Link to='/galleries/trunks'>Trunks</Link>
                <Link to='/galleries/picollo'>Picollo</Link>
                <Link to='/galleries/gogeta'>Gogeta</Link>
                <Link to='/galleries/vegetto'>Vegetto</Link>
                <Link to='/galleries/gotenks'>Gotenks</Link>
        </div>
    )
}

export default GalleryList;