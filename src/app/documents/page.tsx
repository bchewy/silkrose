'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { 
  FiFilter, 
  FiDownload, 
  FiSearch, 
  FiFileText, 
  FiFile,
  FiFilePlus,
  FiUpload,
  FiEye,
  FiClock,
  FiCheck,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiLink,
  FiCalendar
} from 'react-icons/fi';

// Filter options
const documentTypes = ['All Types', 'Invoice', 'Purchase Order', 'Bill of Lading', 'Certificate of Origin', 'Insurance', 'Contract', 'Other'];
const transactionStatuses = ['All Statuses', 'Pending', 'Approved', 'Rejected', 'Expired'];
const dateRanges = ['All Time', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'];

export default function DocumentsPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [selectedDateRange, setSelectedDateRange] = useState('All Time');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDocument, setExpandedDocument] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedDocument === index) {
      setExpandedDocument(null);
    } else {
      setExpandedDocument(index);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Documents</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Manage and track trade finance documentation</p>
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
              <FiUpload className="mr-2 h-4 w-4" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="card p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documents..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div>
              <select 
                className="input" 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {documentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
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
              <select 
                className="input"
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
              >
                {dateRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Document Cards */}
        <div className="space-y-4">
          {[
            {
              id: 'DOC-2023-042',
              title: 'Commercial Invoice - TechGlobal Inc.',
              type: 'Invoice',
              transaction: 'TRX-2023-042',
              transactionTitle: 'Electronics Import from Taiwan',
              uploadedBy: 'Jane Doe',
              uploadDate: 'Jun 10, 2023',
              status: 'Approved',
              approvedBy: 'John Smith',
              approvedDate: 'Jun 12, 2023',
              size: '1.2 MB',
              version: '1.0',
              tags: ['Electronics', 'Import', 'Taiwan'],
              notes: 'Commercial invoice for electronics import from Taiwan. Verified against purchase order.',
              history: [
                { action: 'Uploaded', user: 'Jane Doe', date: 'Jun 10, 2023 09:15 AM' },
                { action: 'Reviewed', user: 'Michael Chen', date: 'Jun 11, 2023 02:30 PM' },
                { action: 'Approved', user: 'John Smith', date: 'Jun 12, 2023 10:45 AM' }
              ]
            },
            {
              id: 'DOC-2023-039',
              title: 'Bill of Lading - HealthTech Solutions',
              type: 'Bill of Lading',
              transaction: 'TRX-2023-039',
              transactionTitle: 'Medical Equipment Import',
              uploadedBy: 'Robert Johnson',
              uploadDate: 'Jun 8, 2023',
              status: 'Pending',
              approvedBy: '',
              approvedDate: '',
              size: '0.8 MB',
              version: '1.0',
              tags: ['Medical', 'Import', 'Germany'],
              notes: 'Bill of lading for medical equipment import from Germany. Awaiting verification.',
              history: [
                { action: 'Uploaded', user: 'Robert Johnson', date: 'Jun 8, 2023 11:20 AM' },
                { action: 'Under Review', user: 'Sarah Williams', date: 'Jun 9, 2023 03:15 PM' }
              ]
            },
            {
              id: 'DOC-2023-036',
              title: 'Certificate of Origin - FarmFresh Exports',
              type: 'Certificate of Origin',
              transaction: 'TRX-2023-036',
              transactionTitle: 'Agricultural Commodities Export',
              uploadedBy: 'Emily Davis',
              uploadDate: 'May 25, 2023',
              status: 'Approved',
              approvedBy: 'David Wilson',
              approvedDate: 'May 27, 2023',
              size: '0.5 MB',
              version: '1.0',
              tags: ['Agriculture', 'Export', 'Brazil', 'China'],
              notes: 'Certificate of origin for agricultural commodities export from Brazil to China.',
              history: [
                { action: 'Uploaded', user: 'Emily Davis', date: 'May 25, 2023 10:30 AM' },
                { action: 'Reviewed', user: 'Carlos Mendez', date: 'May 26, 2023 01:45 PM' },
                { action: 'Approved', user: 'David Wilson', date: 'May 27, 2023 09:20 AM' }
              ]
            },
            {
              id: 'DOC-2023-033',
              title: 'Purchase Order - ModernFabrics Ltd.',
              type: 'Purchase Order',
              transaction: 'TRX-2023-033',
              transactionTitle: 'Textile Manufacturing Equipment',
              uploadedBy: 'Thomas Brown',
              uploadDate: 'May 20, 2023',
              status: 'Rejected',
              approvedBy: 'Lisa Chen',
              approvedDate: 'May 22, 2023',
              size: '0.7 MB',
              version: '1.0',
              tags: ['Textiles', 'Import', 'Italy'],
              notes: 'Purchase order for textile manufacturing equipment from Italy. Rejected due to discrepancies in pricing.',
              history: [
                { action: 'Uploaded', user: 'Thomas Brown', date: 'May 20, 2023 02:10 PM' },
                { action: 'Reviewed', user: 'Lisa Chen', date: 'May 22, 2023 11:30 AM' },
                { action: 'Rejected', user: 'Lisa Chen', date: 'May 22, 2023 11:45 AM' },
                { action: 'Revision Requested', user: 'Lisa Chen', date: 'May 22, 2023 11:50 AM' }
              ]
            },
          ].map((document, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${
                    document.type === 'Invoice' 
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                      : document.type === 'Bill of Lading'
                        ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                        : document.type === 'Certificate of Origin'
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    <FiFileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium">{document.title}</h3>
                      <span className="ml-2 text-sm text-gray-500">{document.id}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <FiFile className="mr-1 h-4 w-4" /> {document.type}
                      </span>
                      <span className="flex items-center">
                        <FiLink className="mr-1 h-4 w-4" /> {document.transaction}
                      </span>
                      <span className="flex items-center">
                        <FiCalendar className="mr-1 h-4 w-4" /> {document.uploadDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      document.status === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : document.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : document.status === 'Expired'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-amber-100 text-amber-800'
                    }`}>
                      {document.status}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <FiEye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <FiDownload className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="p-2 text-gray-500 hover:text-silk-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {expandedDocument === index ? <FiChevronUp className="h-4 w-4" /> : <FiChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Expanded View */}
              {expandedDocument === index && (
                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div>
                        <h4 className="font-medium mb-2">Document Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Document Type</p>
                            <p className="font-medium">{document.type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">File Size</p>
                            <p className="font-medium">{document.size}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Version</p>
                            <p className="font-medium">{document.version}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Uploaded By</p>
                            <p className="font-medium">{document.uploadedBy}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Upload Date</p>
                            <p className="font-medium">{document.uploadDate}</p>
                          </div>
                          {document.status === 'Approved' && (
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Approved By</p>
                              <p className="font-medium">{document.approvedBy}</p>
                            </div>
                          )}
                          {document.status === 'Approved' && (
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Approval Date</p>
                              <p className="font-medium">{document.approvedDate}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Related Transaction</h4>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-silk-100 dark:bg-silk-900/30 flex items-center justify-center text-silk-600 dark:text-silk-400 mr-2">
                              <FiClock className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium">{document.transactionTitle}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{document.transaction}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Notes</h4>
                        <p className="text-gray-600 dark:text-gray-400">{document.notes}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {document.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - History & Actions */}
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-medium mb-4">Document History</h4>
                        <div className="relative">
                          {/* Timeline Line */}
                          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                          
                          {/* Timeline Steps */}
                          <div className="space-y-4 relative">
                            {document.history.map((event, eventIndex) => (
                              <div key={eventIndex} className="flex">
                                <div className="flex-shrink-0 relative">
                                  <div className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                                    event.action === 'Approved' 
                                      ? 'bg-green-100 text-green-600' 
                                      : event.action === 'Rejected'
                                        ? 'bg-red-100 text-red-600'
                                        : event.action === 'Uploaded'
                                          ? 'bg-blue-100 text-blue-600'
                                          : 'bg-gray-100 text-gray-600 dark:bg-gray-800'
                                  }`}>
                                    {event.action === 'Approved' 
                                      ? <FiCheck className="h-5 w-5" /> 
                                      : event.action === 'Rejected'
                                        ? <FiX className="h-5 w-5" />
                                        : event.action === 'Uploaded'
                                          ? <FiUpload className="h-5 w-5" />
                                          : <FiClock className="h-5 w-5" />
                                    }
                                  </div>
                                </div>
                                <div className="ml-4 flex-grow pb-2">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-medium text-sm">{event.action}</h5>
                                      <p className="text-xs text-gray-500 dark:text-gray-400">{event.user}</p>
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      {event.date}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-silk-50 dark:bg-silk-900/10 border border-silk-100 dark:border-silk-800/20 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Actions</h4>
                        <div className="space-y-2">
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiEye className="mr-2 h-4 w-4" />
                            View Document
                          </button>
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiDownload className="mr-2 h-4 w-4" />
                            Download
                          </button>
                          <button className="btn-outline w-full flex items-center justify-center">
                            <FiFilePlus className="mr-2 h-4 w-4" />
                            Upload New Version
                          </button>
                          {document.status === 'Pending' && (
                            <>
                              <button className="btn-primary w-full flex items-center justify-center">
                                <FiCheck className="mr-2 h-4 w-4" />
                                Approve
                              </button>
                              <button className="btn-outline w-full flex items-center justify-center text-red-600 border-red-200 hover:bg-red-50">
                                <FiX className="mr-2 h-4 w-4" />
                                Reject
                              </button>
                            </>
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
            Showing 4 of 24 documents
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