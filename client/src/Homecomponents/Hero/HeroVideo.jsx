import React, { useEffect, useRef } from 'react';
import video from "../../assets/images/home/videoBg.mp4"
import HeroMain from './HeroMain';

const HeroVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);
    return (
        <div className="video-background flex items-center justify-center flex-col">
            <video ref={videoRef} autoPlay muted loop className="video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content -translate-y-10  ">
                <HeroMain />
            </div>
        </div>
    );
};

export default HeroVideo;