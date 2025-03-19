'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiTrendingUp, 
  FiTrendingDown,
  FiBarChart2,
  FiClock,
  FiDollarSign,
  FiPercent,
  FiTarget,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
  FiRefreshCw
} from 'react-icons/fi';

// Filter options
const timeframes = ['Last 7 Days', 'Last 30 Days', 'Last Quarter', 'Last Year', 'Custom Range'];
const metrics = ['All Metrics', 'Financial', 'Operational', 'Risk', 'Investor'];
const comparisons = ['Previous Period', 'Target', 'Industry Average', 'No Comparison'];

export default function PerformancePage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 30 Days');
  const [selectedMetric, setSelectedMetric] = useState('All Metrics');
  const [selectedComparison, setSelectedComparison] = useState('Previous Period');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedKPI, setExpandedKPI] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedKPI === index) {
      setExpandedKPI(null);
    } else {
      setExpandedKPI(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Performance</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Track and analyze trade finance performance metrics</p>
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
              <FiRefreshCw className="mr-2 h-4 w-4" />
              Refresh Data
            </button>
          </div>
        </div>

        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Transaction Volume</p>
                <h3 className="text-2xl font-bold mt-1">$42.8M</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +15.3% vs previous period
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiDollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average APR</p>
                <h3 className="text-2xl font-bold mt-1">8.2%</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +0.4% vs previous period
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiPercent className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Transaction Success Rate</p>
                <h3 className="text-2xl font-bold mt-1">94.5%</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingUp className="mr-1" /> +2.1% vs previous period
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiTarget className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Processing Time</p>
                <h3 className="text-2xl font-bold mt-1">3.2 days</h3>
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                  <FiTrendingDown className="mr-1" /> -0.8 days vs previous period
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiClock className="h-5 w-5" />
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
                placeholder="Search metrics..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
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
            
            <div>
              <select 
                className="input"
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
              >
                {metrics.map(metric => (
                  <option key={metric} value={metric}>{metric}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedComparison}
                onChange={(e) => setSelectedComparison(e.target.value)}
              >
                {comparisons.map(comparison => (
                  <option key={comparison} value={comparison}>{comparison}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="space-y-4">
          {[
            {
              id: 'KPI-FIN-001',
              title: 'Revenue Growth',
              category: 'Financial',
              value: '18.5%',
              target: '15.0%',
              status: 'Above Target',
              trend: 'Increasing',
              period: 'Last 30 Days',
              previousValue: '12.3%',
              industryAvg: '10.2%',
              description: 'Percentage increase in total revenue from trade finance operations compared to the previous period.',
              insights: [
                'Growth driven by 32% increase in Asia Pacific transactions',
                'Electronics sector contributed 45% of the growth',
                'New investor onboarding improved capital deployment by 22%'
              ],
              historicalData: [
                { period: 'Jan', value: '10.2%' },
                { period: 'Feb', value: '11.5%' },
                { period: 'Mar', value: '12.3%' },
                { period: 'Apr', value: '14.1%' },
                { period: 'May', value: '16.8%' },
                { period: 'Jun', value: '18.5%' }
              ],
              relatedMetrics: [
                { name: 'Transaction Volume', value: '$42.8M', trend: 'up' },
                { name: 'Average Deal Size', value: '$2.4M', trend: 'up' },
                { name: 'Investor Capital Deployed', value: '$38.5M', trend: 'up' }
              ]
            },
            {
              id: 'KPI-OPS-002',
              title: 'Transaction Processing Efficiency',
              category: 'Operational',
              value: '3.2 days',
              target: '4.0 days',
              status: 'Above Target',
              trend: 'Improving',
              period: 'Last 30 Days',
              previousValue: '4.0 days',
              industryAvg: '5.8 days',
              description: 'Average time from transaction initiation to funding disbursement, measuring operational efficiency.',
              insights: [
                'Automation of due diligence reduced processing time by 35%',
                'Digital document verification implemented for 85% of transactions',
                'Streamlined approval workflow reduced bottlenecks by 42%'
              ],
              historicalData: [
                { period: 'Jan', value: '5.8 days' },
                { period: 'Feb', value: '5.2 days' },
                { period: 'Mar', value: '4.7 days' },
                { period: 'Apr', value: '4.3 days' },
                { period: 'May', value: '4.0 days' },
                { period: 'Jun', value: '3.2 days' }
              ],
              relatedMetrics: [
                { name: 'Document Processing Time', value: '1.2 days', trend: 'down' },
                { name: 'Approval Cycle Time', value: '0.8 days', trend: 'down' },
                { name: 'Funding Disbursement Time', value: '1.2 days', trend: 'down' }
              ]
            },
            {
              id: 'KPI-INV-003',
              title: 'Investor Match Rate',
              category: 'Investor',
              value: '87.3%',
              target: '80.0%',
              status: 'Above Target',
              trend: 'Increasing',
              period: 'Last 30 Days',
              previousValue: '78.5%',
              industryAvg: '65.0%',
              description: 'Percentage of trade opportunities successfully matched with suitable investors within target timeframe.',
              insights: [
                'Enhanced matching algorithm improved compatibility scores by 25%',
                'Expanded investor network with 12 new institutional investors',
                'Improved opportunity data quality increased investor confidence'
              ],
              historicalData: [
                { period: 'Jan', value: '68.5%' },
                { period: 'Feb', value: '72.1%' },
                { period: 'Mar', value: '75.4%' },
                { period: 'Apr', value: '78.5%' },
                { period: 'May', value: '82.7%' },
                { period: 'Jun', value: '87.3%' }
              ],
              relatedMetrics: [
                { name: 'Average Match Score', value: '85.2%', trend: 'up' },
                { name: 'Time to Match', value: '1.8 days', trend: 'down' },
                { name: 'Investor Satisfaction', value: '92%', trend: 'up' }
              ]
            },
            {
              id: 'KPI-RISK-004',
              title: 'Default Rate',
              category: 'Risk',
              value: '0.8%',
              target: '1.5%',
              status: 'Above Target',
              trend: 'Decreasing',
              period: 'Last 30 Days',
              previousValue: '1.2%',
              industryAvg: '2.3%',
              description: 'Percentage of transactions that resulted in default or significant payment delays, measuring risk management effectiveness.',
              insights: [
                'Enhanced risk assessment model improved prediction accuracy by 32%',
                'Increased collateral requirements for high-risk transactions',
                'Proactive monitoring system flagged potential issues earlier'
              ],
              historicalData: [
                { period: 'Jan', value: '2.1%' },
                { period: 'Feb', value: '1.8%' },
                { period: 'Mar', value: '1.5%' },
                { period: 'Apr', value: '1.2%' },
                { period: 'May', value: '1.0%' },
                { period: 'Jun', value: '0.8%' }
              ],
              relatedMetrics: [
                { name: 'Risk-Adjusted Return', value: '7.8%', trend: 'up' },
                { name: 'Average Risk Score', value: '72/100', trend: 'up' },
                { name: 'Recovery Rate', value: '94.5%', trend: 'up' }
              ]
            },
          ].map((kpi, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{kpi.title}</h3>
                    <span className="ml-2 text-sm text-gray-500">{kpi.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiBarChart2 className="mr-1 h-4 w-4" /> {kpi.category}
                    </span>
                    <span className="flex items-center">
                      <FiCalendar className="mr-1 h-4 w-4" /> {kpi.period}
                    </span>
                    <span className="flex items-center">
                      <FiTarget className="mr-1 h-4 w-4" /> Target: {kpi.target}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="flex flex-col items-end">
                      <span className="text-xl font-bold">{kpi.value}</span>
                      <span className={`text-xs flex items-center ${
                        (kpi.category === 'Risk' && kpi.trend === 'Decreasing') || 
                        (kpi.category !== 'Risk' && kpi.trend === 'Increasing') || 
                        (kpi.category === 'Operational' && kpi.trend === 'Improving')
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {(kpi.category === 'Risk' && kpi.trend === 'Decreasing') || 
                         (kpi.category !== 'Risk' && kpi.trend === 'Increasing') || 
                         (kpi.category === 'Operational' && kpi.trend === 'Improving')
                          ? <FiTrendingUp className="mr-1 h-3 w-3" /> 
                          : <FiTrendingDown className="mr-1 h-3 w-3" />
                        }
                        {kpi.trend}
                      </span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      kpi.status === 'Above Target' 
                        ? 'bg-green-100 text-green-800' 
                        : kpi.status === 'On Target'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {kpi.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {expandedKPI === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedKPI === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className="font-medium mb-2">Description</h4>
                        <p className="text-gray-600 dark:text-gray-400">{kpi.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Insights</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          {kpi.insights.map((insight, i) => (
                            <li key={i}>{insight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Historical Trend</h4>
                        <div className="h-60 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                          <div className="w-full h-full flex flex-col">
                            <div className="flex justify-between mb-2">
                              {kpi.historicalData.map((data, i) => (
                                <div key={i} className="text-xs text-gray-500">{data.period}</div>
                              ))}
                            </div>
                            <div className="flex-grow relative">
                              <div className="absolute inset-0 flex items-end">
                                {kpi.historicalData.map((data, i) => {
                                  // Convert values to percentages for visualization
                                  const value = parseFloat(data.value.replace(/[^0-9.]/g, ''));
                                  const maxValue = Math.max(...kpi.historicalData.map(d => parseFloat(d.value.replace(/[^0-9.]/g, ''))));
                                  const height = (value / maxValue) * 100;
                                  
                                  return (
                                    <div key={i} className="flex-1 flex flex-col items-center">
                                      <div className="text-xs mb-1">{data.value}</div>
                                      <div 
                                        className="w-4/5 bg-silk-500 rounded-t"
                                        style={{ height: `${height}%` }}
                                      ></div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Related Metrics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {kpi.relatedMetrics.map((metric, i) => (
                            <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.name}</p>
                              <div className="flex items-center justify-between mt-1">
                                <p className="font-medium">{metric.value}</p>
                                <p className={`text-xs flex items-center ${
                                  (kpi.category === 'Risk' && metric.trend === 'down') || 
                                  (kpi.category !== 'Risk' && metric.trend === 'up') || 
                                  (kpi.category === 'Operational' && metric.trend === 'down')
                                    ? 'text-green-600 dark:text-green-400' 
                                    : 'text-red-600 dark:text-red-400'
                                }`}>
                                  {metric.trend === 'up' 
                                    ? <FiTrendingUp className="mr-1 h-3 w-3" /> 
                                    : <FiTrendingDown className="mr-1 h-3 w-3" />
                                  }
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Comparisons */}
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium mb-4">Performance Comparison</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-sm">Current Value</p>
                              <p className="font-medium">{kpi.value}</p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-silk-500 h-2.5 rounded-full" 
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-sm">Previous Period</p>
                              <p className="font-medium">{kpi.previousValue}</p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-gray-400 dark:bg-gray-600 h-2.5 rounded-full" 
                                style={{ 
                                  width: `${
                                    (parseFloat(kpi.previousValue.replace(/[^0-9.]/g, '')) / 
                                    parseFloat(kpi.value.replace(/[^0-9.]/g, ''))) * 100
                                  }%` 
                                }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-sm">Target</p>
                              <p className="font-medium">{kpi.target}</p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-green-500 h-2.5 rounded-full" 
                                style={{ 
                                  width: `${
                                    (parseFloat(kpi.target.replace(/[^0-9.]/g, '')) / 
                                    parseFloat(kpi.value.replace(/[^0-9.]/g, ''))) * 100
                                  }%` 
                                }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-sm">Industry Average</p>
                              <p className="font-medium">{kpi.industryAvg}</p>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-blue-500 h-2.5 rounded-full" 
                                style={{ 
                                  width: `${
                                    (parseFloat(kpi.industryAvg.replace(/[^0-9.]/g, '')) / 
                                    parseFloat(kpi.value.replace(/[^0-9.]/g, ''))) * 100
                                  }%` 
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-silk-50 dark:bg-silk-900/10 border border-silk-100 dark:border-silk-800/20 rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center text-silk-700 dark:text-silk-400">
                          <FiBarChart2 className="mr-2 h-4 w-4" /> Analysis Actions
                        </h4>
                        <div className="space-y-2">
                          <button className="btn-outline w-full justify-between">
                            <span>View Detailed Report</span>
                            <FiArrowRight className="h-4 w-4" />
                          </button>
                          <button className="btn-outline w-full justify-between">
                            <span>Export Metric Data</span>
                            <FiDownload className="h-4 w-4" />
                          </button>
                          <button className="btn-outline w-full justify-between">
                            <span>Set Custom Alerts</span>
                            <FiTarget className="h-4 w-4" />
                          </button>
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
            Showing 4 of 16 performance metrics
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