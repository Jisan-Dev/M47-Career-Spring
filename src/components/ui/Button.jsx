const Button = ({ text }) => {
  return (
    <div>
      <a
        href="#"
        className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-[#9873FF]">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7E90FE]  to-[#9873FF]"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#7f52fc] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white text-base">{text}</span>
      </a>
    </div>
  );
};

export default Button;
