import React, { useState } from 'react';

const AudioCard = ({audio, id}) => {

    return (
        <div className="single-audio-surah my-2 px-3 rounded bg-white">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="surah-info">
                      {/* <span>{id+1}. {audio?.info.name_simple} || {audio?.info.name_arabic} || verses: {audio?.info.verses_count}</span> */}
                      <span>{id+1}. {audio?.title?.name_simple}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 text-end">
                    <div className="audio-player">
                        <audio controls controlsList="nodownload">
                        <source src={audio.audio_url} type="audio/ogg"/>
                        <source src={audio.audio_url} type="audio/ogg"/>
                        Your browser does not support the audio element.
                        </audio>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default AudioCard;