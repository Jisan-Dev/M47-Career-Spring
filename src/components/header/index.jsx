import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/CAREER.png';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-bannerGradientFrom to-bannerGradientTo">
      <div className="container mx-auto font-gsans ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to={'/'} className="mr-10">
                  Home
                </NavLink>
                <NavLink className="mr-10">Statistics</NavLink>
                <NavLink to={'/applied'} className="mr-10">
                  Applied Jobs
                </NavLink>
                <NavLink className="mr-10">Blog</NavLink>
              </ul>
            </div>
            <a>
              <img src={logo} className="w-52" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="font-gsans text-base font-medium flex text-neutral-500">
              <NavLink to={'/'} className="mr-10 pt-1">
                Home
              </NavLink>
              <NavLink className="mr-10 pt-1">Statistics</NavLink>
              <NavLink to={'/applied'} className="mr-10 pt-1">
                Applied Jobs
              </NavLink>
              <NavLink className="mr-10 pt-1">Blog</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Button text="Start Applying" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
