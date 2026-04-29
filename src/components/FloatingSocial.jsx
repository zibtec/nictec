import React from "react";

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" />
    <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      d="M7.2 9.2H4.8V19.2H7.2V9.2ZM6 8.2C6.8 8.2 7.4 7.6 7.4 6.8C7.4 6 6.8 5.4 6 5.4C5.2 5.4 4.6 6 4.6 6.8C4.6 7.6 5.2 8.2 6 8.2ZM19.2 13.4C19.2 10.8 17.8 9 15.6 9C14.5 9 13.7 9.6 13.4 10.1V9.2H11V19.2H13.4V14.2C13.4 12.9 13.9 12 15 12C16.1 12 16.4 13 16.4 14.3V19.2H18.8V13.4H19.2Z"
      fill="white"
    />
  </svg>
);

const AwardIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M6 22L12 16L18 22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export { MailIcon, LinkedInIcon, AwardIcon };

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <div className="floating-rail" />
      <a href="mailto:nick@nickcoury.co" className="social-link">
        <span className="social-orb email"><MailIcon size={18} /></span>
        <span className="social-tooltip">Email</span>
      </a>
      <a href="http://www.linkedin.com/in/nickacoury" target="_blank" rel="noreferrer" className="social-link">
        <span className="social-orb linkedin"><LinkedInIcon size={18} /></span>
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a href="https://www.credly.com/users/nick-coury" target="_blank" rel="noreferrer" className="social-link">
        <span className="social-orb credly"><AwardIcon size={18} /></span>
        <span className="social-tooltip">Certifications</span>
      </a>
      <div className="floating-rail" />
    </div>
  );
}
