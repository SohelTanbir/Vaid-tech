import React, { useState, useEffect, useContext } from "react";
import "../Surah/SingleSurah.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBookReader,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";



const Reading = () => {
  const navigate = useNavigate();
  const [surahNumber, setSurahNumber ] = useState(1);
  const [pagination, setPagination ] = useState();
  const [words, setWords] = useState([]);
  const [surahInfo, setSurahInfo] = useState();
  const [readFull, setReadFull ] = useState(10);
  const [page, setPage ] = useState(1);
  const [audio, setAudio] = useState({
    url: "",
    play: false,
  });
  const [audioFull, setAudioFull] = useState();

  // fetch data and store in state
  useEffect(() => {
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${surahNumber}?language=bn&words=true&word_translation_language=bn&fields=text_uthmani&translation_fields=resource_name,language_id&mushaf=2&word_fields=text_uthmani&audio=true&per_page=${readFull}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
         setPagination(data.pagination);
        let wordsArr = [];
        data.verses.map((ayah) => {
          wordsArr.push(ayah.words);
        });
        setWords(wordsArr);
      });
  }, [surahNumber, pagination, readFull, page]);
  useEffect(() => {
    fetch(`https://api.quran.com/api/v4/chapters/${surahNumber}?language=bn`)
      .then((res) => res.json())
      .then((data) => setSurahInfo(data.chapter));
  }, [surahNumber]);
  useEffect(() => {
    fetch(`https://api.quran.com/api/v4/chapter_recitations/7/${surahNumber}`)
      .then((res) => res.json())
      .then((data) => setAudioFull(data.audio_file.audio_url));
  }, [surahNumber, audioFull, ]);

  // handle surah details information by passing surah id
  const handleInfo = () => {
    navigate(`/info/${surahNumber}`);
  };
  // handle play audio
  const handleAudio = (audio_url) => {
    const url = `https://audio.qurancdn.com/` + audio_url;
    const bool = audio.play ? false : true;
    setAudio({ ...audio, url: url, play: bool });
  };

// handle previous and next, read full surah and countinue reading
const handlePrev = ()=>{
   if(surahNumber > 1){
    setSurahNumber(surahNumber - 1);
   }
}
const handleNext = ()=>{
    if(surahNumber < 114){
        setSurahNumber(surahNumber + 1);
    } 
}
// read full surah
const handleReadFull = ()=>{
  setReadFull((pagination.total_records*1)-1);
}
// handle countinue reading 
const handleCountinue = ()=>{
  if(pagination.total_pages > page){
    setPage(page + 1)
  }
}

  return (
    <div className="reading-quran mt-5">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-12 px-0">
            <div className="surah-container">
              <div className="surah-header px-3 ">
                <div className="row justify-content-between align-items-center">
                  <div className="col-sm-4">
                    <h6 className="m-0 fs-5">
                      {surahInfo?.name_simple}({surahInfo?.name_arabic})
                    </h6>
                  </div>
                  <div className="col-sm-4">
                    <div className="audio-player">
                      {audioFull && (
                        <audio controls controlsList="nodownload">
                          <source src={audioFull} type="audio/ogg" />
                          <source src={audioFull} type="audio/ogg" />
                          Your browser does not support the audio element.
                        </audio>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <h6
                      onClick={handleInfo}
                      className="m-0 fs-5 text-end surah-info"
                    >
                      <FontAwesomeIcon icon={faInfoCircle} /> more info
                    </h6>
                  </div>
                </div>
              </div>
              <div className="surah-body p-3 ">
                {pagination? (
                  words.map((wordsArr, index) => {
                    return (
                      <div
                        key={index}
                        id="arabic-ayath"
                        className="text-center p-1"
                      >
                        {wordsArr.map((ayah) => (
                          <span
                            onClick={() => handleAudio(ayah.audio_url)}
                            className="word"
                            key={ayah.id + 1}
                            title={ayah.translation.text}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            {ayah.text}
                          </span>
                        ))}
                      </div>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </div>
              {words.length ? (
                <div className="prev-next-btn m-3 text-center">
                  {/* handle Previous surah */}
               {surahNumber>1?<button onClick={handlePrev} className="btn btn-sm btn-outline-success btn-light">
                    <FontAwesomeIcon icon={faAngleLeft} /> &nbsp; Previous Surah
                  </button>:<button onClick={handlePrev} className="btn btn-sm btn-secondary  disabled">
                    <FontAwesomeIcon icon={faAngleLeft} /> &nbsp; Previous Surah
                  </button>}

                {/* hanlde read full surah */}
                {pagination.total_records > 10?   <button onClick={handleReadFull} className="btn btn-sm btn-outline-success btn-light ms-3">
                    Read Full &nbsp; <FontAwesomeIcon icon={faBookReader} />
                  </button>:<button onClick={handleReadFull} className="btn btn-sm btn-secondary ms-3 disabled">
                    Read Full &nbsp; <FontAwesomeIcon icon={faBookReader} />
                  </button>}

                 {/* hanlde countinue reading */}
                 {pagination.total_pages > 1 & pagination.total_pages > page?   <button onClick={handleCountinue} className="btn btn-sm btn-outline-success btn-light ms-3">
                 Countinue &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                  </button>:<button className="btn btn-sm btn-secondary ms-3 disabled">
                  Countinue &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                  </button>}

                {/* handle next surah */}
                {surahNumber < 114 ?  <button onClick={handleNext} className="btn btn-sm btn-outline-success btn-light ms-3">
                    Next Surah &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                  </button>:  <button onClick={handleNext} className="btn btn-sm btn-outline-success btn-light ms-5 disabled">
                    Next Surah &nbsp; <FontAwesomeIcon icon={faAngleRight} />
                  </button>}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="wordplay">
          {audio.play && audio.url ? (
            <audio controls autoPlay>
              <source src={audio.url} type="audio/ogg" />
              <source src={audio.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            ""
          )}
          {audio.play && audio.url ? (
            ""
          ) : (
            <audio controls autoPlay>
              <source src={audio.url} type="audio/ogg" />
              <source src={audio.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
      {/* footer section include */}
      <Footer />
    </div>
  );
};

export default Reading;
