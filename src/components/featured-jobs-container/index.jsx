import { useState } from 'react';
import FeaturedJobCard from '../featured-job-card';

const FeaturedJobsContainer = () => {
  const [jobs, setJobs] = useState([]);

  fetch('jobs.json')
    .then((res) => res.json())
    .then((data) => setJobs(data));

  return (
    <div className="grid grid-cols-2 gap-6 ">
      {jobs.map((job) => (
        <FeaturedJobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default FeaturedJobsContainer;
