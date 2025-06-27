import React, { useState, useRef, useEffect } from 'react';
import './BottomPlayer.css';

const BottomPlayer = ({ title, artist, coverArt, audioSrc, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bottom-player">
      <div className="player-left">
        <img src={coverArt} alt={`${title} by ${artist}`} className="mini-cover" />
        <div className="song-info">
          <h4>{title}</h4>
          <p>{artist}</p>
        </div>
      </div>
      
      <div className="player-center">
        <div className="controls">
          <button onClick={onPrevious} className="control-button">
            ⏮
          </button>
          <button onClick={togglePlay} className="control-button play-pause">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button onClick={onNext} className="control-button">
            ⏭
          </button>
        </div>
        <div className="progress-container">
          <span className="time">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleTimeChange}
            className="progress-bar"
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default BottomPlayer;