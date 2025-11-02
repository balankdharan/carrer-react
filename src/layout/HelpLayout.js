import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      {/* Help Header */}
      <div className="help-header">
        <h2>How Can We Help You?</h2>
        <p>
          Find answers to common questions or reach out to our support team.
          We're here to assist you with any issues or inquiries you may have.
        </p>
      </div>

      {/* Help Navigation Cards */}
      <nav className="help-nav">
        <NavLink to="faq" className="help-nav-card">
          <div className="help-nav-icon">❓</div>
          <h3>FAQ</h3>
          <p>Browse frequently asked questions and find quick answers</p>
        </NavLink>
        <NavLink to="contact" className="help-nav-card">
          <div className="help-nav-icon">✉️</div>
          <h3>Contact Us</h3>
          <p>Get in touch with our support team for personalized assistance</p>
        </NavLink>
      </nav>

      {/* Outlet for nested routes */}
      <div className="help-content">
        <Outlet />
      </div>
    </div>
  );
}
