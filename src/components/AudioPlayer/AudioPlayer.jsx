import React, { useState } from 'react';

const AudioPlayer = ({audio_url}) => {

    return (
        <div className='audio-player'>
             <audio controls controlsList="nodownload">
                <source src={audio_url?audio_url:''} type="audio/ogg"/>
                <source src={audio_url?audio_url:''} type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;