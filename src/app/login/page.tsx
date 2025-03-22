"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff, FiLock, FiMail, FiInfo } from "react-icons/fi";
import SilkRoseLogo from "@/components/SilkRoseLogo";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Update the time every minute
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-[#0f1420] dark:bg-[#0a0e1a]">
      {/* Animated background with particles */}
      <ParticlesBackground colors={['#9612d9', '#ff3a5c', '#c23eff', '#ff6a83', '#b01cf7']} count={50} />
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute h-[400px] w-[400px] rounded-full bg-silk-500/30 blur-3xl top-10 -left-20 animate-pulse" 
             style={{ animationDuration: '8s' }}></div>
        <div className="absolute h-[350px] w-[350px] rounded-full bg-rose-500/20 blur-3xl top-1/4 right-10 animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        <div className="absolute h-[450px] w-[450px] rounded-full bg-silk-600/20 blur-3xl bottom-10 left-20 animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '0.5s' }}></div>
        <div className="absolute h-[200px] w-[200px] rounded-full bg-rose-400/10 blur-3xl top-1/2 left-1/3 animate-pulse" 
             style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
        <div className="absolute h-[250px] w-[250px] rounded-full bg-silk-300/15 blur-3xl bottom-1/3 right-1/4 animate-pulse" 
             style={{ animationDuration: '13s', animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Main content container */}
      <div className="flex flex-col w-full max-w-[1100px] mx-auto h-screen z-10">
        {/* Header with logo */}
        <header className="w-full p-6 flex items-center justify-between">
          <div className="flex items-center">
            <SilkRoseLogo size={32} className="animate-spin-slow" />
            <h1 className="text-2xl font-bold ml-3 text-white">SilkierTrade</h1>
          </div>
          <div className="text-sm text-gray-400">{currentTime}</div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left side - Login form */}
            <div className="flex flex-col">
              <div className="bg-white/10 dark:bg-gray-800/20 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 flex flex-col justify-between">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white">Sign in to BackOffice</h2>
                  <p className="mt-2 text-sm text-gray-300">
                    &ldquo;The most profound leadership paradox: to truly lead others, you must first surrender control.&rdquo; — Ayush
                  </p>
                </div>
                
                <form className="px-8 flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-lg border border-gray-600 px-3 py-2.5 pl-10 
                                  text-white bg-gray-700/50 
                                  focus:ring-silk-500 focus:border-silk-500 
                                  hover:border-silk-400 transition-all duration-300"
                        placeholder="ayush@silkrose.sg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-lg border border-gray-600 px-3 py-2.5 pl-10 pr-10 
                                  text-white bg-gray-700/50 
                                  focus:ring-silk-500 focus:border-silk-500 
                                  hover:border-silk-400 transition-all duration-300"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                        ) : (
                          <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                        )}
                      </button>
                    </div>
                  </div>
                
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-silk-600 focus:ring-silk-500 border-gray-600 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="text-sm">
                      <Link href="/forgot-password" className="font-medium text-silk-400 hover:text-silk-300">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/dashboard");
                    }}
                    className="w-full py-3 px-4 rounded-lg font-medium text-white silk-gradient 
                             hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Sign in
                  </button>
                </form>
    
                <div className="p-8 flex items-center justify-between text-xs text-gray-400 border-t border-white/5 mt-8">
                  <div>v1.0.0</div>
                  <div className="flex items-center">
                    <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-1"></div>
                    <span>Secure Connection</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-400">
                Having trouble?{" "}
                <Link href="/contact-support" className="font-medium text-silk-400 hover:text-silk-300">
                  Contact IT Support
                </Link>
              </div>
            </div>
            
            {/* Right side - SilkierTrade Info Panel */}
            <div>
              <div className="bg-white/10 dark:bg-gray-800/20 rounded-2xl backdrop-blur-lg border border-white/10 overflow-hidden shadow-xl h-full">
                <div className="p-8 text-gray-300 space-y-6 h-full flex flex-col">
                  <div className="flex items-center">
                    <FiInfo className="h-5 w-5 text-silk-400 mr-2 flex-shrink-0" />
                    <h3 className="text-xl font-medium text-white">SilkierTrade: The Enterprise Solution</h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed">
                    Rather than relying on blockchain solutions, we&apos;ve opted for an established industry-backed 
                    approach to complement our existing alternatives.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-md font-medium text-white flex items-center">
                      <span className="h-1.5 w-1.5 bg-silk-500 rounded-full mr-2"></span>
                      Core Functionality
                    </h4>
                    <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                      <li>Track and manage liquidity with visual dashboards</li>
                      <li>Enterprise-wide digitalization with advanced search capabilities</li>
                      <li>Scalable, modular architecture for future growth</li>
                    </ul>
                  </div>
                  
                  <div className="pt-2 flex-1">
                    <h4 className="text-md font-medium text-white flex items-center mb-4">
                      <span className="h-1.5 w-1.5 bg-silk-500 rounded-full mr-2"></span>
                      Proposed Workflow
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-silk-500/30 transition-all duration-300 flex">
                        <div className="text-silk-400 font-bold text-lg mr-3 flex-shrink-0">01</div>
                        <div>
                          <div className="font-medium mb-1 text-white">Research Emerging Trends</div>
                          <p className="text-sm text-gray-400">
                            AI-powered research on trade finance, blockchain, and regulatory changes, delivered as weekly/monthly reports.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-silk-500/30 transition-all duration-300 flex">
                        <div className="text-silk-400 font-bold text-lg mr-3 flex-shrink-0">02</div>
                        <div>
                          <div className="font-medium mb-1 text-white">Create Thought Leadership</div>
                          <p className="text-sm text-gray-400">
                            Publish blog posts and case studies to increase SilkRose&apos;s industry visibility and expertise.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-silk-500/30 transition-all duration-300 flex">
                        <div className="text-silk-400 font-bold text-lg mr-3 flex-shrink-0">03</div>
                        <div>
                          <div className="font-medium mb-1 text-white">Promote and Engage</div>
                          <p className="text-sm text-gray-400">
                            Leverage website, email marketing, and SEO to engage customers and generate leads.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer with status */}
        <footer className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">All systems operational</span>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs text-gray-400 mb-1">
              <span className="text-yellow-500">⚠️</span> Best viewed on desktop/laptop devices
            </div>
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} SilkRose Technologies
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 