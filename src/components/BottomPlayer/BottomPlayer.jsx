import React, { useState, useRef, useEffect } from 'react';
import './BottomPlayer.css';

const BottomPlayer = ({ title, artist, coverArt, audioSrc, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      // Auto-play the new song
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Auto-play was prevented:', error);
        setIsPlaying(false);
      });
    }
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
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === '0');
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const getProgressPercentage = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div className={`bottom-player ${isMinimized ? 'minimized' : ''}`}>
      <div className="player-backdrop"></div>
      
      <div className="progress-indicator" style={{ width: `${getProgressPercentage()}%` }}></div>
      
      <div className="player-content">
        <div className="player-left">
          <div className="cover-container">
            <img src={coverArt} alt={`${title} by ${artist}`} className="mini-cover" />
            <div className="cover-glow"></div>
          </div>
          <div className="song-info">
            <h4 className="song-title">{title}</h4>
            <p className="song-artist">{artist}</p>
          </div>
          <button className="favorite-btn">
            <span>♡</span>
          </button>
        </div>
        
        <div className="player-center">
          <div className="main-controls">
            <button onClick={onPrevious} className="control-button prev">
              <span>⏮</span>
            </button>
            <button onClick={togglePlay} className="control-button play-pause">
              <span>{isPlaying ? '⏸' : '▶'}</span>
            </button>
            <button onClick={onNext} className="control-button next">
              <span>⏭</span>
            </button>
          </div>
          
          <div className="progress-section">
            <span className="time current">{formatTime(currentTime)}</span>
            <div className="progress-container">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleTimeChange}
                className="progress-bar"
                style={{
                  background: `linear-gradient(to right, #DB29FF 0%, #6966FF ${getProgressPercentage()}%, rgba(255,255,255,0.2) ${getProgressPercentage()}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
            <span className="time total">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-right">
          <div className="volume-section">
            <button onClick={toggleMute} className="control-button volume-btn">
              <span>{isMuted ? '🔇' : volume > 0.5 ? '🔊' : '🔉'}</span>
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-bar"
            />
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default BottomPlayer;