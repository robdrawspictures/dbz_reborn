import React from "react";
import Assets from "./Assets";

const NotFound = () => {

    return(
        <div className="not-found">
            <img src={Assets.Images.gohanTraining} alt="gohan-injured"/>
            <h2>PAGE NOT FOUND</h2>
        </div>
    )
}

export default NotFound;