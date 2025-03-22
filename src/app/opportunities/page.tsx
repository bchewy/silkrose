'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import OnboardingTour, { Step } from '../../components/OnboardingTour';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiPlus, 
  FiChevronDown, 
  FiChevronUp,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiPercent,
  FiGlobe,
  FiShield,
  FiTag,
  FiUsers,
  FiStar,
  FiArrowRight,
  FiFileText
} from 'react-icons/fi';

// Filter options
const industryOptions = ['All Industries', 'Electronics', 'Agriculture', 'Pharmaceuticals', 'Textiles', 'Automotive', 'Energy'];
const amountOptions = ['All Amounts', '<$500K', '$500K-$1M', '$1M-$5M', '$5M+'];
const termOptions = ['All Terms', '30-60 days', '60-90 days', '90-180 days', '180+ days'];
const riskOptions = ['All Risk Levels', 'Low', 'Medium', 'High'];

// Tour steps for the opportunities page
const opportunitiesTourSteps: Step[] = [
  {
    target: 'body',
    content: 'Welcome to the Trade Opportunities page! This page helps you discover and manage financing opportunities.',
    placement: 'center',
    disableBeacon: true,
  },
  {
    target: '.card:first-child',
    content: 'Use these filters to find opportunities that match specific criteria like industry, amount, term, and risk level.',
    placement: 'bottom',
  },
  {
    target: '.card:last-child',
    content: 'Each card represents a trade financing opportunity. Click the arrow to see more details about each opportunity.',
    placement: 'top',
  },
  {
    target: '.btn-primary',
    content: 'Click here to add a new opportunity to the platform.',
    placement: 'left',
  },
  {
    target: '.btn-outline:first-child',
    content: 'Access advanced filters for more specific search parameters.',
    placement: 'bottom',
  },
  {
    target: '.btn-outline:nth-child(2)',
    content: 'Export your current view of opportunities to various formats.',
    placement: 'bottom',
  }
];

