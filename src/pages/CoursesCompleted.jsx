import React from "react";

const completedCourses = [
  "MBT2 Technological  Globalization",
  "LZT2 Power, Influence and  Leadership",
  "C498 M.S., Information Technology Management",
  "C927 Operations and Innovation",
  "C929 IT Sourcing and Development in a Global Economy",
  "C928 Financial Management for IT Professionals",
];

export default function CoursesCompletedPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="courses-page-shell">
      <main className="courses-page-content">
        <section className="courses-panel">
          <p className="courses-kicker">Courses Completed</p>
          <h1 className="courses-heading">M.S. Information Technology Management</h1>

          <ul className="courses-list">
            {completedCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
