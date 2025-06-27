import React from 'react';
import './SongGrid.css';

const SongGrid = ({ songs, currentSongIndex, onSongSelect }) => {
  return (
    <div className="song-grid">
      {songs.map((song, index) => (
        <div 
          key={index} 
          className={`song-card ${currentSongIndex === index ? 'active' : ''}`}
          onClick={() => onSongSelect(index)}
        >
          <div className="song-card-cover">
            <img src={song.coverArt} alt={`${song.title} by ${song.artist}`} />
            <div className="play-overlay">
              <span className="play-icon">
                {currentSongIndex === index ? '▶' : '+'}
              </span>
            </div>
          </div>
          <div className="song-card-info">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongGrid;