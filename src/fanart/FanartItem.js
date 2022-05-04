import React, {Fragment} from "react";
import Assets from "../components/Assets";

const FanartItem = (image) => {

    let fanart = image.value

    return (
        <Fragment>
            <img src={Assets.Fanart.Bayo} alt="Sausages" width="250"/>
            <p>{fanart}</p>
        </Fragment>
    )
}

export default FanartItem