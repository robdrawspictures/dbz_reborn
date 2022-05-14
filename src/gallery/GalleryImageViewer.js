import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Assets from "../components/Assets";

const GalleryImageViewer = () => {

    const params = useParams();
    const keys = Object.keys(Assets[params.name])
    const backURL = `/galleries/${params.name}/`

    const fanart = keys.map((image, index) => {
        let url = Assets[params.name][image];
        if(parseInt(params.id) === parseInt(index)){
        return (
           <img src={url} alt="Hi-res" width="50%" key={index}/>
        )} else {
            return null
        }
    })

    const handleNext = () => {
        const increment = parseInt(params.id) + 1;
        const newURL = `/galleries/${params.name}/` + increment
        return newURL;
    }

    const handlePrev = () => {
        const decrement = parseInt(params.id) - 1;
        const newURL = `/galleries/${params.name}/` + decrement;
        return newURL;
    }

    return (
        <Fragment>
        <div className="back-button-container">
        <Link to={backURL}><button className="back">BACK TO GALLERY</button></Link>
        </div>
        <div className="img-detail">
            <Link to={parseInt(params.id) !== 0 ? handlePrev() : "/galleries/"}><button className="gallery-nav">◀︎</button></Link>
                {fanart}
            <Link to={handleNext()}><button className="gallery-nav">►</button></Link>
        </div>
        </Fragment>
    )
}

export default GalleryImageViewer;