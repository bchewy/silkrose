'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { FiPlus, FiFilter, FiDownload, FiSearch, FiCheck, FiX, FiEye, FiMessageSquare } from 'react-icons/fi';

const investorTypes = ['All Types', 'Private Equity', 'Family Office', 'Institutional', 'Corporate', 'Individual'];
const investmentSizes = ['All Sizes', '$100K-$500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M+'];
const focusAreas = ['All Areas', 'Import/Export', 'Manufacturing', 'Healthcare', 'Agriculture', 'Technology', 'Consumer Goods'];

export default function InvestorsPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedSize, setSelectedSize] = useState('All Sizes');
  const [selectedFocus, setSelectedFocus] = useState('All Areas');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Investor Matching</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Connect trade opportunities with suitable investors</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-outline flex items-center">
              <FiFilter className="mr-2 h-4 w-4" />
              Advanced Filters
            </button>
            <button className="btn-outline flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add Investor
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search investors..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div>
              <select 
                className="input" 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {investorTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {investmentSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedFocus}
                onChange={(e) => setSelectedFocus(e.target.value)}
              >
                {focusAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Investors Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Investor</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Investment Range</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Focus Areas</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Preferred Terms</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Horizon Capital',
                    type: 'Private Equity',
                    range: '$1M-$5M',
                    focus: ['Import/Export', 'Manufacturing'],
                    terms: '7-9% APR, 60-120 days',
                    status: 'Active',
                    match: 'High'
                  },
                  {
                    name: 'Westfield Family Office',
                    type: 'Family Office',
                    range: '$500K-$2M',
                    focus: ['Healthcare', 'Consumer Goods'],
                    terms: '6-8% APR, 90-180 days',
                    status: 'Active',
                    match: 'Medium'
                  },
                  {
                    name: 'Global Trade Partners',
                    type: 'Corporate',
                    range: '$2M-$10M',
                    focus: ['Import/Export', 'Agriculture'],
                    terms: '8-10% APR, 30-90 days',
                    status: 'Active',
                    match: 'High'
                  },
                  {
                    name: 'Eastwood Investments',
                    type: 'Institutional',
                    range: '$5M-$20M',
                    focus: ['Technology', 'Manufacturing'],
                    terms: '7-8% APR, 60-120 days',
                    status: 'Onboarding',
                    match: 'Medium'
                  },
                  {
                    name: 'Summit Partners',
                    type: 'Private Equity',
                    range: '$1M-$8M',
                    focus: ['Healthcare', 'Technology'],
                    terms: '8-11% APR, 45-90 days',
                    status: 'Active',
                    match: 'Low'
                  },
                ].map((investor, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-silk-100 flex items-center justify-center text-silk-600 font-medium">
                          {investor.name.split(' ')[0][0]}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{investor.name}</p>
                          <p className="text-xs text-gray-500">Last active: 2 days ago</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{investor.type}</td>
                    <td className="py-3 px-4">{investor.range}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {investor.focus.map((area, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">{investor.terms}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          investor.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {investor.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-500 hover:text-silk-600" title="View Profile">
                          <FiEye size={18} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-silk-600" title="Message">
                          <FiMessageSquare size={18} />
                        </button>
                        <button className={`p-1 ${
                          investor.match === 'High' 
                            ? 'text-green-500 hover:text-green-600' 
                            : investor.match === 'Medium'
                              ? 'text-amber-500 hover:text-amber-600'
                              : 'text-gray-500 hover:text-gray-600'
                        }`} title={`${investor.match} Match`}>
                          {investor.match === 'High' ? <FiCheck size={18} /> : <FiX size={18} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing 5 of 28 investors
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 bg-silk-600 text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Matches */}
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Recommended Matches for Current Opportunities</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Medical Equipment Import - $2.4M</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">120 days, 8.5% APR</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  3 Matches
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="border border-gray-100 dark:border-gray-800 rounded p-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Horizon Capital</p>
                    <span className="text-green-500 text-xs">98% Match</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Private Equity, $1M-$5M</p>
                  <div className="mt-2 flex justify-end">
                    <button className="text-xs text-silk-600 hover:text-silk-700">Contact</button>
                  </div>
                </div>
                
                <div className="border border-gray-100 dark:border-gray-800 rounded p-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Westfield Family Office</p>
                    <span className="text-amber-500 text-xs">85% Match</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Family Office, $500K-$2M</p>
                  <div className="mt-2 flex justify-end">
                    <button className="text-xs text-silk-600 hover:text-silk-700">Contact</button>
                  </div>
                </div>
                
                <div className="border border-gray-100 dark:border-gray-800 rounded p-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Global Trade Partners</p>
                    <span className="text-amber-500 text-xs">82% Match</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Corporate, $2M-$10M</p>
                  <div className="mt-2 flex justify-end">
                    <button className="text-xs text-silk-600 hover:text-silk-700">Contact</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Agricultural Commodities - $3.8M</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">90 days, 7.2% APR</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  2 Matches
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="border border-gray-100 dark:border-gray-800 rounded p-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Global Trade Partners</p>
                    <span className="text-green-500 text-xs">95% Match</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Corporate, $2M-$10M</p>
                  <div className="mt-2 flex justify-end">
                    <button className="text-xs text-silk-600 hover:text-silk-700">Contact</button>
                  </div>
                </div>
                
                <div className="border border-gray-100 dark:border-gray-800 rounded p-3 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Eastwood Investments</p>
                    <span className="text-amber-500 text-xs">78% Match</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Institutional, $5M-$20M</p>
                  <div className="mt-2 flex justify-end">
                    <button className="text-xs text-silk-600 hover:text-silk-700">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 