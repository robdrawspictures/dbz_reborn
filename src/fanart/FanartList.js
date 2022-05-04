import React from "react";
import Assets from "../components/Assets";
import FanartItem from './FanartItem';

const FanartList = () => {

    const keys = Object.keys(Assets.Fanart)

    const fanartNodes = keys.map((image, index) => {
        return (
            <div className="gallery-item" key={index}>
                <FanartItem image={image} index={index}/>
            </div>
        )
    })


    return (
        <div className="gallery">
            <div className="fanart-item">
                {fanartNodes}
            </div>
        </div>
    )
}

export default FanartList;