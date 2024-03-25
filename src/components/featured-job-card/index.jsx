import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const FeaturedJobCard = ({ job }) => {
  return (
    <div className="p-10 rounded-lg border border-indigo-100  flex flex-col">
      <div>
        <img src={job.logo} alt="" />
      </div>
      <h3 className="text-zinc-700 text-2xl font-extrabold mt-8 mb-2">{job.job_title}</h3>
      <h4 className="text-neutral-500 text-xl font-semibold">{job.company_name}</h4>
      <div className="flex items-center gap-4 mt-4">
        <span className="px-5 py-2 text-base font-semibold rounded border border-indigo-400 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent ">
          {job.remote_or_onsite}
        </span>
        <span className="px-5 py-2 text-base font-semibold rounded border border-indigo-400 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent  ">
          {job.job_type}
        </span>
      </div>
      <div className="flex gap-6 items-center mt-4 mb-6 flex-grow">
        <p className="flex gap-2 items-center text-neutral-500 text-xl font-medium">
          <GrLocation /> {job.location}
        </p>
        <p className="flex gap-2 items-center text-neutral-500 text-xl font-medium">
          <BiDollarCircle /> {job.salary}
        </p>
      </div>
      <Link to={`jobs/${job.id}`}>
        <Button text="View Details" px="px-3" py="py-[10px]" />
      </Link>
    </div>
  );
};

FeaturedJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default FeaturedJobCard;
