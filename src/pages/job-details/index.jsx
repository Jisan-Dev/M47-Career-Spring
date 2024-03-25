import { useLoaderData, useParams } from 'react-router-dom';
import bgOne from '../../assets/images/bg1.png';
import bgTwo from '../../assets/images/bg2.png';
import money from '../../assets/icons/money.png';
import calender from '../../assets/icons/calendar.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/phone.png';
import location from '../../assets/icons/location2.png';
import Button from '../../components/ui/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredJobApplications, setStoredJobApplications } from '../../utils/localstorage';

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const job = jobs.find((job) => job.id === Number(id));

  const handleApply = async () => {
    const storedIds = getStoredJobApplications();
    const storedId = storedIds.some((storedId) => storedId === Number(id));
    if (!storedId) {
      setStoredJobApplications(Number(id));
      toast.success('Application sent!');
    } else {
      toast.error('Application already sent!');
    }
  };
  return (
    <>
      <header className="relative font-gsans">
        <div className="bg-gradient-to-b from-bannerGradientFrom to to-bannerGradientTo h-72 grid place-content-center">
          <h2 className="text-slate-800 text-[32px] font-extrabold uppercase">Job Details</h2>
        </div>
        <img src={bgOne} className="absolute left-0 bottom-0" />
        <img src={bgTwo} className="absolute right-0 -top-[80px] pointer-events-none" />
      </header>
      <main className="container mx-auto font-gsans mt-32">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 space-y-4 p-8">
            <p>
              <strong>Job Description:</strong> <span className="text-neutral-500 text-base font-medium">{job.job_description}</span>
            </p>
            <p>
              <strong>Job Responsibility:</strong> <span className="text-neutral-500 text-base font-medium">{job.job_responsibility}</span>
            </p>
            <p>
              <strong>Educational Requirements:</strong> <br /> <span className="text-neutral-500 text-base font-medium">{job.educational_requirements}</span>
            </p>
            <p>
              <strong>Experiences:</strong> <br /> <span className="text-neutral-500 text-base font-medium">{job.experiences}</span>
            </p>
          </div>
          <div className="border-2 bg-gradient-to-r from-indigo-100 to-violet-100 col-span-2 p-8 rounded-lg">
            <h3 className="text-zinc-900 text-xl font-semibold mb-10">Job Details</h3>
            <div className="flex items-center gap-2 mb-4">
              <img src={money} />
              <p className="text-neutral-500 font-semibold">
                <strong className="text-zinc-700 font-semibold">Salary :</strong> {job.salary}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <img src={calender} />
              <p className="text-neutral-500 font-semibold">
                <strong className="text-zinc-700 font-semibold">Job Title :</strong> {job.job_title}
              </p>
            </div>
            <h3 className="text-zinc-900 text-xl font-semibold mb-10">Contact Information</h3>
            <div className="flex items-center gap-2 mb-4">
              <img src={phone} />
              <p className="text-neutral-500 font-semibold">
                <strong className="text-zinc-700 font-semibold">Phone :</strong> {job.contact_information.phone}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img src={email} />
              <p className="text-neutral-500 font-semibold">
                <strong className="text-zinc-700 font-semibold">Email :</strong> {job.contact_information.email}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img src={location} />
              <p className="text-neutral-500 font-semibold">
                <strong className="text-zinc-700 font-semibold">Address :</strong> {job.contact_information.address}
              </p>
            </div>
            <Button text={'Apply Now'} width="w-full" clickHandler={handleApply} />
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default JobDetails;
