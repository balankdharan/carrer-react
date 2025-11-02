import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Our Platform</h1>
        <p className="hero-subtitle">
          Discover amazing opportunities and connect with a community that helps
          you grow
        </p>
        <div className="hero-buttons">
          <Link to="/careers" className="btn-primary">
            Explore Careers
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast & Reliable</h3>
            <p>Lightning-fast performance with 99.9% uptime guarantee</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>Career Growth</h3>
            <p>Access to hundreds of opportunities from top companies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Expert Support</h3>
            <p>24/7 dedicated support team ready to help you succeed</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3 className="stat-number">10K+</h3>
          <p className="stat-label">Active Users</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">500+</h3>
          <p className="stat-label">Job Listings</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">95%</h3>
          <p className="stat-label">Success Rate</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">24/7</h3>
          <p className="stat-label">Support</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of professionals who have found their dream career</p>
        <Link to="/help" className="btn-cta">
          Get Help Now
        </Link>
      </section>
    </div>
  );
}
