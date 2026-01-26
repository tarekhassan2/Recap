import { createFileRoute, Link } from '@tanstack/react-router'
import './index.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const currentYear = new Date().getFullYear()
  const startYear = 2025
  const yearList = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse()

  return (
    <div className="home-container">
      <div className="home-content">
        <header className="home-header">
          <h1 className="home-title">Noon Work Recap</h1>
          <p className="home-subtitle">
            A reference of all my work and achievements at Noon
          </p>
        </header>

        <section className="years-section">
          <h2 className="years-title">Select a Year</h2>
          <div className="years-grid">
            {yearList.map((year) => (
              <Link
                key={year}
                to="/year/$year"
                params={{ year: year.toString() }}
                className="year-card"
              >
                <div className="year-number">{year}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
