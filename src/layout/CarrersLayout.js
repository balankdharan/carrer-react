import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      {/* Careers Header */}
      <div className="careers-header">
        <h2>Join Our Team</h2>
        <p className="careers-tagline">
          Build your future with us. Discover exciting career opportunities and
          become part of a dynamic, innovative team that values growth and
          collaboration.
        </p>
      </div>

      {/* Why Work With Us Section */}
      <div className="why-work-section">
        <h3>Why Work With Us?</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💰</span>
            <h4>Competitive Salary</h4>
            <p>Industry-leading compensation packages</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🏖️</span>
            <h4>Work-Life Balance</h4>
            <p>Flexible hours and remote work options</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📚</span>
            <h4>Learning & Growth</h4>
            <p>Continuous training and development programs</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🏥</span>
            <h4>Health Benefits</h4>
            <p>Comprehensive health and wellness coverage</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎯</span>
            <h4>Career Advancement</h4>
            <p>Clear paths for professional growth</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌍</span>
            <h4>Diverse Culture</h4>
            <p>Inclusive and collaborative environment</p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="careers-stats">
        <div className="career-stat">
          <span className="stat-value">500+</span>
          <span className="stat-label">Team Members</span>
        </div>
        <div className="career-stat">
          <span className="stat-value">30+</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="career-stat">
          <span className="stat-value">4.8★</span>
          <span className="stat-label">Employee Rating</span>
        </div>
        <div className="career-stat">
          <span className="stat-value">95%</span>
          <span className="stat-label">Retention Rate</span>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="careers-content">
        <h3>Open Positions</h3>
        <Outlet />
      </div>
    </div>
  );
}
