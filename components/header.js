"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#F7F7F7] text-[#42526e] shadow-md ">
      <nav className="flex items-center justify-between max-w-[88rem] mx-auto py-6 px-8 ">
        <div className='font-bold text-3xl text-[#0052CC]' >Logo</div>
        <ul className="flex gap-12">
          <li className='hover:text-[#0065ff]'>
            <Link href="/"> Products</Link>
          </li>
          <li className='hover:text-[#0065ff]'>
            <Link href="/">Solutions</Link>
          </li>
          <li className='hover:text-[#0065ff]'>
            <Link href="/">Pricing</Link>
          </li>
          <li className='hover:text-[#0065ff]'>
            <Link href="/">Integrations</Link>
          </li>
          <li className='hover:text-[#0065ff]'>
            <Link href="/">Resources</Link>
          </li>
        </ul>
        <div className="space-x-6 font-semibold hover:text-[#0065ff] underline">
        <Link href="/auth/login">Sign in</Link>
        <button className='bg-[#61f9cb] hover:bg-[#50caa5] px-4 py-2 rounded-md font-semibold text-[#6a6a6a] hover:text-[#f7f7f7]'>Get Started For Free</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
