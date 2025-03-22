'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiCalendar, 
  FiArrowUp,
  FiDollarSign,
  FiActivity,
  FiUsers,
  FiPercent,
  FiTrendingUp,
  FiTrendingDown,
  FiInfo,
  FiExternalLink
} from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import OnboardingTour, { Step } from '../../components/OnboardingTour';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Time periods for filtering
const timePeriods = ['Last 7 Days', 'Last 30 Days', 'Last Quarter', 'Year to Date', 'Custom'];

// Tour steps for the analytics page
const analyticsTourSteps: Step[] = [
  {
    target: 'body',
    content: 'Welcome to the Financial Analytics page! This page provides comprehensive insights into your trade finance performance.',
    placement: 'center',
    disableBeacon: true,
  },
  {
    target: '.time-filter',
    content: 'Use these options to adjust the time period for all analytics on this page.',
    placement: 'bottom',
  },
  {
    target: '.key-metrics',
    content: 'These key metrics provide a snapshot of your financial performance at a glance.',
    placement: 'top',
  },
  {
    target: '.liquidity-chart',
    content: 'Interactive charts help you visualize trends and patterns in your financial data.',
    placement: 'bottom',
  },
  {
    target: '.performance-breakdown',
    content: 'This section breaks down your performance by different categories for deeper analysis.',
    placement: 'top',
  },
  {
    target: '.filter-btn',
    content: 'Filter your analytics data using various parameters to focus on specific aspects of your business.',
    placement: 'bottom',
  },
  {
    target: '.export-btn',
    content: 'Export your analytics data for further analysis or reporting.',
    placement: 'bottom',
  }
];

