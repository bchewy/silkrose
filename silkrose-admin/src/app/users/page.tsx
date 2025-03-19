import DashboardLayout from '../dashboard-layout';
import { FiPlus, FiFilter, FiDownload, FiSearch } from 'react-icons/fi';

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">User Management</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Manage users and their permissions</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-outline flex items-center">
              <FiFilter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="btn-outline flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add User
            </button>
          </div>
        </div>

        <div className="card">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search users..."
              className="input pl-10"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">User</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Liquidity Provided</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Joined</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Alex Johnson',
                    email: 'alex@example.com',
                    role: 'Liquidity Provider',
                    liquidity: '$125,000',
                    joined: 'Jan 15, 2023',
                    status: 'Active',
                  },
                  {
                    name: 'Sarah Williams',
                    email: 'sarah@example.com',
                    role: 'Liquidity Provider',
                    liquidity: '$250,000',
                    joined: 'Mar 22, 2023',
                    status: 'Active',
                  },
                  {
                    name: 'Michael Brown',
                    email: 'michael@example.com',
                    role: 'Admin',
                    liquidity: '$500,000',
                    joined: 'Nov 5, 2022',
                    status: 'Active',
                  },
                  {
                    name: 'Emily Davis',
                    email: 'emily@example.com',
                    role: 'Liquidity Provider',
                    liquidity: '$75,000',
                    joined: 'Apr 10, 2023',
                    status: 'Inactive',
                  },
                  {
                    name: 'David Wilson',
                    email: 'david@example.com',
                    role: 'Liquidity Provider',
                    liquidity: '$180,000',
                    joined: 'Feb 8, 2023',
                    status: 'Active',
                  },
                ].map((user, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-silk-100 flex items-center justify-center text-silk-600 font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="ml-3 font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'Admin' 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium">{user.liquidity}</td>
                    <td className="py-3 px-4">{user.joined}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing 5 of 25 users
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
      </div>
    </DashboardLayout>
  );
} 