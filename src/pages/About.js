import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      {/* About Hero Section */}
      <div className="about-hero">
        <h2>About Our Company</h2>
        <p className="about-subtitle">
          Empowering innovation and connecting talent with opportunity since
          2015
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-grid">
        <div className="mission-card">
          <div className="card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To revolutionize the way people find meaningful careers by
            connecting talented individuals with forward-thinking companies that
            value innovation, diversity, and professional growth.
          </p>
        </div>
        <div className="vision-card">
          <div className="card-icon">🚀</div>
          <h3>Our Vision</h3>
          <p>
            To become the world's most trusted career platform, where every
            professional can discover opportunities that align with their
            passion, skills, and aspirations for a better future.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="story-section">
        <h3>Our Story</h3>
        <p>
          Founded in 2015, we started with a simple belief: everyone deserves to
          find work they love. What began as a small startup has grown into a
          thriving platform serving thousands of professionals and companies
          worldwide.
        </p>
        <p>
          Our team of dedicated professionals works tirelessly to bridge the gap
          between talent and opportunity. We leverage cutting-edge technology,
          data-driven insights, and human expertise to create meaningful
          connections that transform careers and businesses.
        </p>
        <p>
          Today, we're proud to have helped over 10,000 professionals find their
          dream jobs and enabled hundreds of companies to build exceptional
          teams. But we're just getting started on our journey to reshape the
          future of work.
        </p>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-icon">💡</span>
            <h4>Innovation</h4>
            <p>We constantly evolve and embrace new technologies</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🤝</span>
            <h4>Integrity</h4>
            <p>We operate with transparency and honesty</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🌟</span>
            <h4>Excellence</h4>
            <p>We strive for the highest quality in everything we do</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🌈</span>
            <h4>Diversity</h4>
            <p>We celebrate and embrace different perspectives</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3>Meet Our Leadership</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h4>John Anderson</h4>
            <p className="member-role">CEO & Founder</p>
            <p className="member-bio">15+ years in tech and recruitment</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h4>Sarah Chen</h4>
            <p className="member-role">Chief Technology Officer</p>
            <p className="member-bio">
              Former engineer at leading tech companies
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h4>Michael Brown</h4>
            <p className="member-role">Head of Operations</p>
            <p className="member-bio">Expert in scaling business operations</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🎨</div>
            <h4>Emily Rodriguez</h4>
            <p className="member-role">Chief Marketing Officer</p>
            <p className="member-bio">
              Brand strategist with global experience
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="about-cta">
        <h3>Want to Learn More?</h3>
        <p>Explore our career opportunities or get in touch with our team</p>
        <div className="about-cta-buttons">
          <button className="cta-button-primary">View Careers</button>
          <button className="cta-button-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
