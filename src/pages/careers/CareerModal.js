import { useEffect } from "react";

export default function CareerModal({ career, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h2>{career.title}</h2>
          <div className="modal-badges">
            <span className="badge-location">📍 {career.location}</span>
            <span className="badge-salary">💰 ${career.salary}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <section className="modal-section">
            <h3>Job Description</h3>
            <p>
              Join our dynamic team as a {career.title}! We're looking for a
              passionate professional to help drive innovation and excellence in
              our organization. This role offers exciting challenges and
              opportunities for growth in a collaborative environment.
            </p>
          </section>

          <section className="modal-section">
            <h3>Key Responsibilities</h3>
            <ul>
              <li>
                Lead and execute strategic initiatives aligned with business
                goals
              </li>
              <li>
                Collaborate with cross-functional teams to deliver exceptional
                results
              </li>
              <li>Drive continuous improvement and innovation in processes</li>
              <li>
                Mentor and support team members in their professional
                development
              </li>
            </ul>
          </section>

          <section className="modal-section">
            <h3>Requirements</h3>
            <ul>
              <li>3+ years of experience in a similar role</li>
              <li>Strong problem-solving and analytical skills</li>
              <li>Excellent communication and interpersonal abilities</li>
              <li>
                Bachelor's degree in relevant field or equivalent experience
              </li>
            </ul>
          </section>

          <section className="modal-section">
            <h3>What We Offer</h3>
            <div className="benefits-grid">
              <div className="benefit-item-modal">
                <span>🏥</span>
                <p>Health Insurance</p>
              </div>
              <div className="benefit-item-modal">
                <span>🏖️</span>
                <p>Flexible PTO</p>
              </div>
              <div className="benefit-item-modal">
                <span>💻</span>
                <p>Remote Work</p>
              </div>
              <div className="benefit-item-modal">
                <span>📚</span>
                <p>Learning Budget</p>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            className="btn-apply"
            onClick={() => alert("Application form coming soon!")}
          >
            Apply Now
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
