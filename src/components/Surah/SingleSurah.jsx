import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faBookQuran, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./SingleSurah.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const SingleSurah = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [surahInfo, setSurahInfo] = useState();
  const [pagination, setPagination ] = useState();
  const [pageNumber, setPageNumber ] = useState(1)
  const { id } = useParams();
  const [audio, setAudio] = useState({
    url: "",
    play: false,
  });
const [audioFull, setAudioFull ] =  useState();

  // fetch data and store in state
  useEffect(() => {
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${id}?language=bn&words=true&word_translation_language=bn&fields=text_uthmani&translation_fields=resource_name,language_id&mushaf=2&word_fields=text_uthmani&audio=true&page=${pageNumber&&pageNumber}`
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
  }, [pagination]);
  useEffect(() => {
    fetch(`https://api.quran.com/api/v4/chapters/${id}?language=bn`)
      .then((res) => res.json())
      .then((data) => setSurahInfo(data.chapter));
  }, []);
  useEffect(() => {
    fetch(`https://api.quran.com/api/v4/chapter_recitations/7/${id}`)
    .then(res => res.json())
    .then(data => setAudioFull(data.audio_file.audio_url))
  }, []);

// handle surah details information by passing surah id
const handleInfo = ()=>{
  navigate(`/info/${id}`)
}
 // handle play audio
 const handleAudio = (audio_url) => {
  const url = `https://audio.qurancdn.com/`+audio_url;
  const bool = audio.play ? false : true;
  setAudio({ ...audio, url: url, play: bool });
}
// handle read previous, next and full read
const handlePrev = () => {
  if(pagination.current_page > 1){
    setPageNumber(pageNumber - 1);
  }
}
const handleNext = () => {
  if(pagination.next_page > pageNumber){
    setPageNumber(pageNumber + 1);
  }
}

  return (
    <div className="single-surah pt-5">
      <div className="container border shadow-sm">
        <div className="row">
          <div className="col-lg-12 px-0">
            <div className="surah-container">
              <div className="surah-header px-3 bg-light">
                <div className="row justify-content-between align-items-center">
                  <div className="col-sm-4">
                    <h6 className="m-0 fs-5">
                      {surahInfo?.name_simple}({surahInfo?.name_arabic})
                    </h6>
                  </div>
                  <div className="col-sm-4">
                    <div className="audio-player">
                      {audioFull&&<audio controls controlsList="nodownload">
                        <source
                          src={audioFull}
                          type="audio/ogg"
                        />
                        <source
                          src={audioFull}
                          type="audio/ogg"
                        />
                        Your browser does not support the audio element.
                      </audio>}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <h6 onClick={handleInfo} className="m-0 fs-5 text-end surah-info">
                        <FontAwesomeIcon icon={faInfoCircle} /> more info
                    </h6>
                  </div>
                </div>
              </div>
              <div className="surah-body p-3 ">
                {words.length ? (
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
                          data-bs-toggle="tooltip" data-bs-placement="top"
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
        {/* conditional rendering depend on pagination state */}
        {pagination?.total_records>10&& <div className="pagination-container pt-5 pb-3 text-center">
          {pagination.current_page> 1 ? <button onClick={handlePrev} className="btn btn-sm btn-outline-success ">Previous page</button>:<button onClick={handlePrev} className="btn btn-sm btn-outline-success disabled ">Previous page</button>}

          {pagination.next_page > 1?<button onClick={handleNext} className="btn btn-sm btn-outline-success  ms-3">Next page</button>:<button onClick={handleNext} className="btn btn-sm btn-outline-success  ms-3 disabled">Next page</button>}
        </div>}
      </div>
      {/* footer section include */}
      <Footer/>
    </div>
  );
};

export default SingleSurah;
