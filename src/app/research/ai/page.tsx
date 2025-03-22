'use client';

import { useState } from 'react';
import DashboardLayout from '../../dashboard-layout';
import { FiClock, FiDownload, FiBookOpen, FiFilter, FiSearch, FiUsers, FiTrendingUp, FiGlobe, FiShield, FiFileText } from 'react-icons/fi';
import Link from 'next/link';

export default function AIResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Mock research data
  const researchItems = [
    {
      id: 1,
      title: 'Trade Finance Blockchain Applications',
      summary: 'AI-generated analysis of current blockchain applications in trade finance and their adoption rates.',
      category: 'Technology',
      date: 'May 15, 2023',
      readTime: '8 min read',
      icon: FiGlobe,
    },
    {
      id: 2,
      title: 'Family Offices Investment Trends',
      summary: 'Analysis of how family offices are changing their investment strategies in trade finance.',
      category: 'Investors',
      date: 'May 12, 2023',
      readTime: '12 min read',
      icon: FiUsers,
    },
    {
      id: 3,
      title: 'Regulatory Changes in APAC Region',
      summary: 'Summary of recent regulatory changes affecting trade finance in the Asia-Pacific region.',
      category: 'Regulatory',
      date: 'May 10, 2023',
      readTime: '10 min read',
      icon: FiShield,
    },
    {
      id: 4,
      title: 'Alternative Funding Models Growth',
      summary: 'Statistical analysis of the growth of alternative funding models compared to traditional banking.',
      category: 'Trends',
      date: 'May 8, 2023',
      readTime: '15 min read',
      icon: FiTrendingUp,
    },
    {
      id: 5,
      title: 'Digitalization ROI in Trade Finance',
      summary: 'Research on the return on investment for digital transformation in trade finance operations.',
      category: 'Technology',
      date: 'May 5, 2023',
      readTime: '9 min read',
      icon: FiGlobe,
    },
    {
      id: 6,
      title: 'Private Equity in Trade Finance',
      summary: 'Overview of private equity firms entering the trade finance market and their strategies.',
      category: 'Investors',
      date: 'May 3, 2023',
      readTime: '11 min read',
      icon: FiUsers,
    },
  ];

  // Filter and search logic
  const filteredResearch = researchItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  // Unique categories for filter
  const categories = ['All', ...new Set(researchItems.map(item => item.category))];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Research & Insights</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                AI-generated research and market insights to inform your trade finance strategy
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="btn btn-primary">
                Generate New Research
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* How Our AI Research Works */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-silk-100 dark:bg-silk-900/30 inline-flex items-center justify-center mr-2">
                  <FiFileText className="h-4 w-4 text-silk-600 dark:text-silk-400" />
                </span>
                How Our AI Research Works
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0">
                    <FiSearch className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">1. Data Collection</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Our AI scans thousands of sources daily, including news, research papers, and market data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4 flex-shrink-0">
                    <FiTrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">2. Pattern Analysis</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Advanced algorithms identify trends, correlations, and emerging opportunities relevant to trade finance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0">
                    <FiFileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">3. Report Generation</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Comprehensive reports are generated with actionable insights tailored to SilkRose&apos;s business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Research Emerging Trends */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-silk-100 dark:bg-silk-900/30 inline-flex items-center justify-center mr-2">
                  <FiTrendingUp className="h-4 w-4 text-silk-600 dark:text-silk-400" />
                </span>
                Research Emerging Trends
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay ahead of market developments with our automated research tools that deliver timely insights on emerging trends in trade finance.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-medium text-silk-600 dark:text-silk-400 mb-3">Automated Research Reports</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Weekly summaries of key market movements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Monthly in-depth analysis reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Customizable report delivery schedule</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>AI-curated executive summaries</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">How to Get Started</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Configure your automated research profile to receive tailored insights directly to your dashboard.
                </p>
                <button className="btn btn-primary btn-sm">
                  Configure Research Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-silk-100 dark:bg-silk-900/30 inline-flex items-center justify-center mr-2">
              <FiUsers className="h-4 w-4 text-silk-600 dark:text-silk-400" />
            </span>
            Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-silk-600 dark:text-silk-400 mb-2">Digitization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Digital transformation trends in trade finance workflows and operations
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-silk-600 dark:text-silk-400 mb-2">Blockchain Technology</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Distributed ledger applications for trade finance, tokenization, and smart contracts
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-silk-600 dark:text-silk-400 mb-2">Regulatory Changes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Evolving compliance requirements across global markets and jurisdictions
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-silk-600 dark:text-silk-400 mb-2">Market Dynamics</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Shifts in funding sources, investor preferences, and competitive landscape
              </p>
            </div>
          </div>
        </div>

        {/* Available Research Reports Section */}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="w-8 h-8 rounded-full bg-silk-100 dark:bg-silk-900/30 inline-flex items-center justify-center mr-2">
                <FiBookOpen className="h-4 w-4 text-silk-600 dark:text-silk-400" />
              </span>
              Available Research Reports
            </h2>
            <div className="mt-4 md:mt-0">
              <button className="btn btn-outline">
                View All Reports
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search research..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent appearance-none"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Research Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResearch.map(item => (
              <div key={item.id} className="card p-5 group hover:border-silk-500 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-full bg-silk-100 dark:bg-gray-800 flex items-center justify-center text-silk-600 dark:text-silk-400 mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium group-hover:text-silk-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-3">{item.summary}</p>
                <div className="flex items-center mt-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{item.category}</span>
                  <div className="flex items-center ml-3">
                    <FiClock className="h-3 w-3 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center ml-3">
                    <FiBookOpen className="h-3 w-3 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                  <Link href={`/research/ai/${item.id}`} className="text-silk-600 hover:text-silk-700 text-sm font-medium">
                    Read Full Report
                  </Link>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-silk-600 dark:hover:text-silk-400">
                    <FiDownload className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 