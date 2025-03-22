'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiShield, 
  FiAlertCircle, 
  FiTrendingUp,
  FiTrendingDown,
  FiBarChart2,
  FiDollarSign,
  FiClock,
  FiChevronDown,
  FiChevronUp,
  FiCheck
} from 'react-icons/fi';

// Filter options
const riskCategories = ['All Categories', 'Credit Risk', 'Market Risk', 'Operational Risk', 'Liquidity Risk', 'Country Risk'];
const riskLevels = ['All Levels', 'Low', 'Medium', 'High', 'Critical'];
const timeframes = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last Year', 'All Time'];

export default function RiskManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 30 Days');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedRisk === index) {
      setExpandedRisk(null);
    } else {
      setExpandedRisk(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Risk Management</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Monitor and mitigate risks across trade finance operations</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-outline flex items-center">
              <FiFilter className="mr-2 h-4 w-4" />
              Advanced Filters
            </button>
            <button className="btn-outline flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export Report
            </button>
            <button className="btn-primary flex items-center">
              <FiShield className="mr-2 h-4 w-4" />
              Risk Assessment
            </button>
          </div>
        </div>

        {/* Risk Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Overall Risk Score</p>
                <h3 className="text-2xl font-bold mt-1">72/100</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +3 from last month
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiShield className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Risk Alerts</p>
                <h3 className="text-2xl font-bold mt-1">8</h3>
                <p className="text-xs text-red-600 dark:text-red-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +2 from last month
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                <FiAlertCircle className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Transaction Risk</p>
                <h3 className="text-2xl font-bold mt-1">Medium</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  No change from last month
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiBarChart2 className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Risk Mitigation Rate</p>
                <h3 className="text-2xl font-bold mt-1">92%</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +5% from last month
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiCheck className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search risks..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div>
              <select 
                className="input" 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {riskCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {riskLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
              >
                {timeframes.map(timeframe => (
                  <option key={timeframe} value={timeframe}>{timeframe}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Risk Items */}
        <div className="space-y-4">
          {[
            {
              id: 'RISK-2023-001',
              title: 'Currency Volatility - EUR/USD',
              category: 'Market Risk',
              level: 'High',
              impact: 'High',
              probability: 'Medium',
              status: 'Active',
              description: 'Increased volatility in EUR/USD exchange rate affecting trade finance transactions with European counterparties.',
              affectedTransactions: 3,
              mitigation: 'Implementing currency hedging strategies and forward contracts to lock in exchange rates.',
              trend: 'Increasing',
              lastUpdated: 'Jun 15, 2023',
              owner: 'Sarah Williams',
              metrics: [
                { name: 'Volatility Index', value: '18.5', change: '+2.3', status: 'negative' },
                { name: 'Hedging Coverage', value: '85%', change: '+10%', status: 'positive' },
                { name: 'Exposure Amount', value: '$2.8M', change: '-$0.5M', status: 'positive' }
              ]
            },
            {
              id: 'RISK-2023-002',
              title: 'Counterparty Default - HealthTech Solutions',
              category: 'Credit Risk',
              level: 'Medium',
              impact: 'High',
              probability: 'Low',
              status: 'Monitoring',
              description: 'Potential payment delay or default risk for medical equipment import transaction with HealthTech Solutions.',
              affectedTransactions: 1,
              mitigation: 'Additional collateral secured and payment guarantee from parent company obtained.',
              trend: 'Stable',
              lastUpdated: 'Jun 10, 2023',
              owner: 'John Smith',
              metrics: [
                { name: 'Credit Score', value: '72/100', change: '-3', status: 'negative' },
                { name: 'Collateral Ratio', value: '125%', change: '+25%', status: 'positive' },
                { name: 'Days Past Due', value: '0', change: '0', status: 'neutral' }
              ]
            },
            {
              id: 'RISK-2023-003',
              title: 'Political Instability - Brazil',
              category: 'Country Risk',
              level: 'Medium',
              impact: 'Medium',
              probability: 'Medium',
              status: 'Active',
              description: 'Political tensions in Brazil may affect agricultural commodities export transaction timelines and regulatory approvals.',
              affectedTransactions: 2,
              mitigation: 'Political risk insurance secured and alternative export routes identified.',
              trend: 'Stable',
              lastUpdated: 'May 28, 2023',
              owner: 'Emily Davis',
              metrics: [
                { name: 'Country Risk Index', value: '65/100', change: '-2', status: 'negative' },
                { name: 'Insurance Coverage', value: '100%', change: '+20%', status: 'positive' },
                { name: 'Regulatory Delays', value: '5 days', change: '+2 days', status: 'negative' }
              ]
            },
            {
              id: 'RISK-2023-004',
              title: 'Supply Chain Disruption - Taiwan',
              category: 'Operational Risk',
              level: 'High',
              impact: 'High',
              probability: 'Medium',
              status: 'Mitigating',
              description: 'Potential shipping delays and supply chain disruptions for electronics import from Taiwan due to port congestion.',
              affectedTransactions: 1,
              mitigation: 'Alternative shipping routes and carriers identified. Buffer inventory increased.',
              trend: 'Improving',
              lastUpdated: 'Jun 12, 2023',
              owner: 'Michael Chen',
              metrics: [
                { name: 'Shipping Delay', value: '7 days', change: '-3 days', status: 'positive' },
                { name: 'Alternative Routes', value: '3', change: '+1', status: 'positive' },
                { name: 'Buffer Stock', value: '30 days', change: '+10 days', status: 'positive' }
              ]
            },
          ].map((risk, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{risk.title}</h3>
                    <span className="ml-2 text-sm text-gray-500">{risk.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiShield className="mr-1 h-4 w-4" /> {risk.category}
                    </span>
                    <span className="flex items-center">
                      <FiBarChart2 className="mr-1 h-4 w-4" /> Impact: {risk.impact}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1 h-4 w-4" /> Updated: {risk.lastUpdated}
                    </span>
                    <span className="flex items-center">
                      <FiDollarSign className="mr-1 h-4 w-4" /> {risk.affectedTransactions} Transactions
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      risk.level === 'Low' 
                        ? 'bg-green-100 text-green-800' 
                        : risk.level === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {risk.level} Risk
                    </span>
                  </div>
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      risk.status === 'Active' 
                        ? 'bg-red-100 text-red-800' 
                        : risk.status === 'Monitoring'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                    }`}>
                      {risk.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {expandedRisk === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedRisk === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className="font-medium mb-2">Risk Description</h4>
                        <p className="text-gray-600 dark:text-gray-400">{risk.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Mitigation Strategy</h4>
                        <p className="text-gray-600 dark:text-gray-400">{risk.mitigation}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {risk.metrics.map((metric, i) => (
                            <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.name}</p>
                              <div className="flex items-center justify-between mt-1">
                                <p className="font-medium">{metric.value}</p>
                                <p className={`text-xs flex items-center ${
                                  metric.status === 'positive' 
                                    ? 'text-green-600 dark:text-green-400' 
                                    : metric.status === 'negative'
                                      ? 'text-red-600 dark:text-red-400'
                                      : 'text-gray-500 dark:text-gray-400'
                                }`}>
                                  {metric.status === 'positive' 
                                    ? <FiTrendingUp className="mr-1 h-3 w-3" /> 
                                    : metric.status === 'negative'
                                      ? <FiTrendingDown className="mr-1 h-3 w-3" />
                                      : null
                                  }
                                  {metric.change}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Affected Transactions</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 dark:border-gray-800">
                                <th className="text-left py-2 px-4 font-medium text-gray-500 dark:text-gray-400">Transaction ID</th>
                                <th className="text-left py-2 px-4 font-medium text-gray-500 dark:text-gray-400">Title</th>
                                <th className="text-left py-2 px-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                                <th className="text-left py-2 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {risk.id === 'RISK-2023-001' ? (
                                <>
                                  <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-4">TRX-2023-042</td>
                                    <td className="py-2 px-4">Electronics Import from Taiwan</td>
                                    <td className="py-2 px-4">$1.2M</td>
                                    <td className="py-2 px-4">
                                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Approval</span>
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-4">TRX-2023-039</td>
                                    <td className="py-2 px-4">Medical Equipment Import</td>
                                    <td className="py-2 px-4">$2.4M</td>
                                    <td className="py-2 px-4">
                                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Due Diligence</span>
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-4">TRX-2023-036</td>
                                    <td className="py-2 px-4">Agricultural Commodities Export</td>
                                    <td className="py-2 px-4">$3.8M</td>
                                    <td className="py-2 px-4">
                                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                    </td>
                                  </tr>
                                </>
                              ) : risk.id === 'RISK-2023-002' ? (
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                  <td className="py-2 px-4">TRX-2023-039</td>
                                  <td className="py-2 px-4">Medical Equipment Import</td>
                                  <td className="py-2 px-4">$2.4M</td>
                                  <td className="py-2 px-4">
                                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Due Diligence</span>
                                  </td>
                                </tr>
                              ) : risk.id === 'RISK-2023-003' ? (
                                <>
                                  <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-4">TRX-2023-036</td>
                                    <td className="py-2 px-4">Agricultural Commodities Export</td>
                                    <td className="py-2 px-4">$3.8M</td>
                                    <td className="py-2 px-4">
                                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                    </td>
                                  </tr>
                                  <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 px-4">TRX-2023-033</td>
                                    <td className="py-2 px-4">Textile Manufacturing Equipment</td>
                                    <td className="py-2 px-4">$850K</td>
                                    <td className="py-2 px-4">
                                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Approval</span>
                                    </td>
                                  </tr>
                                </>
                              ) : (
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                  <td className="py-2 px-4">TRX-2023-042</td>
                                  <td className="py-2 px-4">Electronics Import from Taiwan</td>
                                  <td className="py-2 px-4">$1.2M</td>
                                  <td className="py-2 px-4">
                                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">Approval</span>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Actions */}
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Risk Details</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Risk Owner</p>
                            <p className="font-medium">{risk.owner}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Probability</p>
                            <p className="font-medium">{risk.probability}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Trend</p>
                            <p className="font-medium flex items-center">
                              {risk.trend === 'Increasing' 
                                ? <FiTrendingUp className="mr-1 text-red-500" /> 
                                : risk.trend === 'Decreasing'
                                  ? <FiTrendingDown className="mr-1 text-green-500" />
                                  : risk.trend === 'Improving'
                                    ? <FiTrendingDown className="mr-1 text-green-500" />
                                    : null
                              }
                              {risk.trend}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
                            <p className="font-medium">{risk.lastUpdated}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-silk-50 dark:bg-silk-900/10 border border-silk-100 dark:border-silk-800/20 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Actions</h4>
                        <div className="space-y-2">
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiBarChart2 className="mr-2 h-4 w-4" />
                            Update Risk Assessment
                          </button>
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiShield className="mr-2 h-4 w-4" />
                            Edit Mitigation Plan
                          </button>
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiDownload className="mr-2 h-4 w-4" />
                            Export Risk Report
                          </button>
                          {risk.status === 'Active' && (
                            <button className="btn-primary w-full flex items-center justify-center">
                              <FiCheck className="mr-2 h-4 w-4" />
                              Mark as Mitigated
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing 4 of 12 risks
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
    </DashboardLayout>
  );
} 