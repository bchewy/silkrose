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
  FiAlertCircle
} from 'react-icons/fi';

export default function Header() {
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
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-silk-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Help */}
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiHelpCircle className="h-5 w-5" />
          </button>

          {/* Messages */}
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 relative">
            <FiMessageSquare className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FiBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
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
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          {/* User profile */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-silk-600 to-rose-500 flex items-center justify-center text-white font-medium text-sm">
              JD
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