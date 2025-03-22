'use client';

import { useState } from 'react';
import DashboardLayout from '../../dashboard-layout';
import { 
  FiDollarSign, 
  FiUsers, 
  FiTrendingUp, 
  FiGlobe, 
  FiCalendar, 
  FiPhoneCall,
  FiMail,
  FiStar,
  FiSearch,
  FiFilter,
  FiPlus
} from 'react-icons/fi';
import Link from 'next/link';

export default function PEFirmsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('All');
  
  // Mock PE Firms data
  const peFirms = [
    {
      id: 1,
      name: 'Blackstone Trade Finance',
      focusAreas: ['Supply Chain Finance', 'Receivables Financing'],
      minDealSize: '$5M',
      maxDealSize: '$100M',
      region: 'Global',
      headquarters: 'New York, USA',
      investmentManager: 'Sarah Johnson',
      contactEmail: 'sarah.j@blackstonetf.com',
      contactPhone: '+1 (212) 555-7890',
      lastContact: 'May 12, 2023',
      interestLevel: 5,
    },
    {
      id: 2,
      name: 'East Capital Partners',
      focusAreas: ['Commodity Finance', 'Export Finance'],
      minDealSize: '$10M',
      maxDealSize: '$75M',
      region: 'APAC',
      headquarters: 'Singapore',
      investmentManager: 'David Chen',
      contactEmail: 'd.chen@eastcapital.sg',
      contactPhone: '+65 6123 4567',
      lastContact: 'May 8, 2023',
      interestLevel: 4,
    },
    {
      id: 3,
      name: 'Trade Ventures UK',
      focusAreas: ['Invoice Financing', 'Trade Credit'],
      minDealSize: '$3M',
      maxDealSize: '$50M',
      region: 'Europe',
      headquarters: 'London, UK',
      investmentManager: 'Emma Thompson',
      contactEmail: 'e.thompson@tradeventures.co.uk',
      contactPhone: '+44 20 7123 4567',
      lastContact: 'May 5, 2023',
      interestLevel: 3,
    },
    {
      id: 4,
      name: 'Global Trade Investments',
      focusAreas: ['Working Capital', 'Supply Chain Finance'],
      minDealSize: '$15M',
      maxDealSize: '$200M',
      region: 'Global',
      headquarters: 'Zurich, Switzerland',
      investmentManager: 'Hans Mueller',
      contactEmail: 'h.mueller@gti.com',
      contactPhone: '+41 44 123 4567',
      lastContact: 'May 1, 2023',
      interestLevel: 5,
    },
    {
      id: 5,
      name: 'MENA Trade Partners',
      focusAreas: ['Export Finance', 'Project Finance'],
      minDealSize: '$10M',
      maxDealSize: '$80M',
      region: 'Middle East',
      headquarters: 'Dubai, UAE',
      investmentManager: 'Fatima Al-Mansour',
      contactEmail: 'f.almansour@menatrade.ae',
      contactPhone: '+971 4 123 4567',
      lastContact: 'April 28, 2023',
      interestLevel: 4,
    },
    {
      id: 6,
      name: 'Americas Finance Group',
      focusAreas: ['Receivables', 'Inventory Finance'],
      minDealSize: '$5M',
      maxDealSize: '$60M',
      region: 'Americas',
      headquarters: 'Toronto, Canada',
      investmentManager: 'Michael Patel',
      contactEmail: 'm.patel@americasfg.ca',
      contactPhone: '+1 (416) 555-1234',
      lastContact: 'April 25, 2023',
      interestLevel: 3,
    },
  ];

  // Filter and search logic
  const filteredFirms = peFirms.filter(firm => {
    const matchesSearch = firm.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          firm.focusAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterRegion === 'All' || firm.region === filterRegion;
    return matchesSearch && matchesFilter;
  });

  // Unique regions for filter
  const regions = ['All', ...new Set(peFirms.map(firm => firm.region))];

  // Interest level stars renderer
  const renderStars = (level: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`h-4 w-4 ${i < level ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Private Equity Funding Sources</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track and manage relationships with PE firms interested in trade finance
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add New PE Firm
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total PE Firms</p>
                <h3 className="text-2xl font-semibold mt-1">24</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+3 this quarter</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiUsers className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Available Capital</p>
                <h3 className="text-2xl font-semibold mt-1">$850M</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+$120M YTD</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiDollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Deal Size</p>
                <h3 className="text-2xl font-semibold mt-1">$32.7M</h3>
                <div className="flex items-center mt-1 text-red-600">
                  <FiTrendingUp className="h-4 w-4 mr-1 transform rotate-180" />
                  <span className="text-sm">-$1.2M</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiDollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Discussions</p>
                <h3 className="text-2xl font-semibold mt-1">8</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2 this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiPhoneCall className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or focus area..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent appearance-none"
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* PE Firms Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Firm</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Focus Areas</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deal Size</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Region</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interest</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredFirms.map(firm => (
                <tr key={firm.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="text-sm font-medium">{firm.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{firm.headquarters}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {firm.focusAreas.map((area, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {area}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{firm.minDealSize} - {firm.maxDealSize}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{firm.region}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiCalendar className="h-4 w-4 mr-1" />
                      <span>{firm.lastContact}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {renderStars(firm.interestLevel)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <button className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                        <FiPhoneCall className="h-4 w-4" />
                      </button>
                      <button className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                        <FiMail className="h-4 w-4" />
                      </button>
                      <Link href={`/funding/pe-firms/${firm.id}`} className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
} 