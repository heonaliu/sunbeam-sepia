import './App.css'
import Webcam from 'react-webcam'

function WebcamCapture() {
  return (
    <div style={{ width: 320, height: 240, border: '1px solid #ccc' }}>
      <Webcam
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: 'user' }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Live Camera</h2>
      <WebcamCapture />
    </main>
  )
}

export default App