export default function FinancialAnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');
  
  // Line chart data for liquidity and transaction volume
  const liquidityTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Available Liquidity',
        data: [12.5, 14.2, 16.8, 18.1, 17.5, 19.2, 21.5, 22.8, 24.3],
        borderColor: 'rgba(147, 51, 234, 0.8)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Deployed Capital',
        data: [8.2, 10.5, 12.3, 14.8, 16.2, 15.8, 17.3, 18.9, 20.1],
        borderColor: 'rgba(236, 72, 153, 0.8)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  // Bar chart data for transaction types
  const transactionTypeData = {
    labels: ['Import', 'Export', 'Domestic', 'Cross-Border'],
    datasets: [
      {
        label: 'Transaction Volume (in millions)',
        data: [8.4, 12.6, 5.2, 3.8],
        backgroundColor: [
          'rgba(147, 51, 234, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
      },
    ],
  };
  
  // Doughnut chart data for investor allocation
  const investorAllocationData = {
    labels: ['Institutional', 'Family Offices', 'Private Equity', 'Individual Investors'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          'rgba(147, 51, 234, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
        borderColor: [
          'rgba(147, 51, 234, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Line chart data for APR trends
  const aprTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Average APR',
        data: [7.2, 7.4, 7.1, 7.5, 7.8, 8.1, 8.3, 8.2, 8.4],
        borderColor: 'rgba(16, 185, 129, 0.8)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Bank Financing Rate',
        data: [5.1, 5.3, 5.4, 5.6, 5.8, 6.0, 6.2, 6.3, 6.4],
        borderColor: 'rgba(209, 213, 219, 0.8)',
        backgroundColor: 'rgba(209, 213, 219, 0.1)',
        tension: 0.4,
        fill: true,
        borderDash: [5, 5],
      },
    ],
  };
  
  // Bar chart data for projected cash flows
  const cashFlowProjectionData = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Inflows',
        data: [4.2, 5.1, 6.3, 4.8, 5.5, 7.2],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
      },
      {
        label: 'Outflows',
        data: [3.8, 4.5, 5.2, 4.1, 4.8, 6.1],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
      },
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Financial Analytics</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Comprehensive insights into trade finance performance</p>
          </div>
          <div className="flex space-x-3">
            <div className="relative time-filter">
              <select 
                className="input pr-10 appearance-none"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                {timePeriods.map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
              <FiCalendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
            <button className="btn-outline filter-btn flex items-center">
              <FiFilter className="mr-2 h-4 w-4" />
              Filters
            </button>
            <button className="btn-outline export-btn flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 key-metrics">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Liquidity</p>
                <h3 className="text-2xl font-semibold mt-1">$24.3M</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+12.4% vs last period</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiDollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Deployed Capital</p>
                <h3 className="text-2xl font-semibold mt-1">$20.1M</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+6.3% vs last period</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                <FiActivity className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Investors</p>
                <h3 className="text-2xl font-semibold mt-1">42</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+4 new this period</span>
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Average APR</p>
                <h3 className="text-2xl font-semibold mt-1">8.4%</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+0.2% vs last period</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiPercent className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts - First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-4 chart-container liquidity-chart">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Liquidity Trend</h3>
              <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
                <span>Detailed View</span>
                <FiExternalLink className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="h-64">
              <Line 
                data={liquidityTrendData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: false,
                      grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)',
                      },
                      ticks: {
                        callback: function(value) {
                          return '$' + value + 'M';
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
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.dataset.label + ': $' + context.parsed.y + 'M';
                        }
                      }
                    }
                  },
                }}
              />
            </div>
          </div>
          
          <div className="card p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Transaction Types</h3>
              <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
                <span>Detailed View</span>
                <FiExternalLink className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="h-64">
              <Bar 
                data={transactionTypeData} 
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
                          return '$' + value + 'M';
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
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return 'Volume: $' + context.parsed.y + 'M';
                        }
                      }
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Charts - Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Investor Allocation</h3>
              <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
                <span>Details</span>
                <FiExternalLink className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="h-64 flex items-center justify-center">
              <Doughnut 
                data={investorAllocationData} 
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
          
          <div className="card p-4 col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">APR Comparison</h3>
              <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
                <span>Detailed View</span>
                <FiExternalLink className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="h-64">
              <Line 
                data={aprTrendData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: false,
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
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context) {
                          return context.dataset.label + ': ' + context.parsed.y + '%';
                        }
                      }
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Cash Flow Projections */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-medium">Cash Flow Projections</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">6-month forecast based on current transactions</p>
            </div>
            <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>Adjust Projections</span>
              <FiExternalLink className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="h-64">
            <Bar 
              data={cashFlowProjectionData} 
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
                        return '$' + value + 'M';
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
                    position: 'top',
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return context.dataset.label + ': $' + context.parsed.y + 'M';
                      }
                    }
                  }
                },
              }}
            />
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="card p-4 performance-breakdown">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Performance Against Targets</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span>YTD Performance</span>
              <FiInfo className="ml-1 h-4 w-4" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="font-medium">Liquidity Growth</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">+24.3%</span>
                  <span className="text-gray-500 ml-2">vs 20% target</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '121.5%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="font-medium">Investor Acquisition</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">+16</span>
                  <span className="text-gray-500 ml-2">vs 20 target</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="font-medium">Transaction Volume</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">$30M</span>
                  <span className="text-gray-500 ml-2">vs $35M target</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '85.7%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="font-medium">Average APR</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">8.4%</span>
                  <span className="text-gray-500 ml-2">vs 8.0% target</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '105%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk Analysis */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Risk Analysis</h3>
            <button className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>Detailed Report</span>
              <FiExternalLink className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Default Rate</h4>
                <span className="text-green-600 flex items-center text-sm">
                  <FiTrendingDown className="mr-1 h-4 w-4" />
                  0.8%
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Well below industry average of 2.1%</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Concentration Risk</h4>
                <span className="text-amber-600 flex items-center text-sm">
                  <FiTrendingUp className="mr-1 h-4 w-4" />
                  Medium
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Top 5 investors hold 42% of capital</p>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Liquidity Risk</h4>
                <span className="text-green-600 flex items-center text-sm">
                  <FiTrendingDown className="mr-1 h-4 w-4" />
                  Low
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">17.5% capital reserve maintained</p>
            </div>
          </div>
        </div>

        {/* Onboarding Tour */}
        <OnboardingTour 
          tourId="analytics-page"
          steps={analyticsTourSteps}
        />
      </div>
    </DashboardLayout>
  );
} 