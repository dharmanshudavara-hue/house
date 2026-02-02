export default function Section({ title, text }) {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
