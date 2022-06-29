import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import AudioQuran from './components/AudioQuran/AudioQuran';
import Reading from './components/Reading/Reading';
import Translation from './components/Translation/Translation';
import { createContext, useState } from 'react';
import SingleSurah from './components/Surah/SingleSurah';
import SurahInfo from './components/Surah/SurahInfo';
import Share from './components/Surah/Share';
import Setting from './components/Setting/Setting';

export const SurahContext = createContext();

function App() {
  const [surahInfo, setSurahInfo] =  useState([]);
  const [search, setSearch ] = useState()


  return (
    <div className="qurqn-container">
      <SurahContext.Provider value={{surahInfo, setSurahInfo, search, setSearch}}>
      <Router>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/audio-quran' element={<AudioQuran/>}></Route>
            <Route path='/reading' element={<Reading/>}></Route>
            <Route path='/translation' element={<Translation/>}></Route>
            <Route path='/surah/:id' element={<SingleSurah/>}></Route>
            <Route path='/info/:id' element={<SurahInfo/>}></Route>
            <Route path='/share' element={<Share/>}></Route>
            <Route path='/setting' element={<Setting/>}></Route>
          </Routes>
      </Router>
      </SurahContext.Provider>
    </div>
  );
}

export default App;
