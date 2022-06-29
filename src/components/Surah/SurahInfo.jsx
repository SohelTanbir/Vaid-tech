import React, { useContext, useEffect, useState } from 'react';
import './SurahInfo.css';
import { useParams } from 'react-router-dom';
import makkaImg from '../../assets/images/makka.jpg'
import medinahImg from '../../assets/images/medinah.jpg'
import { SurahContext } from '../../App';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const SurahInfo = () => {
    const { id } = useParams();
    const {surahInfo, setSurahInfo } = useContext(SurahContext);
    const info = surahInfo.filter(surah => surah.id == id);
    const [surahDetails, setSurahDetails ] = useState();
    useEffect(()=>{
        fetch(`https://api.quran.com/api/v4/chapters/${id}/info?language=en`)
        .then(res => res.json())
        .then(data =>setSurahDetails(data.chapter_info))
        
    },[])


    return (
        <div className='surah-info pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={info[0]?.revelation_place =='makkah'?makkaImg:medinahImg} className="rounded"  alt="" />
                    </div>
                    <div className="col-lg-8">
                    <div className="surah-details px-2 border-bottom">
                <div className="row justify-content-between align-items-center">
                  <div className="col-sm-4">
                    <h6> <span>Surah</span> -{info[0]?.name_simple}</h6>
                  </div>
                  <div className="col-sm-4">
                  <h6><span>Total Ayahs</span> -{info[0]?.verses_count}</h6>
                  </div>
                  <div className="col-sm-4">
                  <h6> <span>Revelation Place</span> -{info[0]?.revelation_place}</h6>
                  </div>
                </div>
              </div>
               {surahDetails? <div className="surah-description py-2" dangerouslySetInnerHTML={{ __html: `${surahDetails?.text}` }}>
                </div>:<Loader/>}
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SurahInfo;