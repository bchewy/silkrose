'use client';

import { useState, useEffect } from 'react';
import { 
  FiMoon, 
  FiSun, 
  FiBell, 
  FiSearch, 
  FiHelpCircle, 
  FiMessageSquare,
  FiDollarSign,
  FiClock,
  FiAlertCircle,
  FiLogOut
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  // Check for saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Sample notifications
  const notifications = [
    {
      id: 1,
      title: 'Transaction Approval Required',
      message: 'Electronics Import from Taiwan needs your approval',
      time: '10 minutes ago',
      type: 'urgent',
      icon: <FiClock className="h-5 w-5" />,
    },
    {
      id: 2,
      title: 'New Investor Match',
      message: 'Horizon Capital matched with Agricultural Commodities Export',
      time: '1 hour ago',
      type: 'info',
      icon: <FiDollarSign className="h-5 w-5" />,
    },
    {
      id: 3,
      title: 'Risk Alert',
      message: 'Increased volatility detected in EUR/USD exchange rate',
      time: '3 hours ago',
      type: 'warning',
      icon: <FiAlertCircle className="h-5 w-5" />,
    },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left side - Search */}
        <div className="relative w-72">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-silk-500 focus:border-transparent shadow-sm transition-all duration-200 group-hover:shadow-md"
            />
            <div className="absolute left-3 top-2.5 flex items-center justify-center bg-gradient-to-r from-silk-600 to-rose-500 text-white p-1 rounded-lg transition-all duration-200 group-hover:scale-110">
              <FiSearch className="h-4 w-4" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-silk-600/20 to-rose-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="absolute right-3 top-3 text-xs text-gray-400 dark:text-gray-500 hidden md:flex space-x-1 items-center">
            <span className="opacity-75">/</span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Quick links */}
          <div className="hidden md:flex items-center mr-2">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
              <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-gray-700 shadow-sm text-silk-700 dark:text-silk-400">Dashboard</button>
              <button className="px-3 py-1.5 text-xs font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors">Reports</button>
              <button className="px-3 py-1.5 text-xs font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors">Analytics</button>
            </div>
          </div>
          
          {/* Help */}
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <FiHelpCircle className="h-5 w-5" />
          </button>

          {/* Messages */}
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 relative transition-all hover:text-silk-600 dark:hover:text-silk-400">
            <FiMessageSquare className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 relative transition-all hover:text-silk-600 dark:hover:text-silk-400"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FiBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-gradient-to-r from-silk-600 to-rose-500 text-white text-xs flex items-center justify-center transform transition-transform duration-200 hover:scale-110">
                3
              </span>
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                <div className="p-3 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <h3 className="font-medium">Notifications</h3>
                  <button className="text-xs text-silk-600 hover:text-silk-700 dark:text-silk-400 dark:hover:text-silk-300">
                    Mark all as read
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className="p-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <div className="flex">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                          notification.type === 'urgent' 
                            ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                            : notification.type === 'warning'
                              ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                              : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {notification.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-sm text-silk-600 hover:text-silk-700 dark:text-silk-400 dark:hover:text-silk-300">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:text-silk-600 dark:hover:text-silk-400"
          >
            {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          {/* Sign out button */}
          <button
            onClick={() => router.push('/login')}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center transition-all hover:text-silk-600 dark:hover:text-silk-400"
            title="Sign Out"
          >
            <FiLogOut className="h-5 w-5" />
          </button>

          {/* User profile */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-silk-600 to-rose-500 flex items-center justify-center text-white font-medium text-sm ring-2 ring-white dark:ring-gray-900 transition-all duration-200 group-hover:shadow-glow">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
            </div>
            <div className="ml-2 hidden md:block">
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Finance Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 