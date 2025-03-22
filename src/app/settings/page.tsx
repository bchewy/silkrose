'use client';

import { useState } from 'react';
import DashboardLayout from '../dashboard-layout';
import { FiSave, FiLock, FiUser, FiBell, FiGlobe, FiShield } from 'react-icons/fi';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Settings</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your account and application settings</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="w-full md:w-64 card p-0 overflow-hidden">
            <ul>
              {[
                { id: 'general', name: 'General', icon: FiUser },
                { id: 'security', name: 'Security', icon: FiLock },
                { id: 'notifications', name: 'Notifications', icon: FiBell },
                { id: 'api', name: 'API Access', icon: FiGlobe },
                { id: 'permissions', name: 'Permissions', icon: FiShield },
              ].map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center w-full px-4 py-3 text-left ${
                      activeTab === tab.id
                        ? 'bg-silk-50 dark:bg-gray-800 text-silk-600 dark:text-silk-400 border-l-4 border-silk-600'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="flex-1 card">
            {activeTab === 'general' && (
              <div>
                <h3 className="text-lg font-medium mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      className="input"
                      defaultValue="Admin User"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="input"
                      defaultValue="admin@silkrose.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Time Zone
                    </label>
                    <select className="input">
                      <option>Pacific Time (UTC-08:00)</option>
                      <option>Eastern Time (UTC-05:00)</option>
                      <option>UTC</option>
                      <option>Central European Time (UTC+01:00)</option>
                      <option>Japan Standard Time (UTC+09:00)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Language
                    </label>
                    <select className="input">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button className="btn-primary flex items-center">
                      <FiSave className="mr-2 h-4 w-4" />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="2fa"
                      type="checkbox"
                      className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-300 rounded"
                    />
                    <label htmlFor="2fa" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Enable two-factor authentication
                    </label>
                  </div>
                  <div className="pt-4">
                    <button className="btn-primary flex items-center">
                      <FiSave className="mr-2 h-4 w-4" />
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates about account activity</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="email-toggle" defaultChecked className="sr-only" />
                      <label htmlFor="email-toggle" className="block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium">Liquidity Alerts</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about significant liquidity changes</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="liquidity-toggle" defaultChecked className="sr-only" />
                      <label htmlFor="liquidity-toggle" className="block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications about security events</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="security-toggle" defaultChecked className="sr-only" />
                      <label htmlFor="security-toggle" className="block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receive news and promotional materials</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="marketing-toggle" className="sr-only" />
                      <label htmlFor="marketing-toggle" className="block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="btn-primary flex items-center">
                      <FiSave className="mr-2 h-4 w-4" />
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div>
                <h3 className="text-lg font-medium mb-4">API Access</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-medium">Your API Key</p>
                    <div className="flex mt-2">
                      <input
                        type="text"
                        className="input"
                        value="sk_live_51HxTmLSJNYs7hN9s7K3QzN5Kj"
                        readOnly
                      />
                      <button className="ml-2 btn-outline">Copy</button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Keep this key secret. Do not share it in client-side code.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">API Permissions</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="read-permission"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-300 rounded"
                        />
                        <label htmlFor="read-permission" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Read access
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="write-permission"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-300 rounded"
                        />
                        <label htmlFor="write-permission" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Write access
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="admin-permission"
                          type="checkbox"
                          className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-300 rounded"
                        />
                        <label htmlFor="admin-permission" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Admin access
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex space-x-3">
                    <button className="btn-primary flex items-center">
                      <FiSave className="mr-2 h-4 w-4" />
                      Save Changes
                    </button>
                    <button className="btn-secondary">
                      Regenerate API Key
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'permissions' && (
              <div>
                <h3 className="text-lg font-medium mb-4">User Permissions</h3>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-800">
                          <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Permission</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Description</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'View Dashboard', description: 'Access to view the main dashboard', enabled: true },
                          { name: 'Manage Liquidity', description: 'Add, remove, and adjust liquidity pools', enabled: true },
                          { name: 'User Management', description: 'Add, edit, and remove users', enabled: true },
                          { name: 'View Analytics', description: 'Access to analytics and reporting', enabled: true },
                          { name: 'System Settings', description: 'Modify system-wide settings', enabled: false },
                        ].map((permission, index) => (
                          <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-3 px-4 font-medium">{permission.name}</td>
                            <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{permission.description}</td>
                            <td className="py-3 px-4">
                              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input 
                                  type="checkbox" 
                                  id={`permission-${index}`} 
                                  defaultChecked={permission.enabled} 
                                  className="sr-only" 
                                />
                                <label 
                                  htmlFor={`permission-${index}`} 
                                  className="block h-6 w-10 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
                                ></label>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="pt-4">
                    <button className="btn-primary flex items-center">
                      <FiSave className="mr-2 h-4 w-4" />
                      Save Permissions
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 