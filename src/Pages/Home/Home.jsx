import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Surah from '../../components/Surah/Surah';

const Home = () => {
    return (
        <div className='home'>
             <Banner/>
             <Surah/>
             <Footer/>
        </div>

    );
};

export default Home;