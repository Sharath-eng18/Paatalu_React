import React, { useState } from 'react';
import './SongGrid.css';

const SongGrid = ({ songs, currentSongIndex, onSongSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="song-grid-container">
      <div className="section-header">
        <h2 className="section-title">Your Music Collection</h2>
        <p className="section-subtitle">Discover and enjoy your favorite tracks</p>
      </div>
      
      <div className="song-grid">
        {songs.map((song, index) => (
          <div 
            key={index} 
            className={`song-card ${currentSongIndex === index ? 'active' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
            onClick={() => onSongSelect(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="song-card-cover">
              <img src={song.coverArt} alt={`${song.title} by ${song.artist}`} />
              <div className="play-overlay">
                <div className="play-button">
                  <span className="play-icon">
                    {currentSongIndex === index ? '⏸' : '▶'}
                  </span>
                </div>
                <div className="overlay-gradient"></div>
              </div>
              <div className="card-shine"></div>
            </div>
            
            <div className="song-card-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
              <div className="song-actions">
                <button className="action-btn favorite">
                  <span>♡</span>
                </button>
                <button className="action-btn more">
                  <span>⋯</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongGrid;