import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { years } from '../data/years'
import './year.$year.css'

export const Route = createFileRoute('/year/$year')({
  component: YearPage,
})

// Helper function to get image URL with base path
const getImageUrl = (imagePath: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  // Remove leading slash from imagePath if it exists, then combine with baseUrl
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  // Ensure baseUrl ends with / and cleanPath doesn't start with /
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${base}${cleanPath}`
}

function YearPage() {
  const { year } = Route.useParams()
  const yearNum = parseInt(year, 10)
  const yearData = years[yearNum]

  if (!yearData) {
    return (
      <div className="year-container">
        <div className="year-content">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <div className="error-message">
            <h1>Year {year} Not Found</h1>
            <p>No data available for this year yet.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="year-container">
      <div className="year-content">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        {/* Cover Section */}
        <header className="year-header">
          <div className="year-badge">ANNUAL REVIEW</div>
          <h1 className="year-title">
            {year} Work Summary <br />
            <span className="year-title-accent">Tarek Hassan</span>
          </h1>
          <p className="year-description">{yearData.description}</p>
          {yearData.role && (
            <div className="year-meta">
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{yearData.role}</span>
              </div>
              {yearData.focusAreas && yearData.focusAreas.length > 0 && (
                <div className="meta-item">
                  <span className="meta-label">Focus Areas</span>
                  <div className="meta-tags">
                    {yearData.focusAreas.map((area, idx) => (
                      <span key={idx} className="meta-tag">{area}</span>
                    ))}
                  </div>
                </div>
              )}
              {yearData.context && (
                <div className="meta-item">
                  <span className="meta-label">Context</span>
                  <span className="meta-value">{yearData.context}</span>
                </div>
              )}
            </div>
          )}
        </header>

        {/* Year Overview */}
        {yearData.yearOverview && (
          <section className="content-section">
            <h2 className="section-title">Year Overview</h2>
            <div className="overview-card">
              <p className="overview-statement">{yearData.yearOverview.statement}</p>
              <div className="highlights-list">
                {yearData.yearOverview.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <i className="fas fa-check-circle highlight-icon"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Contributions */}
        {yearData.keyContributions && yearData.keyContributions.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Key Contributions</h2>
            <div className="contributions-grid">
              {yearData.keyContributions.map((contribution, idx) => (
                <div key={idx} className="contribution-card">
                  <div className="contribution-header">
                    <span className="contribution-category">{contribution.category}</span>
                  </div>
                  <h3 className="contribution-title">{contribution.title}</h3>
                  <p className="contribution-description">{contribution.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quarterly Highlights */}
        {yearData.quarterlyHighlights && yearData.quarterlyHighlights.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Quarterly Highlights</h2>
            {yearData.quarterlyHighlights.map((quarter, qIdx) => (
              <QuarterCarousel key={qIdx} quarter={quarter} />
            ))}
          </section>
        )}

        {/* Overall Impact */}
        {yearData.overallImpact && (
          <section className="content-section">
            <div className="impact-header">
              <h2 className="section-title">2025 SUMMARY: Overall Impact</h2>
              <p className="impact-objective">
                Delivering measurable value across new revenue channels, operational speed, and platform scalability.
              </p>
            </div>
            <div className="impact-dashboard">
              {yearData.overallImpact.revenue && (
                <div className="impact-card impact-revenue">
                  <div className="impact-card-header">
                    <div className="impact-icon">
                      <i className="fas fa-hand-holding-dollar"></i>
                    </div>
                    <span className="impact-subtitle">GROWTH</span>
                  </div>
                  <h3 className="impact-title">New Revenue Streams</h3>
                  <div className="impact-metric">
                    <span className="impact-metric-value">~30K AED/mo</span>
                    <span className="impact-metric-context">Seasonal Target (Ramadan)</span>
                  </div>
                  <p className="impact-text">
                    {yearData.overallImpact.revenue.includes('.') 
                      ? yearData.overallImpact.revenue.split('.').slice(1).join('.').trim()
                      : yearData.overallImpact.revenue.replace(/^[^.]*\./, '').trim() || 'Enabled FBN to operate as a 3PL service provider via JUMP and premium Namshi Gifting flows.'}
                  </p>
                </div>
              )}
              {yearData.overallImpact.efficiency && yearData.overallImpact.efficiency.length > 0 && (
                <div className="impact-card impact-efficiency">
                  <div className="impact-card-header">
                    <div className="impact-icon">
                      <i className="fas fa-cog"></i>
                    </div>
                  </div>
                  <h3 className="impact-title">Operational Efficiency</h3>
                  <p className="impact-description">Optimizing warehouse throughput & resource usage</p>
                  <div className="impact-subitems">
                    {yearData.overallImpact.efficiency.map((item, idx) => {
                      const [title, ...descriptionParts] = item.split(':')
                      const description = descriptionParts.join(':').trim()
                      const iconMap: { [key: string]: string } = {
                        'Wireless Printing': 'fa-print',
                        'Specialized Flows': 'fa-box',
                        'Aging Logic': 'fa-clock',
                      }
                      const icon = iconMap[title] || 'fa-check-circle'
                      return (
                        <div key={idx} className="impact-subitem">
                          <div className="impact-subitem-icon">
                            <i className={`fas ${icon}`}></i>
                          </div>
                          <div className="impact-subitem-content">
                            <strong className="impact-subitem-title">{title}:</strong>
                            <span className="impact-subitem-text">{description}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {yearData.overallImpact.riskReduction && yearData.overallImpact.riskReduction.length > 0 && (
                <div className="impact-card impact-risk">
                  <div className="impact-card-header">
                    <div className="impact-icon">
                      <i className="fas fa-shield-halved"></i>
                    </div>
                  </div>
                  <h3 className="impact-title">Risk Reduction</h3>
                  <ul className="impact-list">
                    {yearData.overallImpact.riskReduction.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {yearData.overallImpact.visibility && yearData.overallImpact.visibility.length > 0 && (
                <div className="impact-card impact-visibility">
                  <div className="impact-card-header">
                    <div className="impact-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                  </div>
                  <h3 className="impact-title">Visibility & Control</h3>
                  <ul className="impact-list">
                    {yearData.overallImpact.visibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {yearData.overallImpact.platformReadiness && yearData.overallImpact.platformReadiness.length > 0 && (
                <div className="impact-card impact-platform">
                  <div className="impact-card-header">
                    <div className="impact-icon">
                      <i className="fas fa-cubes-stacked"></i>
                    </div>
                  </div>
                  <h3 className="impact-title">Platform Readiness</h3>
                  <ul className="impact-list">
                    {yearData.overallImpact.platformReadiness.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Technical Learnings */}
        {yearData.technicalLearnings && yearData.technicalLearnings.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Technical Learnings</h2>
            <div className="learnings-grid">
              {yearData.technicalLearnings.map((learning, idx) => (
                <div key={idx} className="learning-card">
                  <div className="learning-header">
                    <span className="learning-category">{learning.category}</span>
                    {learning.tag && <span className="learning-tag">{learning.tag}</span>}
                  </div>
                  <h3 className="learning-title">{learning.title}</h3>
                  <p className="learning-description">{learning.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Soft Skills */}
        {yearData.softSkills && yearData.softSkills.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Soft Skills Development</h2>
            <div className="learnings-grid">
              {yearData.softSkills.map((skill, idx) => (
                <div key={idx} className="learning-card">
                  <div className="learning-header">
                    <span className="learning-category">{skill.category}</span>
                    {skill.tag && <span className="learning-tag">{skill.tag}</span>}
                  </div>
                  <h3 className="learning-title">{skill.title}</h3>
                  <p className="learning-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Self Assessment */}
        {yearData.selfAssessment && yearData.selfAssessment.length > 0 && (
          <section className="content-section">
            <h2 className="section-title">Self-Assessment</h2>
            <div className="assessment-list">
              {yearData.selfAssessment.map((assessment, idx) => (
                <div key={idx} className="assessment-card">
                  <div className="assessment-score">
                    <span className="score-value">{assessment.score}</span>
                    <span className="score-max">/ {assessment.maxScore}</span>
                  </div>
                  <div className="assessment-content">
                    <h3 className="assessment-title">{assessment.category}</h3>
                    <div className="score-bar">
                      <div
                        className="score-bar-fill"
                        style={{ width: `${(assessment.score / assessment.maxScore) * 100}%` }}
                      ></div>
                    </div>
                    <div className="assessment-details">
                      <div className="assessment-strengths">
                        <span className="detail-label">Strengths</span>
                        {assessment.strengths.map((strength, sIdx) => (
                          <div key={sIdx} className="detail-item">
                            <i className="fas fa-check"></i>
                            <span>{strength}</span>
                          </div>
                        ))}
                      </div>
                      <div className="assessment-growth">
                        <span className="detail-label">Areas for Growth</span>
                        {assessment.areasForGrowth.map((area, aIdx) => (
                          <div key={aIdx} className="detail-item">
                            <i className="fas fa-arrow-up"></i>
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Debt & Initiatives */}
        {(yearData.techDebt || yearData.initiatives) && (
          <section className="content-section">
            <h2 className="section-title">Tech Debt & Initiatives</h2>
            <div className="debt-initiatives-grid">
              {yearData.techDebt && yearData.techDebt.length > 0 && (
                <div className="debt-section">
                  <h3 className="subsection-title">Identified Tech Debt</h3>
                  {yearData.techDebt.map((debt, idx) => (
                    <div key={idx} className="debt-card">
                      <div className="debt-header">
                        <h4 className="debt-title">{debt.title}</h4>
                        {debt.version && <span className="debt-version">{debt.version}</span>}
                      </div>
                      <ul className="debt-list">
                        {debt.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {yearData.initiatives && yearData.initiatives.length > 0 && (
                <div className="initiatives-section">
                  <h3 className="subsection-title">New Initiatives</h3>
                  {yearData.initiatives.map((initiative, idx) => (
                    <div key={idx} className="initiative-card">
                      <span className="initiative-status">{initiative.status}</span>
                      <h4 className="initiative-title">{initiative.title}</h4>
                      <p className="initiative-description">{initiative.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Team Feedback */}
        {yearData.teamFeedback && yearData.teamFeedback.length > 0 && (
          <section className="content-section">
            <div className="feedback-header-section">
              <span className="feedback-section-subtitle">COLLABORATION</span>
              <h2 className="section-title">Team Feedback</h2>
              <p className="feedback-section-description">
                Constructive notes for cross-functional partners to improve workflows in 2026.
              </p>
            </div>
            <div className="feedback-grid">
              {yearData.teamFeedback.map((feedback, idx) => {
                const iconMap: { [key: string]: { icon: string; color: string } } = {
                  'Backend': { icon: 'fa-layer-group', color: '#8b5cf6' },
                  'Product': { icon: 'fa-clipboard-list', color: '#f59e0b' },
                  'Design': { icon: 'fa-mouse-pointer', color: '#ef4444' },
                }
                const teamConfig = iconMap[feedback.team] || { icon: 'fa-comments', color: '#64748b' }
                const tagColorMap: { [key: string]: string } = {
                  'Testing Efficiency': '#3b82f6',
                  'Documentation': '#f59e0b',
                  'Consistency': '#ef4444',
                }
                const tagColor = tagColorMap[feedback.tag] || '#64748b'
                
                return (
                  <div key={idx} className="feedback-card">
                    <div className="feedback-card-icon" style={{ backgroundColor: `${teamConfig.color}15`, color: teamConfig.color }}>
                      <i className={`fas ${teamConfig.icon}`}></i>
                    </div>
                    <h3 className="feedback-team">{feedback.team}</h3>
                    <span className="feedback-subtitle">{feedback.subtitle}</span>
                    <p className="feedback-text">"{feedback.feedback}"</p>
                    <span className="feedback-tag" style={{ backgroundColor: `${tagColor}15`, color: tagColor }}>
                      {feedback.tag.toUpperCase()}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Goals */}
        {(yearData.individualGoals || yearData.teamGoals) && (
          <section className="content-section">
            <h2 className="section-title">2026 Goals</h2>
            {yearData.individualGoals && yearData.individualGoals.length > 0 && (
              <div className="goals-section">
                <h3 className="subsection-title">Individual Goals</h3>
                <div className="goals-grid">
                  {yearData.individualGoals.map((goal, idx) => (
                    <div key={idx} className="goal-card">
                      <div className="goal-header">
                        <span className="goal-category">{goal.category}</span>
                        <h4 className="goal-title">{goal.title}</h4>
                      </div>
                      <ul className="goal-list">
                        {goal.items.map((item, iIdx) => (
                          <li key={iIdx} className="goal-item">
                            <i className="fas fa-check-circle goal-icon"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {yearData.teamGoals && yearData.teamGoals.length > 0 && (
              <div className="goals-section">
                <h3 className="subsection-title">Team Goals</h3>
                <div className="goals-grid">
                  {yearData.teamGoals.map((goal, idx) => (
                    <div key={idx} className="goal-card">
                      <div className="goal-header">
                        <span className="goal-category">{goal.category}</span>
                        <h4 className="goal-title">{goal.title}</h4>
                      </div>
                      <ul className="goal-list">
                        {goal.items.map((item, iIdx) => (
                          <li key={iIdx} className="goal-item">
                            <i className="fas fa-check-circle goal-icon"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}

function QuarterCarousel({ quarter }: { quarter: { quarter: string; focus: string; projects: any[] } }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const projects = quarter.projects

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setSelectedImageIndex(null)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setSelectedImageIndex(null)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setSelectedImageIndex(null)
  }

  const currentProject = projects[currentIndex]
  const projectImages = currentProject?.images || []

  return (
    <div className="quarter-section">
      <div className="quarter-header">
        <h3 className="quarter-title">{quarter.quarter}</h3>
        <span className="quarter-focus">Focus: {quarter.focus}</span>
      </div>
      <div className="carousel-container">
        <button
          className="carousel-button carousel-button-prev"
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, pIdx) => (
              <div key={pIdx} className="carousel-slide">
                <div className="project-card">
                  
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  {project.features && project.features.length > 0 && (
                    <ul className="project-features">
                      {project.features.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="feature-item">
                          <i className="fas fa-check-circle feature-icon"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.impact && (
                    <div className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                  )}

                  {/* Project Images Gallery - At the bottom */}
                  {project.images && project.images.length > 0 && (
                    <div className="project-images-section">
                      <h5 className="project-images-title">
                        <i className="fas fa-images"></i> Project Results
                      </h5>
                      <div className="project-images-grid">
                        {project.images.map((image: string, imgIdx: number) => (
                          <div
                            key={imgIdx}
                            className="project-image-wrapper"
                            onClick={() => setSelectedImageIndex(imgIdx)}
                          >
                            <img
                              src={getImageUrl(image)}
                              alt={`${project.title} - Image ${imgIdx + 1}`}
                              className="project-image"
                              loading="lazy"
                            />
                            <div className="project-image-overlay">
                              <i className="fas fa-expand"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-button carousel-button-next"
          onClick={goToNext}
          aria-label="Next project"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      {projects.length > 1 && (
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImageIndex !== null && projectImages.length > 0 && (
        <ImageLightbox
          images={projectImages}
          initialIndex={selectedImageIndex}
          projectTitle={currentProject.title}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  )
}

function ImageLightbox({
  images,
  initialIndex,
  projectTitle,
  onClose,
}: {
  images: string[]
  initialIndex: number
  projectTitle: string
  onClose: () => void
}) {
  const [lightboxIndex, setLightboxIndex] = useState(initialIndex)

  // Sync with parent initialIndex when it changes
  useEffect(() => {
    setLightboxIndex(initialIndex)
  }, [initialIndex])

  const handleThumbnailClick = (index: number) => {
    setLightboxIndex(index)
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [images.length, onClose])

  return (
    <div className="image-lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>
      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <h3 className="lightbox-title">{projectTitle}</h3>
          {images.length > 1 && (
            <span className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </span>
          )}
        </div>
        <div className="lightbox-image-container">
          <img
            src={getImageUrl(images[lightboxIndex])}
            alt={`${projectTitle} - Image ${lightboxIndex + 1}`}
            className="lightbox-image"
          />
        </div>
        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((image, idx) => (
              <button
                key={idx}
                className={`lightbox-thumbnail ${idx === lightboxIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(idx)}
              >
                <img src={getImageUrl(image)} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
