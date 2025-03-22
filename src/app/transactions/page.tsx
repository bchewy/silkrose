'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle,
  FiFileText,
  FiDollarSign,
  FiTruck,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiCalendar,
  FiEye
} from 'react-icons/fi';

const transactionStatuses = ['All Statuses', 'Documentation', 'Due Diligence', 'Approval', 'Funding', 'Active', 'Completed'];
const transactionTypes = ['All Types', 'Import', 'Export', 'Domestic'];
const transactionSizes = ['All Sizes', '<$500K', '$500K-$1M', '$1M-$5M', '$5M+'];

export default function TransactionsPage() {
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedSize, setSelectedSize] = useState('All Sizes');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTransaction, setExpandedTransaction] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    if (expandedTransaction === index) {
      setExpandedTransaction(null);
    } else {
      setExpandedTransaction(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Transaction Flow</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Monitor and manage trade finance transactions</p>
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
            <button className="btn-outline flex items-center">
              <FiCalendar className="mr-2 h-4 w-4" />
              Timeline View
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Search</label>
              <input
                type="text"
                placeholder="Search transactions..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-[35px] text-gray-400" />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Status</label>
              <select 
                className="input" 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {transactionStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Type</label>
              <select 
                className="input"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {transactionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Amount</label>
              <select 
                className="input"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {transactionSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Transaction Flow Cards */}
        <div className="space-y-4">
          {[
            {
              id: 'TRX-2023-042',
              title: 'Electronics Import from Taiwan',
              amount: '$1.2M',
              client: 'TechGlobal Inc.',
              investors: ['Horizon Capital', 'Global Trade Partners'],
              status: 'Approval',
              progress: 60,
              timeline: [
                { stage: 'Documentation', status: 'completed', date: 'Jun 10, 2023', duration: '3 days' },
                { stage: 'Due Diligence', status: 'completed', date: 'Jun 15, 2023', duration: '5 days' },
                { stage: 'Approval', status: 'in-progress', date: 'Jun 20, 2023', duration: '2 days (est.)' },
                { stage: 'Funding', status: 'pending', date: 'Jun 22, 2023 (est.)', duration: '1 day (est.)' },
                { stage: 'Active', status: 'pending', date: 'Jun 23, 2023 (est.)', duration: '90 days' },
                { stage: 'Settlement', status: 'pending', date: 'Sep 21, 2023 (est.)', duration: '1 day (est.)' }
              ],
              traditional: '45-60 days',
              silkrose: '12 days',
              documents: ['Purchase Order', 'Invoice', 'Bill of Lading', 'Insurance Certificate']
            },
            {
              id: 'TRX-2023-039',
              title: 'Medical Equipment Import',
              amount: '$2.4M',
              client: 'HealthTech Solutions',
              investors: ['Westfield Family Office'],
              status: 'Due Diligence',
              progress: 30,
              timeline: [
                { stage: 'Documentation', status: 'completed', date: 'Jun 8, 2023', duration: '3 days' },
                { stage: 'Due Diligence', status: 'in-progress', date: 'Jun 12, 2023', duration: '5 days (est.)' },
                { stage: 'Approval', status: 'pending', date: 'Jun 18, 2023 (est.)', duration: '2 days (est.)' },
                { stage: 'Funding', status: 'pending', date: 'Jun 20, 2023 (est.)', duration: '1 day (est.)' },
                { stage: 'Active', status: 'pending', date: 'Jun 21, 2023 (est.)', duration: '120 days' },
                { stage: 'Settlement', status: 'pending', date: 'Oct 19, 2023 (est.)', duration: '1 day (est.)' }
              ],
              traditional: '60-75 days',
              silkrose: '14 days (est.)',
              documents: ['Purchase Order', 'Invoice', 'Packing List', 'Certificate of Origin']
            },
            {
              id: 'TRX-2023-036',
              title: 'Agricultural Commodities Export',
              amount: '$3.8M',
              client: 'FarmFresh Exports',
              investors: ['Global Trade Partners', 'Eastwood Investments'],
              status: 'Active',
              progress: 80,
              timeline: [
                { stage: 'Documentation', status: 'completed', date: 'May 25, 2023', duration: '3 days' },
                { stage: 'Due Diligence', status: 'completed', date: 'May 29, 2023', duration: '4 days' },
                { stage: 'Approval', status: 'completed', date: 'Jun 2, 2023', duration: '2 days' },
                { stage: 'Funding', status: 'completed', date: 'Jun 3, 2023', duration: '1 day' },
                { stage: 'Active', status: 'in-progress', date: 'Jun 4, 2023', duration: '90 days' },
                { stage: 'Settlement', status: 'pending', date: 'Sep 2, 2023 (est.)', duration: '1 day (est.)' }
              ],
              traditional: '50-65 days',
              silkrose: '10 days',
              documents: ['Sales Contract', 'Invoice', 'Phytosanitary Certificate', 'Bill of Lading']
            },
          ].map((transaction, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium">{transaction.title}</h3>
                    <span className="ml-2 text-sm text-gray-500">{transaction.id}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <FiDollarSign className="mr-1 h-4 w-4" /> {transaction.amount}
                    </span>
                    <span className="flex items-center">
                      <FiTruck className="mr-1 h-4 w-4" /> {transaction.client}
                    </span>
                    <span className="flex items-center">
                      <FiFileText className="mr-1 h-4 w-4" /> {transaction.documents.length} Documents
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      transaction.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : transaction.status === 'Completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {expandedTransaction === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-silk-600 to-rose-500 h-2.5 rounded-full" 
                    style={{ width: `${transaction.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Start</span>
                  <span>Completion</span>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedTransaction === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  {/* Timeline Visualization */}
                  <h4 className="font-medium mb-4">Transaction Timeline</h4>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    
                    {/* Timeline Steps */}
                    <div className="space-y-8 relative">
                      {transaction.timeline.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex">
                          <div className="flex-shrink-0 relative">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                              step.status === 'completed' 
                                ? 'bg-green-100 text-green-600' 
                                : step.status === 'in-progress'
                                  ? 'bg-amber-100 text-amber-600'
                                  : 'bg-gray-100 text-gray-400 dark:bg-gray-800'
                            }`}>
                              {step.status === 'completed' 
                                ? <FiCheckCircle className="h-5 w-5" /> 
                                : step.status === 'in-progress'
                                  ? <FiClock className="h-5 w-5" />
                                  : stepIndex + 1
                              }
                            </div>
                          </div>
                          <div className="ml-4 flex-grow pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{step.stage}</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{step.date}</p>
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Duration: {step.duration}
                              </div>
                            </div>
                            {step.status === 'in-progress' && (
                              <div className="mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-md text-sm">
                                <p className="text-amber-800 dark:text-amber-400 flex items-center">
                                  <FiClock className="mr-2 h-4 w-4" />
                                  In progress - Awaiting final approval from underwriting team
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Comparison */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h5 className="font-medium mb-2">Traditional Banking Process</h5>
                      <p className="text-gray-500 dark:text-gray-400">Estimated time: {transaction.traditional}</p>
                      <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-gray-400 dark:bg-gray-600 h-2.5 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-silk-50 dark:bg-gray-800 border-silk-100 dark:border-silk-800 rounded-lg">
                      <h5 className="font-medium mb-2 text-silk-700 dark:text-silk-400">SilkRose Process</h5>
                      <p className="text-gray-500 dark:text-gray-400">Estimated time: {transaction.silkrose}</p>
                      <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-silk-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Investors */}
                  <div className="mt-6">
                    <h5 className="font-medium mb-2">Participating Investors</h5>
                    <div className="flex flex-wrap gap-2">
                      {transaction.investors.map((investor, i) => (
                        <span key={i} className="px-3 py-1 bg-silk-100 dark:bg-silk-900/30 text-silk-800 dark:text-silk-300 rounded-full text-sm">
                          {investor}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Documents */}
                  <div className="mt-6">
                    <h5 className="font-medium mb-2">Required Documents</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {transaction.documents.map((doc, i) => (
                        <div key={i} className="flex items-center p-2 border border-gray-200 dark:border-gray-700 rounded">
                          <FiFileText className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{doc}</span>
                          <button className="ml-auto text-silk-600 hover:text-silk-700">
                            <FiEye className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
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
            Showing 3 of 14 transactions
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