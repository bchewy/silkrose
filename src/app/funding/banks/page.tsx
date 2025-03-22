'use client';

import { useState } from 'react';
import DashboardLayout from '../../dashboard-layout';
import { 
  FiDollarSign, 
  FiTrendingUp, 
  FiUsers, 
  FiPercent,
  FiCalendar, 
  FiClock,
  FiFileText,
  FiSearch,
  FiFilter,
  FiPlus,
  FiGlobe,
  FiCheck,
  FiExternalLink,
  FiMapPin,
  FiPhone,
  FiMail,
  FiBarChart2,
  FiXCircle,
  FiCheckCircle,
  FiChevronRight,
  FiInfo
} from 'react-icons/fi';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';

export default function BanksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('All');
  const [activeTab, setActiveTab] = useState('traditional');
  
  // Mock bank data
  const banks = [
    {
      id: 1,
      name: 'Global Trade Bank',
      logo: '/images/bank1.png',
      region: 'Global',
      headquarters: 'London, UK',
      specialties: ['Trade Finance', 'LC Issuance', 'Export Credit'],
      minRevenue: '$10M+',
      maxLoanSize: '$25M',
      interestRates: '4.5% - 7.2%',
      processingTime: '2-4 weeks',
      website: 'https://globaltrade.bank',
      email: 'tradefinance@gtb.com',
      phone: '+44 20 7123 4567',
      requirements: [
        '3+ years in business',
        'Credit score 680+',
        'Profitable for last 2 years',
        'Trade history documentation'
      ]
    },
    {
      id: 2,
      name: 'Asia Export Bank',
      logo: '/images/bank2.png',
      region: 'Asia',
      headquarters: 'Singapore',
      specialties: ['Supply Chain Finance', 'Export LC', 'Working Capital'],
      minRevenue: '$5M+',
      maxLoanSize: '$15M',
      interestRates: '5.0% - 8.5%',
      processingTime: '1-3 weeks',
      website: 'https://asiaexport.bank',
      email: 'trade@aeb.com',
      phone: '+65 6789 0123',
      requirements: [
        '2+ years in business',
        'Asia market presence',
        'Export documentation',
        'Financial statements for 2 years'
      ]
    },
    {
      id: 3,
      name: 'North American Trade Finance',
      logo: '/images/bank3.png',
      region: 'North America',
      headquarters: 'New York, USA',
      specialties: ['Inventory Financing', 'Receivables Finance', 'Import/Export'],
      minRevenue: '$15M+',
      maxLoanSize: '$50M',
      interestRates: '4.2% - 6.8%',
      processingTime: '3-5 weeks',
      website: 'https://natradefinance.com',
      email: 'financing@natf.com',
      phone: '+1 212 555 7890',
      requirements: [
        '5+ years in business',
        'Credit score 700+',
        'US-based entity',
        'Audited financial statements'
      ]
    },
    {
      id: 4,
      name: 'Euro Trade Bank',
      logo: '/images/bank4.png',
      region: 'Europe',
      headquarters: 'Frankfurt, Germany',
      specialties: ['Structured Trade Finance', 'Commodity Finance', 'Export Credit'],
      minRevenue: '$8M+',
      maxLoanSize: '$30M',
      interestRates: '3.5% - 6.0%',
      processingTime: '2-4 weeks',
      website: 'https://eurotradebank.eu',
      email: 'tradefinance@etb.eu',
      phone: '+49 69 1234 5678',
      requirements: [
        '3+ years in business',
        'EU registration',
        'Trade history with EU partners',
        'Financial statements for 3 years'
      ]
    },
    {
      id: 5,
      name: 'LATAM Financial Services',
      logo: '/images/bank5.png',
      region: 'Latin America',
      headquarters: 'São Paulo, Brazil',
      specialties: ['Trade Finance', 'FX Risk Management', 'Supply Chain'],
      minRevenue: '$3M+',
      maxLoanSize: '$12M',
      interestRates: '6.5% - 9.8%',
      processingTime: '2-5 weeks',
      website: 'https://latamfs.com',
      email: 'finance@latamfs.com',
      phone: '+55 11 9876 5432',
      requirements: [
        '2+ years in business',
        'Latin American operations',
        'Local registration in at least one LATAM country',
        'Trade flow documentation'
      ]
    },
    {
      id: 6,
      name: 'Middle East Trade Bank',
      logo: '/images/bank6.png',
      region: 'Middle East',
      headquarters: 'Dubai, UAE',
      specialties: ['Islamic Finance', 'Commodity Trade', 'Project Finance'],
      minRevenue: '$7M+',
      maxLoanSize: '$20M',
      interestRates: '5.0% - 7.5%',
      processingTime: '2-3 weeks',
      website: 'https://metb.ae',
      email: 'tradefinance@metb.ae',
      phone: '+971 4 123 4567',
      requirements: [
        '3+ years in business',
        'Registered in GCC or trading with GCC',
        'Sharia-compliant operations option',
        'Trade history documentation'
      ]
    },
  ];

  // Digital banks data
  const digitalBanks = [
    {
      id: 7,
      name: 'Trade Flow Digital',
      logo: '/images/dbank1.png',
      region: 'Global',
      headquarters: 'London, UK',
      specialties: ['Supply Chain Finance', 'Invoice Factoring', 'Digital LC'],
      minRevenue: '$1M+',
      maxLoanSize: '$5M',
      interestRates: '5.8% - 8.5%',
      processingTime: '3-5 days',
      website: 'https://tradeflowdigital.com',
      email: 'finance@tradeflowdigital.com',
      phone: '+44 20 8765 4321',
      features: [
        'API integration with ERPs',
        'Real-time trade finance approval',
        'Blockchain-based LC',
        'Cross-border payments in 24 hours'
      ]
    },
    {
      id: 8,
      name: 'FinTech Trade',
      logo: '/images/dbank2.png',
      region: 'North America',
      headquarters: 'San Francisco, USA',
      specialties: ['Working Capital', 'Inventory Finance', 'Digital Factoring'],
      minRevenue: '$500K+',
      maxLoanSize: '$3M',
      interestRates: '6.0% - 9.0%',
      processingTime: '1-2 days',
      website: 'https://fintrade.com',
      email: 'support@fintrade.com',
      phone: '+1 415 555 1234',
      features: [
        'Mobile-first application process',
        'AI-powered credit decisions',
        'Same-day funding options',
        'Integration with accounting software'
      ]
    },
    {
      id: 9,
      name: 'TradeTech Asia',
      logo: '/images/dbank3.png',
      region: 'Asia',
      headquarters: 'Singapore',
      specialties: ['SME Trade Finance', 'Digital LC', 'Supply Chain'],
      minRevenue: '$750K+',
      maxLoanSize: '$2.5M',
      interestRates: '6.5% - 10.0%',
      processingTime: '2-3 days',
      website: 'https://tradetech.asia',
      email: 'hello@tradetech.asia',
      phone: '+65 6543 2109',
      features: [
        'Multi-currency accounts',
        'Digital KYC process',
        'Smart contracts for trade agreements',
        'Cross-border payments in 6 currencies'
      ]
    }
  ];

  // Combine all data based on active tab
  const allBanks = activeTab === 'traditional' ? banks : digitalBanks;

  // Filter and search logic
  const filteredBanks = allBanks.filter(bank => {
    const matchesSearch = bank.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          bank.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRegion = filterRegion === 'All' || bank.region === filterRegion;
    return matchesSearch && matchesRegion;
  });

  // Get unique regions for filter
  const regions = ['All', ...new Set([...banks, ...digitalBanks].map(bank => bank.region))];
  
  // Comparison chart data
  const comparisonData = {
    labels: ['Processing Time', 'Min Revenue Req.', 'Interest Rates', 'Documentation'],
    datasets: [
      {
        label: 'Traditional Banks',
        data: [8, 7, 6, 9],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Digital Banks',
        data: [3, 4, 7, 5],
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      }
    ],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Bank Financing</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Compare and connect with banks offering trade finance solutions
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add Connection
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Available Banks</p>
                <h3 className="text-2xl font-semibold mt-1">{banks.length + digitalBanks.length}</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+3 new this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FiGlobe className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Interest Rate</p>
                <h3 className="text-2xl font-semibold mt-1">6.2%</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">-0.3% vs last quarter</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <FiPercent className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Processing</p>
                <h3 className="text-2xl font-semibold mt-1">12 days</h3>
                <div className="flex items-center mt-1 text-red-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2 days vs last month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <FiClock className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Connections</p>
                <h3 className="text-2xl font-semibold mt-1">3</h3>
                <div className="flex items-center mt-1 text-green-600">
                  <FiTrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+1 this quarter</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FiUsers className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'traditional'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Traditional Banks
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'digital'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Digital Banks
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'comparison'
                  ? 'border-silk-500 text-silk-600 dark:text-silk-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Comparison
            </button>
          </nav>
        </div>

        {(activeTab === 'traditional' || activeTab === 'digital') && (
          <>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search banks or specialties..."
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

            {/* Banks Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bank</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Region</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Specialties</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Min Revenue</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Max Loan</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interest Rate</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Processing</th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredBanks.length > 0 ? (
                    filteredBanks.map((bank) => (
                      <tr key={bank.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                              {/* Replace with img if logos are available */}
                              <FiGlobe className="h-5 w-5" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium">{bank.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{bank.headquarters}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">{bank.region}</td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            {bank.specialties.map((specialty, i) => (
                              <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm">{bank.minRevenue}</td>
                        <td className="py-4 px-4 text-sm">{bank.maxLoanSize}</td>
                        <td className="py-4 px-4 text-sm">{bank.interestRates}</td>
                        <td className="py-4 px-4 text-sm">{bank.processingTime}</td>
                        <td className="py-4 px-4 text-right">
                          <Link 
                            href={`/funding/banks/${bank.id}`}
                            className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400 text-sm font-medium mr-4"
                          >
                            Details
                          </Link>
                          <Link 
                            href={bank.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-silk-600 hover:text-silk-700 dark:hover:text-silk-400 text-sm font-medium"
                          >
                            <FiExternalLink className="inline h-4 w-4" />
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-gray-500 dark:text-gray-400">
                        No banks found matching your criteria. Try adjusting your search or filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-medium mb-4">Comparison: Traditional vs Digital Banks</h3>
              <div className="h-64">
                <Bar 
                  data={comparisonData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 10,
                        title: {
                          display: true,
                          text: 'Score (lower is better)',
                        },
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
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    <FiGlobe className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium">Traditional Banks</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-green-500">
                      <FiCheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Higher Loan Limits</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Traditional banks typically offer larger financing amounts for established businesses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-green-500">
                      <FiCheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Established Relationships</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Long-standing relationships with correspondent banks globally.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-red-500">
                      <FiXCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Lengthy Processing</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Approval processes can take several weeks, with extensive documentation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-red-500">
                      <FiXCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Higher Revenue Requirements</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Often require companies to have multi-million dollar revenues.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                    <FiBarChart2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium">Digital Banks</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-green-500">
                      <FiCheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Fast Processing</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Digital-first approach enables approvals in days rather than weeks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-green-500">
                      <FiCheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Lower Revenue Thresholds</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        More accessible to small and medium-sized businesses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-red-500">
                      <FiXCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Lower Financing Limits</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Typically cap out at lower amounts compared to traditional banks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-2 text-green-500">
                      <FiCheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tech Integration</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        API connections to existing systems and real-time tracking.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                  <FiInfo className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-medium">How to Choose</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Business Size</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Larger businesses ({'>'}$15M revenue) may find better terms with traditional banks, while smaller businesses often have better experiences with digital banks.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Speed vs Amount</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Consider your priority: faster processing (digital banks) or higher funding amounts (traditional banks).
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Specific Needs</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Some specialized trade finance needs (like certain LC types) might still be better served by traditional banks with global networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 