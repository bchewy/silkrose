'use client';

import { useState } from 'react';
import DashboardLayout from '../../dashboard-layout';
import { 
  FiUsers, 
  FiTrendingUp, 
  FiMail, 
  FiGlobe, 
  FiCalendar, 
  FiPhoneCall,
  FiSearch,
  FiFilter,
  FiPlus,
  FiDownload,
  FiUpload,
  FiArrowUp,
  FiArrowDown,
  FiStar,
  FiEdit,
  FiRefreshCw,
  FiTrash2,
  FiZap,
} from 'react-icons/fi';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';

export default function MarketingLeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('leads');
  
  // Mock leads data
  const leads = [
    {
      id: 1,
      name: 'Oceanic Imports Ltd',
      contact: 'James Wilson',
      email: 'j.wilson@oceanicimports.com',
      phone: '+1 (415) 555-7890',
      source: 'Website',
      status: 'New',
      score: 85,
      dateAdded: 'May 15, 2023',
      lastContact: 'May 15, 2023',
      notes: 'Interested in trade finance for electronics imports from Asia'
    },
    {
      id: 2,
      name: 'Global Supply Chain Co',
      contact: 'Sarah Chen',
      email: 's.chen@globalsupply.com',
      phone: '+65 9123 4567',
      source: 'LinkedIn',
      status: 'Contacted',
      score: 72,
      dateAdded: 'May 12, 2023',
      lastContact: 'May 14, 2023',
      notes: 'Looking for financing options for their textile supply chain'
    },
    {
      id: 3,
      name: 'European Exports Group',
      contact: 'Hans Mueller',
      email: 'h.mueller@euroexports.eu',
      phone: '+49 30 1234 5678',
      source: 'Referral',
      status: 'Qualified',
      score: 93,
      dateAdded: 'May 10, 2023',
      lastContact: 'May 13, 2023',
      notes: 'Highly interested in working capital solutions for automotive parts exports'
    },
    {
      id: 4,
      name: 'African Commodity Traders',
      contact: 'Grace Okafor',
      email: 'g.okafor@actrade.co',
      phone: '+27 11 234 5678',
      source: 'Trade Show',
      status: 'Nurturing',
      score: 68,
      dateAdded: 'May 8, 2023',
      lastContact: 'May 12, 2023',
      notes: 'Looking for financing for agricultural exports'
    },
    {
      id: 5,
      name: 'Midwest Manufacturing Inc',
      contact: 'Robert Johnson',
      email: 'r.johnson@midwestmfg.com',
      phone: '+1 (312) 555-1234',
      source: 'Email Campaign',
      status: 'Proposal',
      score: 88,
      dateAdded: 'May 5, 2023',
      lastContact: 'May 11, 2023',
      notes: 'Ready for proposal on $5M financing for machinery imports'
    },
    {
      id: 6,
      name: 'Pacific Seafood Exporters',
      contact: 'David Kim',
      email: 'd.kim@pacificseafood.com',
      phone: '+61 2 9876 5432',
      source: 'Website',
      status: 'New',
      score: 65,
      dateAdded: 'May 3, 2023',
      lastContact: 'May 3, 2023',
      notes: 'Interested in export financing for seafood shipments to Asia'
    },
  ];

  // Lead funnel summary data
  const leadFunnelData = {
    totalLeads: 248,
    newLeads: 42,
    contacted: 86,
    qualified: 64,
    nurturing: 38,
    proposal: 18
  };

  // Lead source data for chart
  const leadSourceData = {
    labels: ['Website', 'LinkedIn', 'Email Campaign', 'Referral', 'Trade Show', 'Other'],
    datasets: [
      {
        label: 'Lead Sources',
        data: [85, 65, 42, 28, 18, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(107, 114, 128, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Lead trends chart data
  const leadTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'New Leads',
        data: [32, 45, 38, 56, 42],
        borderColor: 'rgba(59, 130, 246, 0.8)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Qualified Leads',
        data: [12, 18, 15, 22, 24],
        borderColor: 'rgba(16, 185, 129, 0.8)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Filter and search logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSourceFilter = filterSource === 'All' || lead.source === filterSource;
    const matchesStatusFilter = filterStatus === 'All' || lead.status === filterStatus;
    return matchesSearch && matchesSourceFilter && matchesStatusFilter;
  });

  // Unique sources and statuses for filters
  const sources = ['All', ...new Set(leads.map(lead => lead.source))];
  const statuses = ['All', ...new Set(leads.map(lead => lead.status))];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Lead Management</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Track and nurture potential trade finance clients
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="btn btn-secondary flex items-center">
              <FiUpload className="mr-2 h-4 w-4" />
              Import
            </button>
            <button className="btn btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add New Lead
            </button>
          </div>
        </div>

        {/* Lead Metrics */}
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Leads</p>
                <h3 className="text-3xl font-semibold mt-1">{leadFunnelData.totalLeads}</h3>
                <div className="flex items-center justify-center mt-1 text-green-600">
                  <FiArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+8.4%</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="grid grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="h-2 rounded-full bg-blue-100 dark:bg-blue-900/30 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">New</p>
                  <h4 className="text-lg font-medium">{leadFunnelData.newLeads}</h4>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-blue-100 dark:bg-blue-900/30 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Contacted</p>
                  <h4 className="text-lg font-medium">{leadFunnelData.contacted}</h4>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-blue-100 dark:bg-blue-900/30 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Qualified</p>
                  <h4 className="text-lg font-medium">{leadFunnelData.qualified}</h4>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-blue-100 dark:bg-blue-900/30 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Nurturing</p>
                  <h4 className="text-lg font-medium">{leadFunnelData.nurturing}</h4>
                </div>
                <div className="text-center">
                  <div className="h-2 rounded-full bg-blue-100 dark:bg-blue-900/30 relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Proposal</p>
                  <h4 className="text-lg font-medium">{leadFunnelData.proposal}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Dashboard Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setActiveTab('leads')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leads'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Lead Management
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'campaigns'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Email Campaigns
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Content Manager
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'seo'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              SEO Performance
            </button>
          </nav>
        </div>

        {activeTab === 'leads' && (
          <>
            {/* Lead Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="card p-4 lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Lead Trends</h3>
                  <select className="text-sm border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1">
                    <option>Last 5 Months</option>
                    <option>Last 12 Months</option>
                    <option>YTD</option>
                  </select>
                </div>
                <div className="h-64">
                  <Line 
                    data={leadTrendsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.05)',
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
                          position: 'top',
                        }
                      },
                    }}
                  />
                </div>
              </div>
              <div className="card p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Lead Sources</h3>
                  <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
                    <FiRefreshCw className="mr-1 h-3 w-3" />
                    <span>Refresh</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {leadSourceData.labels.map((source, idx) => (
                    <div key={source} className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: leadSourceData.datasets[0].backgroundColor[idx] }}></div>
                      <span className="text-sm">{source}</span>
                      <div className="ml-auto text-sm font-medium">{leadSourceData.datasets[0].data[idx]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-silk-500 focus:border-transparent appearance-none"
                  value={filterSource}
                  onChange={(e) => setFilterSource(e.target.value)}
                >
                  {sources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
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

            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lead</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Source</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date Added</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Contact</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredLeads.map(lead => (
                    <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <div className="text-sm font-medium">{lead.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{lead.contact}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          lead.status === 'Contacted' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                          lead.status === 'Qualified' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          lead.status === 'Nurturing' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                          'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                lead.score >= 80 ? 'bg-green-500' :
                                lead.score >= 60 ? 'bg-amber-500' :
                                'bg-red-500'
                              }`} 
                              style={{ width: `${lead.score}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs font-medium">{lead.score}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {lead.dateAdded}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {lead.lastContact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-3">
                          <button className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                            <FiPhoneCall className="h-4 w-4" />
                          </button>
                          <button className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                            <FiMail className="h-4 w-4" />
                          </button>
                          <button className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400">
                            <FiEdit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Placeholder for Email Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="card p-6 text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <FiMail className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium mb-2">Email Campaigns</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Create and manage email marketing campaigns to nurture trade finance leads.
            </p>
            <button className="btn btn-primary">
              Create New Campaign
            </button>
          </div>
        )}

        {/* Placeholder for Content Manager Tab */}
        {activeTab === 'content' && (
          <div className="card p-6 text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <FiFileText className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium mb-2">Content Manager</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Create and manage thought leadership content for the SilkRose blog and website.
            </p>
            <button className="btn btn-primary">
              Create New Content
            </button>
          </div>
        )}

        {/* Placeholder for SEO Performance Tab */}
        {activeTab === 'seo' && (
          <div className="card p-6 text-center">
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <FiGlobe className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium mb-2">SEO Performance</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Track and analyze SilkRose website's SEO performance and keyword rankings.
            </p>
            <button className="btn btn-primary">
              View SEO Analytics
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 