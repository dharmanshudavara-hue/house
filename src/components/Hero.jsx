import SplineScene from './SplineScene'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Interactive 3D Experience</h1>
        <p>Scroll, move, and explore the future.</p>
        <button>Enter Experience</button>
      </div>

      <SplineScene />
    </section>
  )
}
