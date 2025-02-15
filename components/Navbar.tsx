import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => { 
    return (
      <nav className="fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="Bura logo"
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">Bura</p>
        </Link>
  
        {/* Navigation Content */}
        <div className="flex flex-1 justify-end items-center gap-5">
          {/* Mobile Navigation */}
          <MobileNav />
  
          {/* User Profile Button */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    );
  };
  

export default Navbar;
