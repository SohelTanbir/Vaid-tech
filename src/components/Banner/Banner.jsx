import React, { useContext, useState } from 'react';
import  './Banner.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Toast from '../Toast/Toast';
import { SurahContext } from '../../App';


const Banner = () => {
    const {search , setSearch } = useContext(SurahContext)

    const handleChange = (event)=>{
    setSearch(event.target.value);
}


const handleSubmit  = (event)=>{
    event.preventDefault();  
    setSearch(true)
}




    return (
        <div className='banner'>
            <div className="form-box">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" className='form-control' placeholder='Surah number  from (1-114) ' />
                <div className="search">
                <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Banner;