export default function OpportunitiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedAmount, setSelectedAmount] = useState('All Amounts');
  const [selectedTerm, setSelectedTerm] = useState('All Terms');
  const [selectedRisk, setSelectedRisk] = useState('All Risk Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOpportunity, setExpandedOpportunity] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedOpportunity === index) {
      setExpandedOpportunity(null);
    } else {
      setExpandedOpportunity(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Trade Opportunities</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Available financing opportunities for investors</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-outline flex items-center">
              <FiFilter className="mr-2 h-4 w-4" />
              Advanced Filters
            </button>
            <button className="btn-outline flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add Opportunity
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search opportunities..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div>
              <select 
                className="input" 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
              >
                {amountOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
              >
                {termOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select 
                className="input"
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
              >
                {riskOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Opportunity Cards */}
        <div className="space-y-4">
          {[
            {
              id: 'OPP-2023-042',
              title: 'Electronics Import Financing',
              company: 'TechGlobal Inc.',
              industry: 'Electronics',
              amount: '$1.2M',
              term: '90 days',
              apr: '8.5%',
              risk: 'Low',
              country: 'Taiwan',
              matchScore: 92,
              status: 'Open',
              deadline: 'Jun 25, 2023',
              description: 'Financing for import of consumer electronics from Taiwan. Established buyer with 5+ years of trading history and strong financials.',
              documents: ['Purchase Order', 'Invoice', 'Bill of Lading', 'Insurance Certificate'],
              collateral: 'Goods in transit',
              requirements: ['Minimum investment: $100,000', 'KYC/AML verification required', 'Accredited investors only'],
              matchedInvestors: [
                { name: 'Horizon Capital', matchScore: 95, status: 'Interested' },
                { name: 'Global Trade Partners', matchScore: 88, status: 'Reviewing' }
              ]
            },
            {
              id: 'OPP-2023-039',
              title: 'Medical Equipment Import',
              company: 'HealthTech Solutions',
              industry: 'Pharmaceuticals',
              amount: '$2.4M',
              term: '120 days',
              apr: '9.2%',
              risk: 'Medium',
              country: 'Germany',
              matchScore: 85,
              status: 'Open',
              deadline: 'Jun 30, 2023',
              description: 'Financing for import of specialized medical equipment from Germany. Buyer is a growing healthcare provider with government contracts.',
              documents: ['Purchase Order', 'Invoice', 'Packing List', 'Certificate of Origin'],
              collateral: 'Equipment + 20% cash deposit',
              requirements: ['Minimum investment: $250,000', 'KYC/AML verification required', 'Healthcare industry experience preferred'],
              matchedInvestors: [
                { name: 'Westfield Family Office', matchScore: 90, status: 'Due Diligence' }
              ]
            },
            {
              id: 'OPP-2023-036',
              title: 'Agricultural Commodities Export',
              company: 'FarmFresh Exports',
              industry: 'Agriculture',
              amount: '$3.8M',
              term: '60 days',
              apr: '7.8%',
              risk: 'Low',
              country: 'Brazil to China',
              matchScore: 88,
              status: 'Open',
              deadline: 'Jun 22, 2023',
              description: 'Financing for export of agricultural commodities from Brazil to China. Established exporter with long-term contracts with Chinese buyers.',
              documents: ['Sales Contract', 'Invoice', 'Phytosanitary Certificate', 'Bill of Lading'],
              collateral: 'Goods in transit + Credit insurance',
              requirements: ['Minimum investment: $500,000', 'KYC/AML verification required'],
              matchedInvestors: [
                { name: 'Global Trade Partners', matchScore: 94, status: 'Interested' },
                { name: 'Eastwood Investments', matchScore: 86, status: 'Reviewing' }
              ]
            },
            {
              id: 'OPP-2023-033',
              title: 'Textile Manufacturing Equipment',
              company: 'ModernFabrics Ltd.',
              industry: 'Textiles',
              amount: '$850K',
              term: '180 days',
              apr: '10.2%',
              risk: 'Medium',
              country: 'Italy',
              matchScore: 78,
              status: 'Open',
              deadline: 'Jul 5, 2023',
              description: 'Financing for import of specialized textile manufacturing equipment from Italy. Expanding business with growing export orders.',
              documents: ['Purchase Order', 'Invoice', 'Technical Specifications'],
              collateral: 'Equipment + Personal guarantee',
              requirements: ['Minimum investment: $100,000', 'KYC/AML verification required'],
              matchedInvestors: [
                { name: 'Silk Road Ventures', matchScore: 82, status: 'Reviewing' }
              ]
            },
          ].map((opportunity, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{opportunity.title}</h3>
                    <span className="ml-2 text-sm text-gray-500">{opportunity.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiDollarSign className="mr-1 h-4 w-4" /> {opportunity.amount}
                    </span>
                    <span className="flex items-center">
                      <FiCalendar className="mr-1 h-4 w-4" /> {opportunity.term}
                    </span>
                    <span className="flex items-center">
                      <FiPercent className="mr-1 h-4 w-4" /> {opportunity.apr}
                    </span>
                    <span className="flex items-center">
                      <FiTag className="mr-1 h-4 w-4" /> {opportunity.industry}
                    </span>
                    <span className="flex items-center">
                      <FiGlobe className="mr-1 h-4 w-4" /> {opportunity.country}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-silk-100 dark:bg-silk-900/30 flex items-center justify-center text-silk-600 dark:text-silk-400 mr-2">
                      <span className="font-semibold">{opportunity.matchScore}</span>
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-silk-600 dark:text-silk-400">Match Score</div>
                      <div className="text-gray-500">{opportunity.matchedInvestors.length} investors</div>
                    </div>
                  </div>
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      opportunity.status === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : opportunity.status === 'Closed'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {expandedOpportunity === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedOpportunity === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className="font-medium mb-2">Opportunity Details</h4>
                        <p className="text-gray-600 dark:text-gray-400">{opportunity.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Company Information</h4>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mr-3">
                            {opportunity.company.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{opportunity.company}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{opportunity.industry}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Risk Assessment</h4>
                        <div className="flex items-center">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
                            opportunity.risk === 'Low' 
                              ? 'bg-green-100 text-green-600' 
                              : opportunity.risk === 'Medium'
                                ? 'bg-amber-100 text-amber-600'
                                : 'bg-red-100 text-red-600'
                          }`}>
                            <FiShield className="h-4 w-4" />
                          </div>
                          <span className="font-medium">{opportunity.risk} Risk</span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm font-medium mb-1">Collateral</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{opportunity.collateral}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Required Documents</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {opportunity.documents.map((doc, i) => (
                            <div key={i} className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded">
                              <FiFileText className="h-5 w-5 text-gray-400 mr-2" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Investment Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          {opportunity.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Right Column - Matched Investors */}
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium">Matched Investors</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            <FiClock className="inline mr-1" /> Deadline: {opportunity.deadline}
                          </span>
                        </div>
                        
                        <div className="space-y-3">
                          {opportunity.matchedInvestors.map((investor, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-silk-100 dark:bg-silk-900/30 flex items-center justify-center text-silk-600 dark:text-silk-400 mr-2">
                                  <FiUsers className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium">{investor.name}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Match: <span className="text-silk-600 dark:text-silk-400">{investor.matchScore}%</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  investor.status === 'Interested' 
                                    ? 'bg-green-100 text-green-800' 
                                    : investor.status === 'Due Diligence'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-amber-100 text-amber-800'
                                }`}>
                                  {investor.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <button className="btn-primary w-full">
                            Find More Investors
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-silk-50 dark:bg-silk-900/10 border border-silk-100 dark:border-silk-800/20 rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center text-silk-700 dark:text-silk-400">
                          <FiStar className="mr-2 h-4 w-4" /> Quick Actions
                        </h4>
                        <div className="space-y-2">
                          <button className="btn-outline w-full justify-between">
                            <span>Edit Opportunity</span>
                            <FiArrowRight className="h-4 w-4" />
                          </button>
                          <button className="btn-outline w-full justify-between">
                            <span>Send to Investors</span>
                            <FiArrowRight className="h-4 w-4" />
                          </button>
                          <button className="btn-outline w-full justify-between">
                            <span>View Similar Opportunities</span>
                            <FiArrowRight className="h-4 w-4" />
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
            Showing 4 of 18 opportunities
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

      {/* Onboarding Tour */}
      <OnboardingTour 
        tourId="opportunities-page"
        steps={opportunitiesTourSteps}
      />
    </DashboardLayout>
  );
} 