// import PropTypes from 'prop-types';

const FeaturedJobCard = ({ job }) => {
  return (
    <div className="p-10">
      <img src={job.logo} alt="" />
    </div>
  );
};

FeaturedJobCard.propTypes = {};

export default FeaturedJobCard;
