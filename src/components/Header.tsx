"use client";

import { useState } from 'react';
import { FiBell, FiUser, FiChevronDown, FiLogOut, FiSettings } from 'react-icons/fi';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, message: 'New investor request from John Doe', time: '5 minutes ago' },
    { id: 2, message: 'Liquidity pool ETH-USDT reached 90% capacity', time: '1 hour ago' },
    { id: 3, message: 'Monthly report is ready for review', time: '3 hours ago' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-card shadow-sm h-16 flex items-center px-6 md:pl-64">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground md:hidden">SilkRose</h1>
        
        <div className="flex-1 md:ml-10">
          <h2 className="text-lg font-medium text-foreground">Welcome to SilkRose Admin</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              type="button"
              className="relative p-2 rounded-full text-foreground hover:bg-muted"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsProfileOpen(false);
              }}
            >
              <FiBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-card rounded-md shadow-lg py-1 z-50 border border-muted">
                <div className="px-4 py-2 border-b border-muted">
                  <h3 className="text-sm font-medium">Notifications</h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-muted">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-muted">
                  <a href="#" className="text-xs text-primary hover:underline">View all notifications</a>
                </div>
              </div>
            )}
          </div>
          
          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-primary"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsNotificationsOpen(false);
              }}
            >
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                A
              </div>
              <span className="hidden md:block">Admin</span>
              <FiChevronDown className={`h-4 w-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 z-50 border border-muted">
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                  <div className="flex items-center">
                    <FiUser className="mr-3 h-4 w-4" />
                    Profile
                  </div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                  <div className="flex items-center">
                    <FiSettings className="mr-3 h-4 w-4" />
                    Settings
                  </div>
                </a>
                <div className="border-t border-muted my-1"></div>
                <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">
                  <div className="flex items-center">
                    <FiLogOut className="mr-3 h-4 w-4" />
                    Sign out
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 