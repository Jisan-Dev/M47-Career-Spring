import PropTypes from 'prop-types';

function SectionHeader({ heading, subheading }) {
  return (
    <header className="text-center mb-8">
      <h2 className="text-zinc-900 text-5xl font-bold mb-4">{heading}</h2>
      <p className="max-w-[650px] mx-auto text-neutral-500 text-base font-regular">{subheading}</p>
    </header>
  );
}

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default SectionHeader;
