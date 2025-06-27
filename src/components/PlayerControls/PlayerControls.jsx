import { useState } from 'react';
import './PlayerControls.css';

const PlayerControls = ({ onPlay, onPause, onNext, onPrevious, isPlaying }) => {
  return (
    <div className="player-controls">
      <button 
        className="control-button"
        onClick={onPrevious}
        aria-label="Previous track"
      >
        ⏮
      </button>
      <button 
        className="control-button play-pause"
        onClick={isPlaying ? onPause : onPlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button 
        className="control-button"
        onClick={onNext}
        aria-label="Next track"
      >
        ⏭
      </button>
    </div>
  );
};

export default PlayerControls;