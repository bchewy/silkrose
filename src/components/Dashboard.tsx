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
  FiShield,
  FiTrendingUp
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
import OnboardingTour, { Step } from './OnboardingTour';

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

// Define dashboard tour steps
const dashboardTourSteps: Step[] = [
  {
    target: 'body',
    content: 'Welcome to the SilkRose dashboard! This tour will help you understand the key features.',
    placement: 'center',
    disableBeacon: true,
  },
  {
    target: '.stats-grid',
    content: 'This section shows key metrics at a glance, including available liquidity, active investors, and pending transactions.',
    placement: 'bottom',
  },
  {
    target: '.liquidity-trend',
    content: 'The liquidity trend chart shows how available and deployed capital has changed over time.',
    placement: 'bottom',
  },
  {
    target: '.investor-allocation',
    content: 'This chart breaks down your investors by type, showing the distribution across different categories.',
    placement: 'left',
  },
  {
    target: '.funding-sources',
    content: 'This section shows alternative funding sources beyond traditional banks, including PE firms, family offices, and crowdfunding.',
    placement: 'bottom',
  },
  {
    target: '.research-insights',
    content: 'Stay updated with AI-generated research, market trends, and regulatory changes.',
    placement: 'right',
  },
  {
    target: '.marketing-metrics',
    content: 'Track your marketing efforts and lead generation performance here.',
    placement: 'top',
    disableBeacon: false,
  },
  {
    target: '.urgent-attention',
    content: 'Items requiring your immediate attention appear here. Click on any item to view more details.',
    placement: 'right',
  }
];

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

  // Alternative funding sources data
  const fundingSourcesData = {
    labels: ['PE Firms', 'Family Offices', 'Crowdfunding', 'Traditional Banks'],
    datasets: [
      {
        label: 'Funding Amount (Millions)',
        data: [18, 12, 5, 9],
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

  // Marketing metrics data
  const marketingMetricsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Website Visitors',
        data: [820, 932, 901, 934, 1290, 1330],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Leads Generated',
        data: [120, 132, 101, 134, 190, 230],
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 stats-grid">
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
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Liquidity Trend Chart */}
        <div className="card p-4 liquidity-trend">
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
      </div>

      {/* Investor Allocation and Urgent Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Investor Allocation */}
        <div className="card p-4 investor-allocation">
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

        {/* Alternative Funding Sources */}
        <div className="card p-4 funding-sources">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Alternative Funding Sources</h3>
            <Link href="/funding/pe-firms" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
              <span>View All Sources</span>
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="h-48">
            <Bar 
              data={fundingSourcesData} 
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
                        return context.dataset.label + ': $' + context.parsed.y + 'M';
                      }
                    }
                  }
                },
              }}
            />
          </div>
        </div>

        {/* Urgent Attention Items */}
        <div className="card p-4 urgent-attention">
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

      {/* AI Research & Insights */}
      <div className="card p-4 research-insights">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">AI Research & Market Insights</h3>
          <Link href="/research/ai" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
            <span>View All Research</span>
            <FiArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-3">
          <div className="flex items-start p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <div className="flex-shrink-0 mr-3 mt-1">
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiTarget className="h-4 w-4" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">New PE Firms Entering Trade Finance</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                AI analysis detected 5 new private equity firms showing interest in trade finance investments this month.
              </p>
              <div className="flex items-center mt-2">
                <FiCalendar className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Updated 2 days ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-start p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
            <div className="flex-shrink-0 mr-3 mt-1">
              <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiFileText className="h-4 w-4" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">Regulatory Changes in Singapore</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                New trade finance regulations in Singapore may open up opportunities for alternative funding models.
              </p>
              <div className="flex items-center mt-2">
                <FiCalendar className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Updated 1 week ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-start p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
            <div className="flex-shrink-0 mr-3 mt-1">
              <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiTrendingUp className="h-4 w-4" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">Family Offices Increasing Trade Finance Allocation</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Market trend analysis shows family offices are increasing their trade finance allocation by 18% YoY.
              </p>
              <div className="flex items-center mt-2">
                <FiCalendar className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Updated 3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing & Lead Generation */}
      <div className="card p-4 marketing-metrics">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Marketing & Lead Generation</h3>
          <Link href="/marketing/leads" className="text-sm text-silk-600 hover:text-silk-700 flex items-center">
            <span>View Marketing Dashboard</span>
            <FiArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="h-48">
              <Bar 
                data={marketingMetricsData} 
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
          <div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Email Campaigns</h4>
                  <div className="text-green-600 flex items-center text-xs">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>12%</span>
                  </div>
                </div>
                <p className="text-2xl font-semibold mt-2">85%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Open rate</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">SEO Keywords</h4>
                  <div className="text-green-600 flex items-center text-xs">
                    <FiArrowUp className="h-3 w-3 mr-1" />
                    <span>8</span>
                  </div>
                </div>
                <p className="text-2xl font-semibold mt-2">24</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Top 10 positions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trade Opportunities */}
      <div className="card p-4 trade-opportunities">
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

      {/* Onboarding Tour */}
      <OnboardingTour 
        tourId="dashboard-page"
        steps={dashboardTourSteps}
      />
    </div>
  );
} 