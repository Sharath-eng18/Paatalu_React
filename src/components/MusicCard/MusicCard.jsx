import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from '../PlayerControls/PlayerControls';
import './MusicCard.css';

const MusicCard = ({ title, artist, coverArt, audioSrc, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle song changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(true);
    }
    // Reset audio element
    audioRef.current.currentTime = 0;
  }, [audioSrc]);

  return (
    <div className="music-card">
      <div className="music-card-cover">
        <img src={coverArt} alt={`${title} by ${artist}`} />
      </div>
      <div className="music-card-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
      <PlayerControls 
        isPlaying={isPlaying}
        onPlay={togglePlay}
        onPause={togglePlay}
        onNext={onNext}
        onPrevious={onPrevious}
      />
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default MusicCard;