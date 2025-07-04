import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Download, Share2, Star, Eye, Quote, Coins, Users, Calendar, 
  Tag, ExternalLink, CheckCircle, AlertCircle, CreditCard, Wallet, 
  Copy, TrendingUp, Award, BookOpen, Hash, Globe, Zap, User, Clock
} from 'lucide-react';

export default function PaperDetail() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCitationModal, setShowCitationModal] = useState(false);
  const [citationAmount, setCitationAmount] = useState('5');
  const [citationPurpose, setCitationPurpose] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCitationStyle, setSelectedCitationStyle] = useState('APA');

  // Mock paper data
  const paper = {
    id: '0x1234...5678',
    title: 'CRISPR-Cas9 Enhanced Metabolic Engineering for Sustainable Biofuel Production in Engineered Microorganisms',
    abstract: 'This research presents a novel approach to sustainable biofuel production through CRISPR-Cas9 enhanced metabolic engineering in engineered microorganisms. We demonstrate significant improvements in fuel yield and production efficiency while maintaining environmental sustainability. Our methodology combines advanced genetic engineering techniques with computational modeling to optimize metabolic pathways for enhanced biofuel synthesis.',
    authors: [
      { name: 'Dr. Sarah Chen', wallet: '0xabcd...1234', verified: true },
      { name: 'Dr. Michael Rodriguez', wallet: '0xefgh...5678', verified: true },
      { name: 'Dr. Elena Petrov', wallet: '0xijkl...9012', verified: false }
    ],
    field: 'Synthetic Biology',
    keywords: ['CRISPR-Cas9', 'Metabolic Engineering', 'Biofuel', 'Synthetic Biology', 'Sustainability'],
    publishDate: '2024-03-15',
    ipfsHash: 'QmYHGxLjsKd8p9RqwD3fG2nH5vB7cX1mE4qW8sT6uI9oL2',
    tokenURI: 'https://metadata.desci.com/papers/1234',
    citations: 127,
    downloads: 892,
    views: 3456,
    citationReward: 5, // tokens per citation
    totalEarned: 635,
    rating: 4.8,
    reviews: 23,
    license: 'Creative Commons Attribution 4.0'
  };

  const citationStyles = {
    APA: `Chen, S., Rodriguez, M., & Petrov, E. (2024). CRISPR-Cas9 Enhanced Metabolic Engineering for Sustainable Biofuel Production in Engineered Microorganisms. DeSci Journal of Synthetic Biology.`,
    MLA: `Chen, Sarah, et al. "CRISPR-Cas9 Enhanced Metabolic Engineering for Sustainable Biofuel Production in Engineered Microorganisms." DeSci Journal of Synthetic Biology, 2024.`,
    Chicago: `Chen, Sarah, Michael Rodriguez, and Elena Petrov. "CRISPR-Cas9 Enhanced Metabolic Engineering for Sustainable Biofuel Production in Engineered Microorganisms." DeSci Journal of Synthetic Biology (2024).`,
    Harvard: `Chen, S., Rodriguez, M. and Petrov, E. (2024) 'CRISPR-Cas9 Enhanced Metabolic Engineering for Sustainable Biofuel Production in Engineered Microorganisms', DeSci Journal of Synthetic Biology.`
  };

  const handleCitationPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock payment data
      const paymentData = {
        amount: parseFloat(citationAmount),
        purpose: citationPurpose,
        citationStyle: selectedCitationStyle,
        paperID: paper.id,
        authors: paper.authors.filter(a => a.verified),
        timestamp: new Date().toISOString()
      };
      
      console.log('Citation payment processed:', paymentData);
      setPaymentSuccess(true);
      
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const copyCitation = (style) => {
    navigator.clipboard.writeText(citationStyles[style]);
  };

  const resetCitationModal = () => {
    setShowCitationModal(false);
    setPaymentSuccess(false);
    setCitationAmount('5');
    setCitationPurpose('');
    setSelectedCitationStyle('APA');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse"></div>
      
      <div className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-purple-300 font-medium">{paper.field}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-400">{paper.publishDate}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">{paper.title}</h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Paper Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Stats Bar */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Quote className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-purple-300">{paper.citations}</div>
                    <div className="text-sm text-gray-400">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Download className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-blue-300">{paper.downloads}</div>
                    <div className="text-sm text-gray-400">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Eye className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-green-300">{paper.views}</div>
                    <div className="text-sm text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-300">{paper.rating}</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex space-x-6 border-b border-white/10">
                {['overview', 'citations', 'metrics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab 
                        ? 'text-purple-300 border-b-2 border-purple-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                        <span>Abstract</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{paper.abstract}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                        <Tag className="w-5 h-5 text-blue-400" />
                        <span>Keywords</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                        <Hash className="w-5 h-5 text-green-400" />
                        <span>Technical Details</span>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">IPFS Hash:</span>
                            <span className="font-mono text-xs">{paper.ipfsHash}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Token ID:</span>
                            <span className="font-mono text-xs">{paper.id}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">License:</span>
                            <span className="text-xs">{paper.license}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Citation Reward:</span>
                            <span className="text-xs">₮{paper.citationReward}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'citations' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Citation Formats</h3>
                      <span className="text-sm text-gray-400">{paper.citations} total citations</span>
                    </div>
                    
                    {Object.entries(citationStyles).map(([style, citation]) => (
                      <div key={style} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-purple-300">{style}</span>
                          <button
                            onClick={() => copyCitation(style)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">{citation}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Citation Impact</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Total Citations:</span>
                            <span className="font-semibold">{paper.citations}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Citation Growth:</span>
                            <span className="text-green-400 font-semibold">+23% this month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">H-Index Impact:</span>
                            <span className="font-semibold">8.5</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Earnings</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Total Earned:</span>
                            <span className="font-semibold text-purple-300">₮{paper.totalEarned}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">This Month:</span>
                            <span className="text-green-400 font-semibold">₮85</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Per Citation:</span>
                            <span className="font-semibold">₮{paper.citationReward}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Actions & Author Info */}
            <div className="space-y-6">
              
              {/* Citation Payment Card */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Quote className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold">Cite This Paper</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-purple-300 mb-1">₮{paper.citationReward}</div>
                    <div className="text-sm text-gray-400">Citation Fee</div>
                  </div>
                  
                  <button
                    onClick={() => setShowCitationModal(true)}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Coins className="w-5 h-5" />
                    <span>Pay to Cite</span>
                  </button>
                  
                  <div className="text-xs text-gray-400 text-center">
                    Support the authors by paying for citations
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share Paper</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Star className="w-5 h-5" />
                    <span>Add to Favorites</span>
                  </button>
                </div>
              </div>

              {/* Authors */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Authors</span>
                </h3>
                <div className="space-y-3">
                  {paper.authors.map((author, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{author.name}</span>
                            {author.verified && (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            )}
                          </div>
                          <div className="text-xs text-gray-400 font-mono">{author.wallet}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Paper Stats */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Performance</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Publication Date:</span>
                    <span className="text-sm">{paper.publishDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Total Earnings:</span>
                    <span className="text-sm font-semibold text-purple-300">₮{paper.totalEarned}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Reviews:</span>
                    <span className="text-sm">{paper.reviews} reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Citation Payment Modal */}
      {showCitationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl border border-white/10 max-w-md w-full p-6">
            {!paymentSuccess ? (
              <div className="space-y-6">
                <div className="text-center">
                  <Quote className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-2">Pay to Cite</h3>
                  <p className="text-gray-400">Support the authors by paying for your citation</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Citation Amount</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 relative">
                        <input
                          type="number"
                          value={citationAmount}
                          onChange={(e) => setCitationAmount(e.target.value)}
                          min="0.1"
                          step="0.1"
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white"
                        />
                        <span className="absolute right-3 top-3 text-gray-400">₮</span>
                      </div>
                      <button
                        onClick={() => setCitationAmount(paper.citationReward.toString())}
                        className="px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm hover:bg-purple-500/30 transition-colors"
                      >
                        Default
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Citation Style</label>
                    <select
                      value={selectedCitationStyle}
                      onChange={(e) => setSelectedCitationStyle(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white"
                    >
                      {Object.keys(citationStyles).map(style => (
                        <option key={style} value={style} className="bg-slate-800">{style}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Purpose (Optional)</label>
                    <textarea
                      value={citationPurpose}
                      onChange={(e) => setCitationPurpose(e.target.value)}
                      placeholder="Briefly describe how you'll use this citation..."
                      rows={3}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                    />
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-gray-400">Citation Fee:</span>
                      <span>₮{citationAmount}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-gray-400">Network Fee:</span>
                      <span>₮0.05</span>
                    </div>
                    <div className="border-t border-white/10 pt-2">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total:</span>
                        <span className="text-purple-300">₮{(parseFloat(citationAmount) + 0.05).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={resetCitationModal}
                    className="flex-1 px-4 py-3 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCitationPayment}
                    disabled={isProcessing}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isProcessing
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/25'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Wallet className="w-4 h-4" />
                        <span>Pay Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-green-400">Payment Successful!</h3>
                  <p className="text-gray-400">Your citation payment has been processed</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg text-left">
                  <h4 className="font-semibold mb-2">Citation ({selectedCitationStyle})</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{citationStyles[selectedCitationStyle]}</p>
                  <button
                    onClick={() => copyCitation(selectedCitationStyle)}
                    className="mt-3 flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Citation</span>
                  </button>
                </div>

                <button
                  onClick={resetCitationModal}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
