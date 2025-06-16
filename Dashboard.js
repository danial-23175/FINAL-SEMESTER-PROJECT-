import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <div className="grid">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}
