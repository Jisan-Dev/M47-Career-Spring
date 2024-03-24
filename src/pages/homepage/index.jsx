import Button from '../../components/ui/Button';
import user from '../../assets/images/user.png';
import SectionHeader from '../../components/section-header';
import CategoryList from '../../components/categories-list';
import FeaturedJobsContainer from '../../components/featured-jobs-container';

const Homepage = () => {
  return (
    <>
      {/*hero section */}
      <section className="font-gsans relative overflow-x-hidden bg-gradient-to-b from-bannerGradientFrom to to-bannerGradientTo">
        <div className="hero container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
            <div className="relative ml-20 -mb-4 -mr-10">
              <img src={user} className="w-full z-50" />
            </div>
            <div className="max-w-[570px]">
              <h1 className="text-7xl font-bold">One Step Closer To Your Dream Job</h1>
              <p className="py-6 max-w-[519px] text-lg">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
              <Button text={'Get Started'} />
            </div>
          </div>
        </div>
      </section>

      {/*category-list section */}
      <section className="mt-28 font-gsans container mx-auto justify-center">
        <SectionHeader heading="Job Category List" subheading="Explore thousands of job opportunities with all the information you need. Its your future" />
        <main>
          <CategoryList />
        </main>
      </section>

      {/* featured-jobs section */}
      <section className="mt-28 font-gsans container mx-auto justify-center">
        <SectionHeader heading="Featured Jobs" subheading="Explore thousands of job opportunities with all the information you need. Its your future" />
        <main>
          <FeaturedJobsContainer />
        </main>
      </section>
    </>
  );
};

export default Homepage;
