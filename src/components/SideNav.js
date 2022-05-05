import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Assets from './Assets';

const SideNav = (props) => {

    const[bgm1, setBGM1] = useState(false);
    const[bgm2, setBGM2] = useState(false);
    const[bgm3, setBGM3] = useState(false);

    useEffect(() => {
        if(bgm1){
            Assets.BGM.TrunksBGM.play()
        }
    }, [bgm1])

    useEffect(() => {
        if(bgm2){
            Assets.BGM.GohanBGM.play()
        }
    }, [bgm2])

    useEffect(() => {
        if(bgm3){
            Assets.BGM.EndBGM.play()
        }
    }, [bgm3])

    const handleBGM = (track) => {
        if(bgm1 && track === 1){
            Assets.BGM.TrunksBGM.pause();
            setBGM1(false);
        } else if(bgm2 && track === 2) {
            Assets.BGM.GohanBGM.pause();
            setBGM2(false);
        } else if(bgm3 && track === 3){
            Assets.BGM.EndBGM.pause();
            setBGM3(false);
        } else{
            if(track === 1){
            Assets.BGM.TrunksBGM.play();
            setBGM1(true);
            } else if(track === 2){
                Assets.BGM.GohanBGM.play();
                setBGM2(true);
            } else if(track === 3){
                Assets.BGM.EndBGM.play();
                setBGM3(true);
            }
        }
    }

    return (
        <div className='sidenav' style={{ width: props.width, paddingTop: '20px' }}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/dbz_reborn">Home</Link>
            <Link to="/galleries">Galleries</Link>
            <Link to="/winamp">Winamp Skins</Link>
            <Link to="/gifs">Animations</Link>
            <Link to="/fanart">Fan Art</Link>
            <div className='bgm-player'>
                <div className='bgm-combo'>
                    <p className='bgm-title'>Trunks Theme |</p>
                    <button onClick={() => {handleBGM(1)}}>{!bgm1 ? '▶️' : '⏸'}</button>
                </div>
                <div className='bgm-combo'>
                    <p className='bgm-title'>| Gohan Theme |</p>
                    <button onClick={() => {handleBGM(2)}}>{!bgm2 ? '▶️' : '⏸'}</button>
                </div>
                <div className='bgm-combo'>
                    <p className='bgm-title'>| End Theme</p>
                    <button onClick={() => {handleBGM(3)}}>{!bgm3 ? '▶️' : '⏸'}</button>
                </div>
            </div>
            <br></br>
            <img src={Assets.Images.shenron} alt="shenron" width="250"/>
        </div>
    )
}

export default SideNav;