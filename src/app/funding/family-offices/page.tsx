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
  FiPlus,
  FiHome,
  FiBriefcase
} from 'react-icons/fi';
import Link from 'next/link';

export default function FamilyOfficesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('All');
  
  // Mock Family Offices data
  const familyOffices = [
    {
      id: 1,
      name: 'Chang Family Office',
      focusAreas: ['Supply Chain Finance', 'Trade Credit'],
      minDealSize: '$2M',
      maxDealSize: '$50M',
      region: 'APAC',
      headquarters: 'Singapore',
      investmentManager: 'David Chang',
      contactEmail: 'd.chang@changfo.sg',
      contactPhone: '+65 8123 4567',
      lastContact: 'May 15, 2023',
      interestLevel: 5,
      industries: ['Electronics', 'Consumer Goods'],
      aum: '$1.2B',
      generation: '2nd'
    },
    {
      id: 2,
      name: 'Windsor Capital',
      focusAreas: ['Export Finance', 'Inventory Financing'],
      minDealSize: '$5M',
      maxDealSize: '$60M',
      region: 'Europe',
      headquarters: 'London, UK',
      investmentManager: 'Elizabeth Windsor',
      contactEmail: 'e.windsor@windsorcapital.co.uk',
      contactPhone: '+44 20 8123 4567',
      lastContact: 'May 12, 2023',
      interestLevel: 4,
      industries: ['Luxury Goods', 'Agriculture'],
      aum: '$1.8B',
      generation: '3rd'
    },
    {
      id: 3,
      name: 'Rossi Investments',
      focusAreas: ['Working Capital', 'Invoice Financing'],
      minDealSize: '$1M',
      maxDealSize: '$30M',
      region: 'Europe',
      headquarters: 'Milan, Italy',
      investmentManager: 'Marco Rossi',
      contactEmail: 'm.rossi@rossiinv.it',
      contactPhone: '+39 02 1234 5678',
      lastContact: 'May 8, 2023',
      interestLevel: 3,
      industries: ['Fashion', 'Food & Beverage'],
      aum: '$850M',
      generation: '1st'
    },
    {
      id: 4,
      name: 'Khan Global Family Office',
      focusAreas: ['Supply Chain Finance', 'Project Finance'],
      minDealSize: '$8M',
      maxDealSize: '$100M',
      region: 'Middle East',
      headquarters: 'Dubai, UAE',
      investmentManager: 'Anwar Khan',
      contactEmail: 'a.khan@kgfo.ae',
      contactPhone: '+971 4 567 8901',
      lastContact: 'May 5, 2023',
      interestLevel: 5,
      industries: ['Infrastructure', 'Energy', 'Shipping'],
      aum: '$2.5B',
      generation: '2nd'
    },
    {
      id: 5,
      name: 'Patel Family Holdings',
      focusAreas: ['Trade Credit', 'Working Capital'],
      minDealSize: '$3M',
      maxDealSize: '$45M',
      region: 'APAC',
      headquarters: 'Mumbai, India',
      investmentManager: 'Raj Patel',
      contactEmail: 'r.patel@patelfamily.in',
      contactPhone: '+91 22 2345 6789',
      lastContact: 'April 28, 2023',
      interestLevel: 4,
      industries: ['Pharmaceuticals', 'Textiles', 'Agriculture'],
      aum: '$1.1B',
      generation: '3rd'
    },
    {
      id: 6,
      name: 'Santos Investment Group',
      focusAreas: ['Export Finance', 'Receivables'],
      minDealSize: '$4M',
      maxDealSize: '$50M',
      region: 'Americas',
      headquarters: 'São Paulo, Brazil',
      investmentManager: 'Isabella Santos',
      contactEmail: 'i.santos@santosgroup.br',
      contactPhone: '+55 11 3456 7890',
      lastContact: 'April 25, 2023',
      interestLevel: 3,
      industries: ['Agriculture', 'Mining', 'Manufacturing'],
      aum: '$1.3B',
      generation: '2nd'
    },
  ];

  // Filter and search logic
  const filteredOffices = familyOffices.filter(office => {
    const matchesSearch = office.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          office.focusAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterRegion === 'All' || office.region === filterRegion;
    return matchesSearch && matchesFilter;
  });

  // Unique regions for filter
  const regions = ['All', ...new Set(familyOffices.map(office => office.region))];

  // Interest level stars renderer
  const renderStars = (level) => {
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
            <h1 className="text-2xl font-bold">Family Offices</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Build relationships with family offices interested in trade finance investments
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add New Family Office
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Family Offices</p>
                <h3 className="text-2xl font-semibold mt-1">18</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+5 this year</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiHome className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Assets Under Management</p>
                <h3 className="text-2xl font-semibold mt-1">$12.8B</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+$1.2B YTD</span>
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
                <h3 className="text-2xl font-semibold mt-1">$22.5M</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+$3.2M</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiBriefcase className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Discussions</p>
                <h3 className="text-2xl font-semibold mt-1">7</h3>
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

        {/* Family Offices Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Family Office</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Focus Areas</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">AUM</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deal Size</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Generation</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Contact</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interest</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredOffices.map(office => (
                <tr key={office.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="text-sm font-medium">{office.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{office.headquarters}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {office.focusAreas.map((area, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {area}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{office.aum}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{office.minDealSize} - {office.maxDealSize}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{office.generation} Generation</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiCalendar className="h-4 w-4 mr-1" />
                      <span>{office.lastContact}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {renderStars(office.interestLevel)}
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
                      <Link href={`/funding/family-offices/${office.id}`} className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Industry Focus */}
        <div className="card p-6">
          <h3 className="text-lg font-medium mb-4">Industry Focus of Family Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <FiGlobe className="h-4 w-4" />
                </div>
                <h4 className="font-medium">Agriculture</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">4 Family Offices</span>
                <span className="text-sm font-medium">22%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                  <FiGlobe className="h-4 w-4" />
                </div>
                <h4 className="font-medium">Manufacturing</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">5 Family Offices</span>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                  <FiGlobe className="h-4 w-4" />
                </div>
                <h4 className="font-medium">Consumer Goods</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">6 Family Offices</span>
                <span className="text-sm font-medium">33%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                  <FiGlobe className="h-4 w-4" />
                </div>
                <h4 className="font-medium">Technology</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">3 Family Offices</span>
                <span className="text-sm font-medium">17%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-2 bg-amber-500 rounded-full" style={{ width: '17%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 