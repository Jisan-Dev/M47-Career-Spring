import { useState } from 'react';
import FeaturedJobCard from '../featured-job-card';
import Button from '../ui/Button';

const FeaturedJobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  fetch('jobs.json')
    .then((res) => res.json())
    .then((data) => setJobs(data));

  const clickHandler = () => {
    setDataLength(jobs.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6 ">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center mt-6">{dataLength !== jobs.length && <Button clickHandler={clickHandler} text="See All Jobs" />}</div>
    </>
  );
};

export default FeaturedJobsContainer;
