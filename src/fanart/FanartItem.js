import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import Assets from "../components/Assets";

const FanartItem = (image, index) => {

    let fanart = Object.values(image);
    let url = Assets.Fanart[fanart[0]];
    const detailURL = "/fanart/" + image.index;

    return (
        <Fragment>
            <div className="gallery-item-container">
            <Link to={detailURL}><img src={url} alt="Sausages" width="250"/></Link>
            </div>
            <p>{fanart[0]}</p>
        </Fragment>
    )
}

export default FanartItem