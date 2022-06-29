import React, { useContext, useState, useEffect } from 'react';
import './AudioQuran.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AudioCard from './AudioCard';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { SurahContext } from '../../App';


const AudioQuran = () => {
    const [audioSurah, setAudioSurah ] = useState([]);
    const {surahInfo, setSurahInfo } = useContext(SurahContext);

useEffect(()=>{
  (async function(){
    let data = [];
  for (let i = 1; i <= 114; i++) {
      const res = await fetch(`https://api.quran.com/api/v4/chapter_recitations/7/${i}`)
       const files = await res.json();
      const audio_url = files.audio_file.audio_url;

     const title = surahInfo[i-1]
     data.push({audio_url, title})
  
  }
  setAudioSurah(data);
  })()
}, [])

    return (
        <div className='audio-quran mt-5'> 
          <div className="container">
              <div className="audio-content py-3 px-4 rounded mb-5">
              <h6 className='text-center content-title mb-4'>Al-Quran Audio Recitation</h6>
                { 
                audioSurah.length?audioSurah.map((audio, id) => <AudioCard audio={audio} id={id}  key={Math.random()*200}  />):<Loader/>
                }
              </div>
          </div>
          <Footer/>
        </div>
    );
};

export default AudioQuran;