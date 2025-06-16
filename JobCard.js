import React from 'react';

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Skills: {job.skillsRequired.join(', ')}</p>
      <p>Budget: ${job.budget}</p>
    </div>
  );
}
