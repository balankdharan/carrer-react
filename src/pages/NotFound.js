import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        {/* 404 Animation */}
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>

        {/* Error Message */}
        <h2>Oops! Page Not Found</h2>
        <p className="error-message">
          The page you're looking for seems to have wandered off into the
          digital void. Don't worry though, we'll help you find your way back!
        </p>

        {/* Suggestions */}
        <div className="error-suggestions">
          <h3>Here's what you can do:</h3>
          <ul>
            <li>🏠 Check if the URL is correct</li>
            <li>🔍 Use the navigation menu to find what you need</li>
            <li>📞 Contact us if you think this is a mistake</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn-home">
            🏠 Go to Homepage
          </Link>
          <Link to="/help/contact" className="btn-help">
            💬 Get Help
          </Link>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <p>Quick Links:</p>
          <div className="quick-links-grid">
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/help/faq">FAQ</Link>
            <Link to="/help/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
