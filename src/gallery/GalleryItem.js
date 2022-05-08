import React, {Fragment} from "react";
import {Link, useParams} from 'react-router-dom';
import Assets from "../components/Assets";

const GalleryItem = (image, index) => {

    const params = useParams()

    let item = Object.values(image);
    let url = Assets[params.name][item[0]];
    const detailURL = "/galleries/" + params.name + '/' + image.index;

    return (
        <Fragment>
            <div className="gallery-item-container">
            <Link to={detailURL}><img src={url} alt="Sausages" width="250"/></Link>
            </div>
        </Fragment>
    )
}

export default GalleryItem