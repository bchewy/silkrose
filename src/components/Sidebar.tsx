'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiUsers, 
  FiBarChart2, 
  FiSettings, 
  FiMenu, 
  FiX,
  FiTarget,
  FiClock,
  FiFileText,
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiGrid,
  FiDollarSign,
  FiPieChart,
  FiMapPin,
  FiFolder
} from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Reorganized navigation with sections
  const navigationSections = [
    {
      title: 'Overview',
      icon: FiGrid,
      items: [
        { name: 'Dashboard', href: '/', icon: FiHome },
      ]
    },
    {
      title: 'Trading',
      icon: FiDollarSign,
      items: [
        { name: 'Trade Opportunities', href: '/opportunities', icon: FiTarget },
        { name: 'Transaction Flow', href: '/transactions', icon: FiClock },
        { name: 'Investor Matching', href: '/investors', icon: FiUsers },
      ]
    },
    {
      title: 'Analysis',
      icon: FiPieChart,
      items: [
        { name: 'Financial Analytics', href: '/analytics', icon: FiBarChart2 },
        { name: 'Performance', href: '/performance', icon: FiTrendingUp },
      ]
    },
    {
      title: 'Market Intelligence',
      icon: FiMapPin,
      items: [
        { name: 'Global Markets', href: '/markets', icon: FiGlobe },
        { name: 'Risk Management', href: '/risk', icon: FiShield },
      ]
    },
    {
      title: 'Resources',
      icon: FiFolder,
      items: [
        { name: 'Documents', href: '/documents', icon: FiFileText },
        { name: 'Settings', href: '/settings', icon: FiSettings },
      ]
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-silk-600 to-rose-500 flex items-center justify-center text-white font-bold text-xl">
                ST
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-silk-600 to-rose-500">
                  Silkier Trade
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Backoffice</p>
              </div>
            </div>
          </div>

          {/* Navigation with Sections */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            {navigationSections.map((section, idx) => (
              <div key={section.title} className={idx > 0 ? 'mt-6' : ''}>
                <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
                  <section.icon className="h-3.5 w-3.5 mr-1.5 opacity-75" />
                  <span className="mr-2">{section.title}</span>
                  <span className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></span>
                </h3>
                <ul className="mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-2.5 text-sm rounded-md ${
                          pathname === item.href
                            ? 'bg-silk-50 text-silk-700 dark:bg-gray-800 dark:text-silk-400'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
} 