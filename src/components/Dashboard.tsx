'use client';

import { 
  FiDollarSign, 
  FiUsers, 
  FiClock, 
  FiTarget, 
  FiAlertCircle, 
  FiArrowRight,
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
  FiFileText,
  FiPercent,
  FiShield
} from 'react-icons/fi';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Key stats for the dashboard
  const stats = [
    {
      title: 'Available Liquidity',
      value: '$24.3M',
      change: '+12.4%',
      icon: <FiDollarSign className="h-5 w-5" />,
      color: 'purple',
    },
    {
      title: 'Active Investors',
      value: '42',
      change: '+4',
      icon: <FiUsers className="h-5 w-5" />,
      color: 'blue',
    },
    {
      title: 'Pending Transactions',
      value: '14',
      change: '-2',
      icon: <FiClock className="h-5 w-5" />,
      color: 'amber',
    },
    {
      title: 'Trade Opportunities',
      value: '18',
      change: '+5',
      icon: <FiTarget className="h-5 w-5" />,
      color: 'green',
    },
  ];

  // Liquidity trend chart data
  const liquidityChartData = {
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

  // Investor allocation chart data
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

  // Transaction timeline comparison chart data
  const timelineComparisonData = {
    labels: ['Documentation', 'Due Diligence', 'Approval', 'Funding', 'Settlement'],
    datasets: [
      {
        label: 'Traditional Banking',
        data: [10, 15, 12, 8, 5],
        backgroundColor: 'rgba(209, 213, 219, 0.7)',
      },
      {
        label: 'SilkRose Platform',
        data: [3, 4, 2, 1, 1],
        backgroundColor: 'rgba(236, 72, 153, 0.7)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                <div className={`flex items-center mt-1 ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change.startsWith('+') ? 
                    <FiArrowUp className="h-4 w-4 mr-1" /> : 
                    <FiArrowDown className="h-4 w-4 mr-1" />
                  }
                  <span className="text-sm">{stat.change}</span>
                </div>
              </div>
              <div className={`h-10 w-10 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center text-${stat.color}-600 dark:text-${stat.color}-400`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Liquidity Trend Chart */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Liquidity Trend</h3>
            <Link href="/analytics" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>View Analytics</span>
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="h-64">
            <Line 
              data={liquidityChartData} 
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

        {/* Transaction Timeline Comparison */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Transaction Timeline Comparison (Days)</h3>
            <Link href="/transactions" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>View Transactions</span>
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="h-64">
            <Bar 
              data={timelineComparisonData} 
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
                        return value + ' days';
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
                        return context.dataset.label + ': ' + context.parsed.y + ' days';
                      }
                    }
                  }
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Investor Allocation and Urgent Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Investor Allocation */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Investor Allocation</h3>
            <Link href="/investors" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>View Investors</span>
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
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

        {/* Urgent Attention Items */}
        <div className="card p-4 col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Urgent Attention Required</h3>
            <Link href="/transactions" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>View All</span>
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              {
                id: 'TRX-2023-042',
                title: 'Electronics Import from Taiwan',
                issue: 'Approval deadline in 2 days',
                status: 'Approval',
                icon: <FiClock className="h-5 w-5" />,
                color: 'amber',
              },
              {
                id: 'OPP-2023-036',
                title: 'Agricultural Commodities Export',
                issue: 'Investor matching deadline tomorrow',
                status: 'Matching',
                icon: <FiUsers className="h-5 w-5" />,
                color: 'red',
              },
              {
                id: 'TRX-2023-039',
                title: 'Medical Equipment Import',
                issue: 'Missing documentation',
                status: 'Due Diligence',
                icon: <FiFileText className="h-5 w-5" />,
                color: 'amber',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 mr-3`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <FiAlertCircle className="h-3 w-3 mr-1 text-red-500" />
                      {item.issue}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs mr-3 ${
                    item.status === 'Approval' 
                      ? 'bg-amber-100 text-amber-800' 
                      : item.status === 'Matching'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                  }`}>
                    {item.status}
                  </span>
                  <Link href={`/transactions/${item.id}`} className="text-silk-600 hover:text-silk-700">
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Trade Opportunities */}
      <div className="card p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Recent Trade Opportunities</h3>
          <Link href="/opportunities" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
            <span>View All Opportunities</span>
            <FiArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Opportunity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Term</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">APR</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Risk</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Match</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Deadline</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 'OPP-2023-042',
                  title: 'Electronics Import Financing',
                  amount: '$1.2M',
                  term: '90 days',
                  apr: '8.5%',
                  risk: 'Low',
                  match: 92,
                  deadline: 'Jun 25, 2023',
                },
                {
                  id: 'OPP-2023-039',
                  title: 'Medical Equipment Import',
                  amount: '$2.4M',
                  term: '120 days',
                  apr: '9.2%',
                  risk: 'Medium',
                  match: 85,
                  deadline: 'Jun 30, 2023',
                },
                {
                  id: 'OPP-2023-036',
                  title: 'Agricultural Commodities Export',
                  amount: '$3.8M',
                  term: '60 days',
                  apr: '7.8%',
                  risk: 'Low',
                  match: 88,
                  deadline: 'Jun 22, 2023',
                },
              ].map((opportunity, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4">
                    <div className="font-medium">{opportunity.title}</div>
                    <div className="text-xs text-gray-500">{opportunity.id}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FiDollarSign className="h-4 w-4 text-gray-400 mr-1" />
                      {opportunity.amount}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FiCalendar className="h-4 w-4 text-gray-400 mr-1" />
                      {opportunity.term}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center text-green-600">
                      <FiPercent className="h-4 w-4 mr-1" />
                      {opportunity.apr}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-1 ${
                        opportunity.risk === 'Low' 
                          ? 'bg-green-100 text-green-600' 
                          : opportunity.risk === 'Medium'
                            ? 'bg-amber-100 text-amber-600'
                            : 'bg-red-100 text-red-600'
                      }`}>
                        <FiShield className="h-3 w-3" />
                      </div>
                      {opportunity.risk}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-silk-100 dark:bg-silk-900/30 flex items-center justify-center text-silk-600 dark:text-silk-400 mr-1 text-xs font-semibold">
                        {opportunity.match}
                      </div>
                      <span className="text-silk-600 dark:text-silk-400">%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FiClock className="h-4 w-4 text-gray-400 mr-1" />
                      {opportunity.deadline}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Link href={`/opportunities/${opportunity.id}`} className="text-silk-600 hover:text-silk-700">
                      <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 