import React from "react";
import './surahCard.css';
import { useNavigate } from "react-router-dom";

const SurahCard = ({surah}) => {
  const navigate = useNavigate();


  const handleCard = (id) => {
    navigate(`/surah/${id}`);
  
  };

  return (
    <div onClick={() => handleCard(surah.id)} className="col-lg-3 col-md-4 col-sm-6">
      <div className="surah-card border p-3">
        <div className="surah-title d-flex justify-content-around">
          <h6 className="fw-bold">{surah.name_simple}</h6>
          <h6 className="fw-bold">{surah.name_arabic}</h6>
        </div>
        <div className="surah-info d-flex justify-content-around">
            <span className="fw-light">{surah.verses_count} ayahs</span>
            <span className="fw-light">{surah.revelation_place}</span>
        </div>
        <div className="surah-number">
          <span>{surah.id< 10?"0"+surah.id:surah.id}</span>
        </div>
      </div>
    </div>
  );
};

export default SurahCard;
