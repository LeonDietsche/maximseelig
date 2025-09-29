import { createRoot } from 'react-dom/client'
import { useEffect, useRef } from 'react'
import './index.css'
import { initMaxim } from './script.js'   // <-- import the initializer (no side-effect import)

const BASE = import.meta.env.BASE_URL
const TRACKS = [
  { title: 'La Vie Est Belle',      file: `${BASE}assets/tracks/mp3/la-vie-est-belle.mp3` },
  { title: 'The Machinist',          file: `${BASE}assets/tracks/mp3/the-machinist.mp3` },
  { title: 'Post Traumatic Season',  file: `${BASE}assets/tracks/mp3/post-traumatic-season.mp3` },
  { title: 'Paris',                  file: `${BASE}assets/tracks/mp3/paris.mp3` },
  { title: 'Zodiac',                 unreleased: true },
  { title: 'I Love You',             unreleased: true },
  { title: 'Game',                   unreleased: true },
]


function Root() {
  const canvasRef = useRef(null)
  const playlistRef = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => {
    // initialize once the elements exist
    const cleanup = initMaxim({
      canvas: canvasRef.current,
      playlistEl: playlistRef.current,
      emailEl: emailRef.current,
      tracks: TRACKS,
      playheadColor: '#111',
      playheadWidth: 0.5,
    })
    return cleanup
  }, [])

  return (
    <>
      <div id="playlist" ref={playlistRef} />
      <canvas id="canvas" ref={canvasRef} />
      <div id="emailOverlay" ref={emailRef}>
        <a href="mailto:contact@maximseelig.com">contact@maximseelig.com</a>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
