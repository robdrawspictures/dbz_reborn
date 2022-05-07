import React, {Fragment} from "react";
import { useParams } from "react-router-dom";
import Assets from "../components/Assets";

const GalleryDetail = () => {

    const params = useParams();
    const background = Assets.BackIMG[params.name]
    // console.log(background)

    const style = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
    }

    // console.log(style.backgroundImage)

    return (
        <Fragment>
        <div className="gallery-detail" style={{
            backgroundImage: `url(${background})`,
        }}>
            <h1>This is the gallery for {params.name}</h1>
            <img src={Assets.BackIMG[params.name]} alt="knobs"/>
        </div>
        </Fragment>
    )
}

export default GalleryDetail;