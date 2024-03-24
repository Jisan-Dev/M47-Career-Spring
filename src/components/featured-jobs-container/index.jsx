import { useState } from 'react';
import FeaturedJobCard from '../featured-job-card';
import Button from '../ui/Button';

const FeaturedJobsContainer = () => {
  const [jobs, setJobs] = useState([]);

  fetch('jobs.json')
    .then((res) => res.json())
    .then((data) => setJobs(data));

  return (
    <>
      <div className="grid grid-cols-2 gap-6 ">
        {jobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button text="See All Jobs" />
      </div>
    </>
  );
};

export default FeaturedJobsContainer;
