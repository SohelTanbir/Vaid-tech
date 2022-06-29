import React, { useContext, useEffect, useState } from 'react';
import { SurahContext } from '../../App';
import Loader from '../Loader/Loader';
import SurahCard from './SurahCard';

const Surah = () => {
    const {surahInfo, setSurahInfo }= useContext(SurahContext);
    const {search, setSearch } = useContext(SurahContext);
    useEffect(()=>{
        fetch(`https://api.quran.com/api/v4/chapters/?language=bn`)
        .then(res => res.json())
        .then(data =>{
            const fileterData = data.chapters.filter(item => item.id ==search);
            if(fileterData.length > 0){
                setSurahInfo(fileterData)
            }else{
                setSurahInfo(data.chapters)
            }
            
        })

    }, [search, surahInfo])

    return (
        <div className='surah-container py-5 my-4'>
            <div className="container overflow-hidden">
                <div className="row g-2">
                       {
                           surahInfo?.length?surahInfo.map(info => <SurahCard  surah={info} key={info.id}/>): <Loader/>
                       } 
                </div>
            </div>
        </div>
    );
};

export default Surah;