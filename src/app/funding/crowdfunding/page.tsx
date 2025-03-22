'use client';

import { useState } from 'react';
import DashboardLayout from '../../dashboard-layout';
import { 
  FiDollarSign, 
  FiUsers, 
  FiTrendingUp, 
  FiClock, 
  FiCalendar, 
  FiExternalLink,
  FiFlag,
  FiSearch,
  FiFilter,
  FiPlus,
  FiPercent,
  FiActivity,
  FiGlobe,
  FiCheck,
  FiBarChart2,
  FiPieChart
} from 'react-icons/fi';
import Link from 'next/link';
import { Doughnut, Bar } from 'react-chartjs-2';

export default function CrowdfundingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('campaigns');
  
  // Mock crowdfunding campaigns data
  const campaigns = [
    {
      id: 1,
      title: 'Electronics Supply Chain Financing',
      platform: 'InvestCrowd',
      targetAmount: '$1.5M',
      raisedAmount: '$1.2M',
      investors: 87,
      status: 'Active',
      progress: 80,
      startDate: 'May 01, 2023',
      endDate: 'Jun 15, 2023',
      interestRate: '8.5%',
      term: '12 months',
      riskRating: 'Low',
      url: 'https://investcrowd.com/campaigns/electronics-supply',
    },
    {
      id: 2,
      title: 'Medical Equipment Import Financing',
      platform: 'FundingCircle',
      targetAmount: '$750K',
      raisedAmount: '$720K',
      investors: 64,
      status: 'Active',
      progress: 96,
      startDate: 'May 05, 2023',
      endDate: 'Jun 05, 2023',
      interestRate: '9.0%',
      term: '9 months',
      riskRating: 'Medium',
      url: 'https://fundingcircle.com/campaigns/medical-import',
    },
    {
      id: 3,
      title: 'Agricultural Commodities Export',
      platform: 'GlobalTradeFunding',
      targetAmount: '$2M',
      raisedAmount: '$2M',
      investors: 135,
      status: 'Funded',
      progress: 100,
      startDate: 'Apr 10, 2023',
      endDate: 'May 10, 2023',
      interestRate: '7.8%',
      term: '18 months',
      riskRating: 'Low',
      url: 'https://globaltradefunding.com/campaigns/agri-export',
    },
    {
      id: 4,
      title: 'Textile Manufacturing Working Capital',
      platform: 'InvestCrowd',
      targetAmount: '$1.2M',
      raisedAmount: '$850K',
      investors: 72,
      status: 'Active',
      progress: 71,
      startDate: 'May 12, 2023',
      endDate: 'Jun 20, 2023',
      interestRate: '8.2%',
      term: '12 months',
      riskRating: 'Medium',
      url: 'https://investcrowd.com/campaigns/textile-working-capital',
    },
    {
      id: 5,
      title: 'Pharmaceutical Supply Chain',
      platform: 'FundingCircle',
      targetAmount: '$3M',
      raisedAmount: '$2.9M',
      investors: 189,
      status: 'Funded',
      progress: 97,
      startDate: 'Apr 05, 2023',
      endDate: 'May 15, 2023',
      interestRate: '7.5%',
      term: '24 months',
      riskRating: 'Low',
      url: 'https://fundingcircle.com/campaigns/pharma-supply',
    },
    {
      id: 6,
      title: 'Renewable Energy Equipment Import',
      platform: 'GlobalTradeFunding',
      targetAmount: '$5M',
      raisedAmount: '$1.8M',
      investors: 94,
      status: 'Active',
      progress: 36,
      startDate: 'May 20, 2023',
      endDate: 'Jul 20, 2023',
      interestRate: '9.5%',
      term: '36 months',
      riskRating: 'High',
      url: 'https://globaltradefunding.com/campaigns/renewable-energy',
    },
  ];

  // Platform distribution data
  const platformDistributionData = {
    labels: ['InvestCrowd', 'FundingCircle', 'GlobalTradeFunding', 'Others'],
    datasets: [
      {
        data: [45, 30, 20, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(107, 114, 128, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Performance by industry data
  const performanceByIndustryData = {
    labels: ['Electronics', 'Medical', 'Agriculture', 'Textiles', 'Pharmaceuticals', 'Energy'],
    datasets: [
      {
        label: 'Average Funding Rate (%)',
        data: [82, 89, 95, 71, 88, 62],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ],
  };

  // Filter and search logic
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          campaign.platform.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Unique statuses for filter
  const statuses = ['All', ...new Set(campaigns.map(campaign => campaign.status))];

  // Calculate total stats
  const totalRaised = campaigns.reduce((sum, campaign) => {
    const raised = parseFloat(campaign.raisedAmount.replace(/[^0-9.-]+/g, ''));
    return sum + raised;
  }, 0);
  
  const totalInvestors = campaigns.reduce((sum, campaign) => sum + campaign.investors, 0);
  
  const activeCampaigns = campaigns.filter(campaign => campaign.status === 'Active').length;

  const avgFundingRate = Math.round(
    campaigns.reduce((sum, campaign) => sum + campaign.progress, 0) / campaigns.length
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Crowdfunding Campaigns</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Manage and track trade finance crowdfunding campaigns across platforms
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Create New Campaign
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Raised</p>
                <h3 className="text-2xl font-semibold mt-1">${totalRaised.toFixed(1)}M</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+$1.8M this quarter</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiDollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Investors</p>
                <h3 className="text-2xl font-semibold mt-1">{totalInvestors}</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+92 this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiUsers className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Campaigns</p>
                <h3 className="text-2xl font-semibold mt-1">{activeCampaigns}</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2 this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiFlag className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Funding Rate</p>
                <h3 className="text-2xl font-semibold mt-1">{avgFundingRate}%</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+5% vs last month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiActivity className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'campaigns'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Active Campaigns
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('platforms')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'platforms'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Platforms
            </button>
          </nav>
        </div>

        {activeTab === 'campaigns' && (
          <>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent appearance-none"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mr-3">
                        <FiGlobe className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{campaign.platform}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <h3 className="font-medium text-lg mb-3">{campaign.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Raised: {campaign.raisedAmount}</span>
                        <span className="font-medium">{campaign.progress}%</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className={`h-2 rounded-full ${
                          campaign.progress >= 90 ? 'bg-green-500' :
                          campaign.progress >= 50 ? 'bg-blue-500' :
                          'bg-amber-500'
                        }`} style={{ width: `${campaign.progress}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Target: {campaign.targetAmount}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{campaign.investors} investors</span>
                      </div>
                    </div>
                    <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                      <div>
                        <div className="flex items-center text-sm">
                          <FiPercent className="h-4 w-4 text-gray-400 mr-1" />
                          <span>{campaign.interestRate}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Interest Rate</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm">
                          <FiClock className="h-4 w-4 text-gray-400 mr-1" />
                          <span>{campaign.term}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Term</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm">
                          <div className={`h-4 w-4 rounded-full flex items-center justify-center mr-1 ${
                            campaign.riskRating === 'Low' 
                              ? 'bg-green-100 text-green-600' 
                              : campaign.riskRating === 'Medium'
                                ? 'bg-amber-100 text-amber-600'
                                : 'bg-red-100 text-red-600'
                          }`}>
                            <FiCheck className="h-2 w-2" />
                          </div>
                          <span>{campaign.riskRating}</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Risk</div>
                      </div>
                    </div>
                    <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <FiCalendar className="h-3 w-3 mr-1" />
                          <span>Ends: {campaign.endDate}</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Link 
                          href={campaign.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400 text-sm flex items-center"
                        >
                          <FiExternalLink className="h-3 w-3 mr-1" />
                          <span>View</span>
                        </Link>
                        <Link 
                          href={`/funding/crowdfunding/${campaign.id}`}
                          className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400 text-sm"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-medium mb-4">Performance by Industry</h3>
              <div className="h-64">
                <Bar 
                  data={performanceByIndustryData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          display: true,
                          color: 'rgba(0, 0, 0, 0.05)',
                        },
                        ticks: {
                          callback: function(value) {
                            return value + '%';
                          }
                        }
                      },
                      x: {
                        grid: {
                          display: false,
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        display: false,
                      }
                    },
                  }}
                />
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-medium mb-4">Platform Distribution</h3>
              <div className="h-64 flex items-center justify-center">
                <Doughnut 
                  data={platformDistributionData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                          }
                        }
                      }
                    },
                  }}
                />
              </div>
            </div>

            <div className="card p-6 lg:col-span-2">
              <h3 className="text-lg font-medium mb-4">Funding Success Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                      <FiClock className="h-4 w-4" />
                    </div>
                    <h4 className="font-medium">Campaign Duration</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Campaigns lasting 30-45 days have the highest success rate at 82%, compared to 63% for campaigns over 60 days.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                      <FiDollarSign className="h-4 w-4" />
                    </div>
                    <h4 className="font-medium">Funding Target</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Campaigns with targets under $2M have a 76% success rate, while those over $5M have only a 42% success rate.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                      <FiBarChart2 className="h-4 w-4" />
                    </div>
                    <h4 className="font-medium">Interest Rate</h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The sweet spot for interest rates is 7-9%, with campaigns in this range achieving 85% funding success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-5">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  <FiGlobe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">InvestCrowd</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Global platform with 50K+ investors</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Average funding rate</span>
                    <span className="font-medium">74%</span>
                  </div>
                  <div className="mt-1 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Platform fee</span>
                  <span className="text-sm font-medium">3.5%</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Min. investment</span>
                  <span className="text-sm font-medium">$500</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Avg. time to fund</span>
                  <span className="text-sm font-medium">28 days</span>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                  <Link 
                    href="https://investcrowd.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full flex items-center justify-center"
                  >
                    <FiExternalLink className="mr-2 h-4 w-4" />
                    Visit Platform
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                  <FiGlobe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">FundingCircle</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">European focus with 80K+ investors</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Average funding rate</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="mt-1 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Platform fee</span>
                  <span className="text-sm font-medium">4.0%</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Min. investment</span>
                  <span className="text-sm font-medium">€1,000</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Avg. time to fund</span>
                  <span className="text-sm font-medium">22 days</span>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                  <Link 
                    href="https://fundingcircle.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full flex items-center justify-center"
                  >
                    <FiExternalLink className="mr-2 h-4 w-4" />
                    Visit Platform
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="card p-5">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                  <FiGlobe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">GlobalTradeFunding</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Trade finance focus with 35K+ investors</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Average funding rate</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="mt-1 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="h-2 bg-amber-500 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Platform fee</span>
                  <span className="text-sm font-medium">3.0%</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Min. investment</span>
                  <span className="text-sm font-medium">$1,000</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Avg. time to fund</span>
                  <span className="text-sm font-medium">35 days</span>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                  <Link 
                    href="https://globaltradefunding.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full flex items-center justify-center"
                  >
                    <FiExternalLink className="mr-2 h-4 w-4" />
                    Visit Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 