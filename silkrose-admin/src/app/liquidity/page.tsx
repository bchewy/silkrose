import DashboardLayout from '../dashboard-layout';
import { FiPlus, FiRefreshCw, FiDownload } from 'react-icons/fi';

export default function LiquidityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Liquidity Pools</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your liquidity pools and providers</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-outline flex items-center">
              <FiRefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </button>
            <button className="btn-outline flex items-center">
              <FiDownload className="mr-2 h-4 w-4" />
              Export
            </button>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2 h-4 w-4" />
              Add Pool
            </button>
          </div>
        </div>

        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Pool</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">TVL</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Volume (24h)</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">APR</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Providers</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'ETH/USDC',
                    tvl: '$1.2M',
                    volume: '$245K',
                    apr: '12.5%',
                    providers: 156,
                    status: 'Active',
                  },
                  {
                    name: 'ETH/USDT',
                    tvl: '$850K',
                    volume: '$180K',
                    apr: '10.8%',
                    providers: 124,
                    status: 'Active',
                  },
                  {
                    name: 'ETH/DAI',
                    tvl: '$320K',
                    volume: '$75K',
                    apr: '8.2%',
                    providers: 78,
                    status: 'Active',
                  },
                  {
                    name: 'USDC/USDT',
                    tvl: '$1.5M',
                    volume: '$320K',
                    apr: '5.4%',
                    providers: 210,
                    status: 'Active',
                  },
                  {
                    name: 'BTC/ETH',
                    tvl: '$680K',
                    volume: '$145K',
                    apr: '9.6%',
                    providers: 92,
                    status: 'Active',
                  },
                ].map((pool, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            {pool.name.split('/')[0][0]}
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            {pool.name.split('/')[1][0]}
                          </div>
                        </div>
                        <span className="ml-3 font-medium">{pool.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{pool.tvl}</td>
                    <td className="py-3 px-4">{pool.volume}</td>
                    <td className="py-3 px-4 text-green-500">{pool.apr}</td>
                    <td className="py-3 px-4">{pool.providers}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {pool.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 