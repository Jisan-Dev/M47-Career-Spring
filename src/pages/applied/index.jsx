import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplications } from '../../utils/localstorage';
import { useEffect, useState } from 'react';

const Applied = () => {
  const jobs = useLoaderData();

  const [displayJobs, setDisplayJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobsIds = getStoredJobApplications();
    if (jobs && storedJobsIds) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleFilter = (filter) => {
    if (filter === 'remote') {
      const remote = appliedJobs.filter((job) => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remote);
    } else if (filter === 'onsite') {
      const onsite = appliedJobs.filter((job) => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsite);
    } else if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    }
  };
  return (
    <div>
      <h2>applied jobs: {appliedJobs.length} </h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter('onsite')}>
            <a>Onsite</a>
          </li>
          <li onClick={() => handleFilter('remote')}>
            <a>Remote</a>
          </li>
        </ul>
      </details>
      {displayJobs.map((job) => (
        <div key={job.id} className="border border-green-400">
          <h3>{job.company_name}</h3>
          <p>
            {job.job_title} : {job.remote_or_onsite}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Applied;
