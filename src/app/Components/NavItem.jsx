'use client'
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const NavItem = ({ navTitle, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`hover:text-gray-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {navTitle}
      </Link>
    </div>
  );
}

export default NavItem;