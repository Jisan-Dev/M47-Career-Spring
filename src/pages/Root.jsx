import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
