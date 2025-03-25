import React, { useState } from 'react';
import { Ghost, Search, Skull, Trophy, Wallet } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Ghost className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GhostChain
              </h1>
            </div>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Become an Agent
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search addresses, transactions, or start a ghost hunt..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Ghost className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-semibold">CryptoSpectralist AI</h2>
            </div>
            <p className="text-slate-300">
              Our AI assistant helps track suspicious blockchain activity and mixer transactions.
              Let's hunt some ghost transactions together!
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Skull className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold">Ghost Hunting Quests</h2>
            </div>
            <p className="text-slate-300">
              Join the hunt for notorious wallets and earn NFT badges. Can you track down
              the Mt. Gox Whale?
            </p>
          </div>
        </div>

        {/* Active Investigations */}
        <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Active Investigations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                <Wallet className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="font-medium">Suspicious Wallet #{i}</h3>
                  <p className="text-sm text-slate-400">
                    Large transfer through multiple mixers detected
                  </p>
                </div>
                <button className="ml-auto px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 rounded">
                  Investigate
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;