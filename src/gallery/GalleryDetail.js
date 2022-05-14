import React, {Fragment} from "react";
import {Link, useParams } from "react-router-dom";
import Assets from "../components/Assets";
import GalleryItem from "./GalleryItem";

const GalleryDetail = () => {

    const params = useParams();
    const path = params.name + "_bg"
    const background = Assets.BackIMG[path]
    // console.log(background)

    const gallery = Assets[params.name]
    const galleryKeys = Object.keys(gallery)
    // const gallerySize = Object.keys(gallery).length;

    const galleryNodes = galleryKeys.map((image, index) => {
        return (
            <div className="gallery-item" key={index}>
                <GalleryItem image={image} index={index}/>
            </div>
        )
    })

    return (
        <Fragment>
        <div className="gallery-detail" style={{
            backgroundImage: `url(${background})`
        }}>
            <h1>{params.name.toUpperCase()}</h1>
            <div className="fanart-item">
                {galleryNodes}
            </div>
            <Link to='/galleries'><button className="back">BACK</button></Link>
        </div>
        </Fragment>
    )
}

export default GalleryDetail;