import { useState } from 'react'
import Aurora from './blocks/Backgrounds/Particles/Particles.jsx';
import './styles/responsive.css'
import Header from './components/Header/Header.jsx';
import BottomPlayer from './components/BottomPlayer/BottomPlayer.jsx';
import SongGrid from './components/SongGrid/SongGrid.jsx';
import './App.css'

const sampleSongs = [
  {
    title: 'Prema Velluva',
    artist: 'Mickey J.Meyer',
    coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/52/1d/1f/521d1f5f-487f-f275-fd77-60149f9fb218/199350158247.jpg/800x800cc.jpg',
    audioSrc: '/songs/PremaVelluva.mp3'
  },
  {
    title: 'Nuvvunte Chaley',
    artist: 'Vivek-Mervin',
    coverArt: 'https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/XWVyO26Z3k/size_m.jpg',
    audioSrc: '/songs/NuvvunteChaley.mp3'
  },
  {
    title: 'Mallika Gandha',
    artist: 'Sid Sriram',
    coverArt: 'https://c.saavncdn.com/605/Mallika-Gandha-From-Telusu-Kada-Telugu-2025-20250728192014-500x500.jpg',
    audioSrc: '/songs/MallikaGandha.mp3'
  },
  {
    title: 'Sahiba',
    artist: 'Aditya Rikhari',
    coverArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNAb1OyAtvkADy2m8hjSBmEqmtV5LlJUANQ&s',
    audioSrc: '/songs/Sahiba.mp3'
  },
  {
    title: 'Viral Vayyari',
    artist: 'Devi Sri Prasad',
    coverArt: 'https://i.ytimg.com/vi/QtBzQ6U6t6M/maxresdefault.jpg',
    audioSrc: '/songs/ViralVayyari.mp3'
  },
  {
    title: 'Nuvve Naku Lokam',
    artist: 'Karthik',
    coverArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/40/a8/8e/40a88e9d-cb50-61ac-b219-d467452ff9b4/8903431015716_cover.jpg/1200x630bf-60.jpg',
    audioSrc: '/songs/NuvveNakuLokam.mp3'
  },
  {
    title: 'Kadalalle',
    artist: 'Sid Sriram',
    coverArt: 'https://i.scdn.co/image/ab67616d00001e0294645a119b4c0576211180b9',
    audioSrc: '/songs/Kadalalle.mp3'
  },
  {
    title: 'Andala Akasamanta',
    artist: 'S.P.Balasubrahmanyam',
    coverArt: 'https://c.saavncdn.com/545/Chandramukhi-2005-500x500.jpg',
    audioSrc: '/songs/AndalaAakashamanta.mp3'
  },
  {
    title: 'Premalo',
    artist: 'Vijai Bulganin',
    coverArt: 'https://i.scdn.co/image/ab67616d00001e02448efdb3975a56be6ff406c8',
    audioSrc: '/songs/Premalo.mp3'
  },
  {
    title: 'Song for Denise',
    artist: 'Glass Dreams',
    coverArt: 'https://i.discogs.com/MVLNsnycQJTFHJt1ajqI5ZI3xDqYZWHWmYUMz9R4MJs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQ4/NzgtMTM2NDgxMjI4/MC0xMTI0LmpwZWc.jpeg',
    audioSrc: '/songs/SongForDenise.mp3'
  },
  {
    title: 'Gelupuleni Samaram',
    artist: 'Ramya Behra',
    coverArt: 'https://pendujatt.com.se/uploads/album/mahanati-mickey-j-meyer.webp',
    audioSrc: '/songs/GelupuleniSamaram.mp3'
  },
  {
    title: 'Pileche',
    artist: 'Mahesh Babu',
    coverArt: 'https://a10.gaanacdn.com/gn_img/albums/D0PKLqr3Gl/PKLA7nGn3G/size_m.jpg',
    audioSrc: '/songs/Pileche.mp3'
  },
  {
    title: 'BangaruKalla',
    artist: 'Sonali Bindre',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b27338e55e7866d0b6bf085d45c7',
    audioSrc: '/songs/BangaruKalla.mp3'
  },
  {
    title: 'Paddanandi',
    artist: 'Udit Narayan',
    coverArt: 'https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/oMWQDPrM3q/size_m.jpg',
    audioSrc: '/songs/Paddanandi.mp3'
  },
  {
    title: 'Sada Nannu',
    artist: 'Charulatha Mani',
    coverArt: 'https://pendujatt.com.se/uploads/album/mahanati-mickey-j-meyer.webp',
    audioSrc: '/songs/SadaNannu.mp3'
  }
];


function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === sampleSongs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => 
      prevIndex === 0 ? sampleSongs.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <Aurora
        colorStops={["#DB29FF", "#6966FF", "#005EF5"]}
        blend={0.79}
        amplitude={3}
        speed={0.6}
        moveParticlesOnHover={true}
        particleHoverFactor={0.5}
        alphaParticles={true}
      />
      <main className="main-content">
        <div className="content-container">
          <SongGrid 
            songs={sampleSongs}
            currentSongIndex={currentSongIndex}
            onSongSelect={setCurrentSongIndex}
          />
        </div>
      </main>
      <BottomPlayer
        {...sampleSongs[currentSongIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  )
}

export default App
