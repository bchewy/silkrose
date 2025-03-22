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
  FiTrendingUp
} from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Trade Opportunities', href: '/opportunities', icon: FiTarget },
    { name: 'Transaction Flow', href: '/transactions', icon: FiClock },
    { name: 'Investor Matching', href: '/investors', icon: FiUsers },
    { name: 'Financial Analytics', href: '/analytics', icon: FiBarChart2 },
    { name: 'Documents', href: '/documents', icon: FiFileText },
    { name: 'Risk Management', href: '/risk', icon: FiShield },
    { name: 'Global Markets', href: '/markets', icon: FiGlobe },
    { name: 'Performance', href: '/performance', icon: FiTrendingUp },
    { name: 'Settings', href: '/settings', icon: FiSettings },
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

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm rounded-md ${
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