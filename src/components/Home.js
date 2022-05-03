import React from "react";
import Assets from "./Assets";

const Home = () => {

    return(
        <div className="home-page">
        <div className="launch-banner">
            <img src={Assets.gifs.gokuPowerUp} alt="goku-power" width="100"/>
            <h2>This page was (re-)launched on 03/05/2022</h2>
            <img src={Assets.gifs.gokuPowerUp} alt="goku-power" width="100"/>
        </div>
        </div>
    )
}

export default Home;