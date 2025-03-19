"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiDollarSign, 
  FiBarChart2, 
  FiUsers, 
  FiSettings,
  FiCreditCard,
  FiMenu,
  FiX
} from 'react-icons/fi';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Liquidity Pools', href: '/liquidity-pools', icon: FiDollarSign },
  { name: 'Analytics', href: '/analytics', icon: FiBarChart2 },
  { name: 'Investors', href: '/investors', icon: FiUsers },
  { name: 'Transactions', href: '/transactions', icon: FiCreditCard },
  { name: 'Settings', href: '/settings', icon: FiSettings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button 
        type="button"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-primary/10 text-primary"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar for mobile */}
      <div className={`
        fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="relative flex flex-col h-full max-w-xs w-full bg-card shadow-xl overflow-y-auto">
          <div className="flex items-center justify-center h-20 border-b border-muted">
            <h1 className="text-2xl font-bold text-primary">SilkRose</h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-muted'}
                  `}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-muted">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@silkrose.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-64 bg-card shadow-sm">
        <div className="flex items-center justify-center h-20 border-b border-muted">
          <h1 className="text-2xl font-bold text-primary">SilkRose</h1>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                    ${isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-muted'}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-muted">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@silkrose.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 