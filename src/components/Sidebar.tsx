'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  FiFolder,
  FiLogOut,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import SilkRoseLogo from './SilkRoseLogo';

// Define types for navigation items
interface NavItem {
  name: string;
  href: string;
  icon: IconType;
  disabled?: boolean;
  tooltip?: string;
}

interface NavSection {
  title: string;
  icon: IconType;
  items: NavItem[];
  disabled?: boolean;
  tooltip?: string;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Track which sections are expanded (initially expand the current section)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Reorganized navigation with sections
  const navigationSections: NavSection[] = [
    {
      title: 'Overview',
      icon: FiGrid,
      items: [
        { name: 'Dashboard', href: '/', icon: FiHome } as NavItem,
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
      title: 'Funding Sources',
      icon: FiUsers,
      items: [
        { name: 'PE Firms', href: '/funding/pe-firms', icon: FiBarChart2 },
        { name: 'Family Offices', href: '/funding/family-offices', icon: FiUsers },
        { name: 'Crowdfunding', href: '/funding/crowdfunding', icon: FiGlobe },
      ]
    },
    {
      title: 'Research & Insights',
      icon: FiFileText,
      items: [
        { name: 'AI Research', href: '/research/ai', icon: FiTarget },
        { name: 'Market Trends', href: '#', icon: FiTrendingUp, disabled: true, tooltip: 'Coming Soon' },
        { name: 'Regulatory Updates', href: '#', icon: FiShield, disabled: true, tooltip: 'Coming Soon' },
      ]
    },
    {
      title: 'Marketing',
      icon: FiTrendingUp,
      disabled: true,
      tooltip: 'Coming Soon',
      items: [
        { name: 'Lead Generation', href: '#', icon: FiTarget, disabled: true },
        { name: 'Content Management', href: '#', icon: FiFileText, disabled: true },
        { name: 'SEO Performance', href: '#', icon: FiBarChart2, disabled: true },
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

  // Initialize the expanded sections based on the current path
  useEffect(() => {
    const initialExpandedSections: Record<string, boolean> = {};
    
    // Find which section contains the current path and expand it
    navigationSections.forEach(section => {
      const isCurrentSection = section.items.some(item => pathname === item.href);
      if (isCurrentSection) {
        initialExpandedSections[section.title] = true;
      }
    });
    
    setExpandedSections(initialExpandedSections);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
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
          <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <SilkRoseLogo size={32} className="animate-spin-slow" />
              <div className="ml-3">
                <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-silk-600 to-rose-500">
                  SilkierTrade
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Backoffice</p>
              </div>
            </div>
          </div>

          {/* Navigation with Sections - Custom Scrollbar */}
          <nav className="flex-1 px-2 py-2 overflow-y-auto sidebar-scrollbar">
            {navigationSections.map((section, idx) => {
              const isExpanded = expandedSections[section.title];
              
              return (
                <div key={section.title} className={idx > 0 ? 'mt-2' : ''}>
                  <button 
                    onClick={() => !section.disabled && toggleSection(section.title)}
                    className={`w-full px-2 py-1.5 text-xs font-semibold ${
                      section.disabled 
                        ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    } uppercase tracking-wider flex items-center justify-between group relative rounded-md`}
                  >
                    <div className="flex items-center">
                      <section.icon className="h-3.5 w-3.5 mr-1.5 opacity-75" />
                      <span>{section.title}</span>
                    </div>
                    
                    {!section.disabled && (
                      isExpanded ? 
                        <FiChevronDown className="h-3.5 w-3.5" /> : 
                        <FiChevronRight className="h-3.5 w-3.5" />
                    )}
                    
                    {section.tooltip && (
                      <span className="absolute left-0 -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap z-10">
                        {section.tooltip}
                      </span>
                    )}
                  </button>
                  
                  {isExpanded && (
                    <ul className="mt-1 space-y-0.5 ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          {item.disabled ? (
                            <div
                              className="flex items-center px-3 py-1.5 text-sm rounded-md text-gray-400 dark:text-gray-500 cursor-not-allowed group relative"
                            >
                              <item.icon className="h-4 w-4 mr-2" />
                              {item.name}
                              {item.tooltip && (
                                <span className="absolute left-0 -top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap z-10">
                                  {item.tooltip}
                                </span>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={`flex items-center px-3 py-1.5 text-sm rounded-md ${
                                pathname === item.href
                                  ? 'bg-silk-50 text-silk-700 dark:bg-gray-800 dark:text-silk-400'
                                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                              }`}
                            >
                              <item.icon className="h-4 w-4 mr-2" />
                              {item.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Sign out button */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => router.push('/login')}
              className="w-full flex items-center justify-center px-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              <FiLogOut className="h-4 w-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .sidebar-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.2);
          border-radius: 20px;
        }
        
        .sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.5);
        }
        
        /* For Firefox */
        .sidebar-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.2) transparent;
        }
        
        /* Hide scrollbar when not hovering */
        .sidebar-scrollbar {
          overflow-y: auto;
        }
        
        /* Show scrollbar on hover */
        .sidebar-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
        }
      `}</style>

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