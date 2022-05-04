import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Assets from "../components/Assets";

const FanartDetail = () => {

    const params = useParams();
    const keys = Object.keys(Assets.Fanart)

    const fanart = keys.map((image, index) => {
        let url = Assets.Fanart[image];
        if(parseInt(params.id) === parseInt(index)){
        return (
           <img src={url} alt="Hi-res" width="50%" key={index}/>
        )
        }
    })

    const handleNext = () => {
        const increment = parseInt(params.id) + 1;
        const newURL = "/fanart/" + increment
        return newURL;
    }

    const handlePrev = () => {
        const decrement = parseInt(params.id) - 1;
        const newURL = "/fanart/" + decrement;
        return newURL;
    }

    return (
        <Fragment>
        <div className="img-detail">
            <button><Link to={handlePrev()}>Previous</Link></button>
            {fanart}
            <button><Link to={handleNext()}>Next</Link></button>
        </div>
        <button className="back"><Link to="/fanart/">Go Back</Link></button>
        </Fragment>
    )
}

export default FanartDetail;