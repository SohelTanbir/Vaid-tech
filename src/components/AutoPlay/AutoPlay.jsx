import React from 'react';

const AutoPlay = (props) => {
    const [audio, setAudio ] = useState("");
    setAudio(`https://audio.qurancdn.com/`+url)
    return (
        <div className='audio-player'>
             <audio controls autoPlay controlsList="nodownload" >
                <source src={audio} type="audio/ogg"/>
                <source src={url} type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AutoPlay;