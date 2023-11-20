'use client'

import Sidebar from './sidebar/sidebard';
import { useRouter } from 'next/navigation';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;