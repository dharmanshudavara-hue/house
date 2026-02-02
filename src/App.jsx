import Hero from './components/Hero'
import Section from './components/Section'

export default function App() {
  return (
    <>
      <Hero />
      <Section
        title="Designed in 3D"
        text="A smooth blend of 3D and web interaction."
      />
      <Section
        title="Scroll. Hover. Explore."
        text="Every movement feels natural and alive."
      />
    </>
  )
}
