'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiGlobe, 
  FiTrendingUp, 
  FiTrendingDown,
  FiDollarSign,
  FiBarChart2,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiTarget,
  FiArrowRight,
  FiRefreshCw
} from 'react-icons/fi';

// Filter options
const regions = ['All Regions', 'Asia Pacific', 'Europe', 'North America', 'Latin America', 'Middle East', 'Africa'];
const industries = ['All Industries', 'Electronics', 'Agriculture', 'Pharmaceuticals', 'Textiles', 'Automotive', 'Energy'];
const timeframes = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last Year', 'All Time'];

export default function GlobalMarketsPage() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 30 Days');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMarket, setExpandedMarket] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedMarket === index) {
      setExpandedMarket(null);
    } else {
      setExpandedMarket(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Global Markets</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Monitor market trends and trade opportunities worldwide</p>
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

        {/* Currency Exchange Rates */}
        <div className="card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Key Currency Exchange Rates</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: Today, 10:45 AM</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { pair: 'EUR/USD', rate: '1.0842', change: '+0.0023', percent: '+0.21%', trend: 'up' },
              { pair: 'USD/JPY', rate: '149.62', change: '-0.78', percent: '-0.52%', trend: 'down' },
              { pair: 'GBP/USD', rate: '1.2651', change: '+0.0042', percent: '+0.33%', trend: 'up' },
              { pair: 'USD/CNY', rate: '7.2468', change: '-0.0125', percent: '-0.17%', trend: 'down' },
              { pair: 'USD/BRL', rate: '5.0735', change: '+0.0320', percent: '+0.63%', trend: 'up' },
              { pair: 'USD/INR', rate: '83.4250', change: '-0.0650', percent: '-0.08%', trend: 'down' },
              { pair: 'AUD/USD', rate: '0.6582', change: '+0.0018', percent: '+0.27%', trend: 'up' },
              { pair: 'USD/MXN', rate: '16.7520', change: '-0.0380', percent: '-0.23%', trend: 'down' },
            ].map((currency, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{currency.pair}</p>
                  <p className={`text-xs flex items-center ${
                    currency.trend === 'up' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {currency.trend === 'up' 
                      ? <FiTrendingUp className="mr-1 h-3 w-3" /> 
                      : <FiTrendingDown className="mr-1 h-3 w-3" />
                    }
                    {currency.percent}
                  </p>
                </div>
                <div className="mt-1 flex justify-between items-center">
                  <p className="text-lg">{currency.rate}</p>
                  <p className={`text-xs ${
                    currency.trend === 'up' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {currency.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search markets..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div>
              <select 
                className="input" 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
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
        
        {/* Market Trends */}
        <div className="space-y-4">
          {[
            {
              id: 'MKT-APAC-001',
              region: 'Asia Pacific',
              title: 'Semiconductor Supply Chain Recovery',
              trend: 'Positive',
              impact: 'High',
              industries: ['Electronics', 'Automotive', 'Technology'],
              countries: ['Taiwan', 'South Korea', 'Japan', 'China'],
              description: 'Semiconductor manufacturing and supply chains are showing strong recovery in the Asia Pacific region, with increased production capacity and reduced lead times.',
              opportunities: 3,
              insights: [
                'Taiwan\'s semiconductor exports increased by 15% in Q2 2023',
                'Lead times for automotive chips reduced from 32 weeks to 18 weeks',
                'New manufacturing facilities in South Korea expected to increase regional capacity by 22%'
              ],
              relatedOpportunities: [
                { id: 'OPP-2023-042', title: 'Electronics Import Financing', amount: '$1.2M', term: '90 days' },
                { id: 'OPP-2023-045', title: 'Semiconductor Equipment Import', amount: '$3.5M', term: '120 days' },
                { id: 'OPP-2023-048', title: 'Consumer Electronics Supply Chain', amount: '$2.8M', term: '60 days' }
              ]
            },
            {
              id: 'MKT-EUR-002',
              region: 'Europe',
              title: 'Green Energy Transition Acceleration',
              trend: 'Positive',
              impact: 'Medium',
              industries: ['Energy', 'Manufacturing', 'Automotive'],
              countries: ['Germany', 'France', 'Netherlands', 'Denmark'],
              description: 'European markets are accelerating green energy transition with increased investments in renewable energy infrastructure, electric vehicles, and sustainable manufacturing.',
              opportunities: 4,
              insights: [
                'EU Green Deal funding increased by €15B for 2023-2024',
                'Electric vehicle sales in Europe grew by 47% year-over-year',
                'Wind and solar capacity additions expected to double in next 24 months'
              ],
              relatedOpportunities: [
                { id: 'OPP-2023-051', title: 'Wind Turbine Components Import', amount: '$4.2M', term: '180 days' },
                { id: 'OPP-2023-053', title: 'EV Battery Manufacturing Equipment', amount: '$5.8M', term: '120 days' },
                { id: 'OPP-2023-055', title: 'Solar Panel Supply Chain', amount: '$2.1M', term: '90 days' },
                { id: 'OPP-2023-057', title: 'Green Hydrogen Infrastructure', amount: '$7.5M', term: '240 days' }
              ]
            },
            {
              id: 'MKT-LATAM-003',
              region: 'Latin America',
              title: 'Agricultural Commodities Demand Surge',
              trend: 'Positive',
              impact: 'Medium',
              industries: ['Agriculture', 'Food Processing', 'Logistics'],
              countries: ['Brazil', 'Argentina', 'Chile', 'Colombia'],
              description: 'Latin American agricultural exports are experiencing strong demand growth, particularly for soybeans, corn, coffee, and fruits, driven by global food security concerns and supply chain diversification.',
              opportunities: 2,
              insights: [
                'Brazil\'s soybean exports increased by 12% in volume and 18% in value',
                'New trade agreements with Asian markets opened additional export channels',
                'Investment in agricultural technology and infrastructure growing at 15% annually'
              ],
              relatedOpportunities: [
                { id: 'TRX-2023-036', title: 'Agricultural Commodities Export', amount: '$3.8M', term: '60 days' },
                { id: 'OPP-2023-062', title: 'Coffee Export Financing', amount: '$1.5M', term: '45 days' }
              ]
            },
            {
              id: 'MKT-MENA-004',
              region: 'Middle East',
              title: 'Economic Diversification Initiatives',
              trend: 'Neutral',
              impact: 'Medium',
              industries: ['Technology', 'Tourism', 'Manufacturing', 'Healthcare'],
              countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman'],
              description: 'Middle Eastern economies are accelerating diversification away from oil dependency, with significant investments in technology, tourism, manufacturing, and healthcare sectors.',
              opportunities: 3,
              insights: [
                'UAE\'s non-oil sector grew by 5.9% in the past year',
                'Saudi Arabia\'s Vision 2030 investments increased by 22% in technology sector',
                'Healthcare and life sciences receiving $12B in regional investments'
              ],
              relatedOpportunities: [
                { id: 'OPP-2023-065', title: 'Medical Technology Export', amount: '$2.7M', term: '90 days' },
                { id: 'OPP-2023-068', title: 'Manufacturing Equipment Financing', amount: '$5.3M', term: '120 days' },
                { id: 'OPP-2023-071', title: 'Technology Infrastructure', amount: '$4.1M', term: '180 days' }
              ]
            },
          ].map((market, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{market.title}</h3>
                    <span className="ml-2 text-sm text-gray-500">{market.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiGlobe className="mr-1 h-4 w-4" /> {market.region}
                    </span>
                    <span className="flex items-center">
                      <FiBarChart2 className="mr-1 h-4 w-4" /> Impact: {market.impact}
                    </span>
                    <span className="flex items-center">
                      <FiTarget className="mr-1 h-4 w-4" /> {market.opportunities} Opportunities
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      market.trend === 'Positive' 
                        ? 'bg-green-100 text-green-800' 
                        : market.trend === 'Negative'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {market.trend} Trend
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {expandedMarket === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedMarket === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className="font-medium mb-2">Market Overview</h4>
                        <p className="text-gray-600 dark:text-gray-400">{market.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Insights</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          {market.insights.map((insight, i) => (
                            <li key={i}>{insight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Affected Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {market.industries.map((industry, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Countries</h4>
                        <div className="flex flex-wrap gap-2">
                          {market.countries.map((country, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center">
                              <FiGlobe className="mr-1 h-3 w-3" />
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Opportunities */}
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium mb-4">Related Opportunities</h4>
                        <div className="space-y-3">
                          {market.relatedOpportunities.map((opportunity, i) => (
                            <div key={i} className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{opportunity.title}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{opportunity.id}</p>
                                </div>
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-silk-100 dark:bg-silk-900/30 flex items-center justify-center text-silk-600 dark:text-silk-400">
                                    <FiTarget className="h-4 w-4" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 flex justify-between">
                                <div className="flex items-center text-sm">
                                  <FiDollarSign className="mr-1 h-3 w-3 text-gray-500" />
                                  <span>{opportunity.amount}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <FiCalendar className="mr-1 h-3 w-3 text-gray-500" />
                                  <span>{opportunity.term}</span>
                                </div>
                              </div>
                              <div className="mt-2 flex justify-end">
                                <button className="text-xs text-silk-600 hover:text-silk-700 flex items-center">
                                  View Details
                                  <FiArrowRight className="ml-1 h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-silk-50 dark:bg-silk-900/10 border border-silk-100 dark:border-silk-800/20 rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center text-silk-700 dark:text-silk-400">
                          <FiBarChart2 className="mr-2 h-4 w-4" /> Market Analysis
                        </h4>
                        <div className="space-y-2">
                          <button className="btn-outline w-full justify-between">
                            <span>View Detailed Report</span>
                            <FiArrowRight className="h-4 w-4" />
                          </button>
                          <button className="btn-outline w-full justify-between">
                            <span>Export Market Data</span>
                            <FiDownload className="h-4 w-4" />
                          </button>
                          <button className="btn-primary w-full justify-between">
                            <span>Find Opportunities</span>
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
            Showing 4 of 15 market trends
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