'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [showText, setShowText] = useState(false);
  const router = useRouter();

  const toggleText = () => {
    setShowText(!showText);
  };

  const sidebarWidth = showText ? 'min-w-[180px]' : 'w-18';


  return (
    <div className={`lg:block h-screen bg-[#0052CC] text-white ${sidebarWidth}`}>
      <div className="p-6">
        <button className="mb-8" onClick={toggleText}>
          |||
        </button>
        <nav>
          <ul className="space-y-5">
            <li>
              <Link href="/home/dashboard">
                <p className={` flex items-center `}>
                  {showText ? 'Dashboard' : 'D'}
                </p>
              </Link>
            </li>
            <li>
              <Link href="/home/compose-email">
                <p className={` flex items-center `}>
                  {showText ? 'Compose Email' : 'C'}
                </p>
              </Link>
            </li>
            <li>
              <Link href="/home/analytics">
                <p className={` flex items-center}`}>
                  {showText ? 'Analytics' : 'A'}
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
