import React from "react";
import Assets from "../components/Assets";
import {Link} from 'react-router-dom';
import FanartItem from './FanartItem';

const FanartList = () => {

    const keys = Object.keys(Assets.Fanart)

    console.log(keys)

    const fanartNodes = keys.map((image, index) => {
        console.log(image)
        return (
            <div className="gallery-item" key={index}>
                <p>{image}</p>
                <FanartItem image = {image}/>
            </div>
        )
    })

    const fanartList = () => {
        for(let fan in Assets.Fanart) {

                return (
                    <div className="gallery-item">
                        <p>{fan}</p>
                        <img src={Assets.Fanart[fan]} alt="img" width="250"/>
                    </div>
                )
            }
        }

    return (
        <div className="gallery">
            {/* <div className="gallery-item">
                <img src={Assets.Fanart.Bayo} alt="fanart" width="250"/>
            </div>
            <div>
                <p>Function Version</p>
                <ul>
                {fanartList()}
                </ul>
            </div> */}
            <div className="fanart-item">
                {fanartNodes}
            </div>
        </div>
    )
}

export default FanartList;