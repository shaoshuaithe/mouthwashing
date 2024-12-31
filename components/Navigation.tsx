'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: 'About',
      href: '/about',
      submenu: [
        { name: 'Overview', href: '/about/overview' },
        { name: 'Requirements', href: '/about/requirements' },
        { name: 'Changelog', href: '/about/changelog' },
      ],
    },
    {
      name: 'Characters',
      href: '/characters',
      submenu: [
        { name: 'Anya', href: '/characters/anya' },
        { name: 'Curly', href: '/characters/curly' },
        { name: 'Jimmy', href: '/characters/jimmy' },
        { name: 'Daisuke', href: '/characters/daisuke' },
        { name: 'Swansea', href: '/characters/swansea' },
      ],
    },
    {
      name: 'Guide',
      href: '/guide',
      submenu: [
        { name: 'Beginner Guide', href: '/guide/beginner' },
        { name: 'Walkthrough', href: '/guide/walkthrough' },
        { name: 'Achievements', href: '/guide/achievements' },
        { name: 'Endings', href: '/guide/endings' },
      ],
    },
    {
      name: 'Story',
      href: '/story',
      submenu: [
        { name: 'Main Plot', href: '/story/main-plot' },
        { name: 'Relationships', href: '/story/relationships' },
        { name: 'Theories', href: '/story/theories' },
        { name: 'Timeline', href: '/story/timeline' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      submenu: [
        { name: 'Download', href: '/resources/download' },
        { name: 'Patches', href: '/resources/patches' },
        { name: 'FAQ', href: '/resources/faq' },
      ],
    },
    {
      name: 'Community',
      href: '/community',
      submenu: [
        { name: 'News', href: '/community/news' },
        { name: 'Discussion', href: '/community/discussion' },
        { name: 'Fan Works', href: '/community/fanworks' },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-horizontal.png"
              alt="MouthWashing"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center ${
                    pathname.startsWith(item.href) ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className={`block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white ${
                          pathname === subitem.href ? 'bg-gray-700 text-white' : ''
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 ${
                  pathname.startsWith(item.href) ? 'bg-gray-700 text-white' : ''
                }`}
              >
                {item.name}
              </Link>
              <div className="pl-4">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className={`block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 ${
                      pathname === subitem.href ? 'bg-gray-700 text-white' : ''
                    }`}
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
