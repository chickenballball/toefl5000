'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
              <span className="text-2xl">📚</span>
            </div>
            <span className="font-bold text-2xl tracking-tight">VOCAB 5000 單字大師</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-white/60 hover:text-white transition">功能</a>
            <a href="#how" className="text-white/60 hover:text-white transition">如何使用</a>

            <a 
              href="https://apps.apple.com/cn/app/%E5%96%AE%E5%AD%97%E5%A4%A7%E5%B8%AB5000/id6764540927" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-7 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all"
            >
              免費下載
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
            <a href="#features" className="block text-white/60 hover:text-white transition py-2">功能</a>
            <a href="#how" className="block text-white/60 hover:text-white transition py-2">如何使用</a>

            <a 
              href="https://apps.apple.com/cn/app/%E5%96%AE%E5%AD%97%E5%A4%A7%E5%B8%AB5000/id6764540927" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-orange-500 to-red-600 text-white px-7 py-3 rounded-full font-semibold text-center"
            >
              免費下載
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            iOS 專屬應用 · 免費下載
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            掌握<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400">5000+ 詞彙</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            精選超過 5000 個學術英語核心詞彙，從基礎到精通，分級學習，科學記憶，助你高效掌握每一個單字
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://apps.apple.com/cn/app/%E5%96%AE%E5%AD%97%E5%A4%A7%E5%B8%AB5000/id6764540927" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-3 shadow-2xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store 下載
            </a>
            <a 
              href="#features"
              className="border border-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/5 transition"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['5000+', '核心詞彙'],
            ['5', '學習等級'],
            ['100%', '離線使用'],
            ['免費', '下載'],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">{num}</p>
              <p className="text-white/40 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">核心功能</h2>
            <p className="text-xl text-white/40">完整詞彙學習解決方案</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: '分級詞彙庫', desc: '基礎級 → 中級 → 中高級 → 高級 → 精通級，5 大等級循序漸進，適合不同程度學習者', color: 'from-orange-500/20 to-orange-500/5 border-orange-500/20' },
              { icon: '🎴', title: '智能學習卡片', desc: '正面英文單字、背面中文釋義，美式/英式英語發音切換，詞性標註、音標顯示', color: 'from-blue-500/20 to-blue-500/5 border-blue-500/20' },
              { icon: '🧠', title: '科學記憶系統', desc: '基於間隔重複法（Spaced Repetition），系統自動安排最佳複習時間，越難記的單字複習頻率越高', color: 'from-green-500/20 to-green-500/5 border-green-500/20' },
              { icon: '✍️', title: '測驗挑戰', desc: '每組 10 題小測驗，完成後解鎖 50 題總測驗，追蹤正確率，見證你的進步', color: 'from-purple-500/20 to-purple-500/5 border-purple-500/20' },
              { icon: '📈', title: '學習統計', desc: '詳細的學習數據追蹤，查看學習天數、複習次數、正確率，最近學習記錄一目了然', color: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/20' },
              { icon: '⏰', title: '貼心提醒', desc: '自訂每日學習提醒時間，自由選擇提醒日期，養成持續學習的好習慣', color: 'from-pink-500/20 to-pink-500/5 border-pink-500/20' },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className={`p-8 rounded-3xl bg-gradient-to-b ${color} border backdrop-blur-sm hover:scale-105 transition-transform`}>
                <span className="text-5xl mb-6 block">{icon}</span>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-32 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">三步開啟學習</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '選擇等級', desc: '從基礎到精通，選擇適合你的起始等級' },
              { step: '02', title: '每日學習', desc: '每天 5 分鐘，用智能閃卡學習新詞彙' },
              { step: '03', title: '間隔複習', desc: '系統自動安排複習，強化長期記憶' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-8 rounded-3xl bg-white/5 border border-white/5">
                <span className="text-7xl font-black text-orange-500/20 absolute top-4 right-6">{step}</span>
                <h3 className="text-2xl font-bold mb-3 relative">{title}</h3>
                <p className="text-white/50 relative">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-12">適合人群</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20">
              <span className="text-5xl mb-4 block">🎓</span>
              <h3 className="text-xl font-bold mb-2">考試學生</h3>
              <p className="text-white/40">準備 TOEFL / IELTS / GRE 考試的學生</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
              <span className="text-5xl mb-4 block">📖</span>
              <h3 className="text-xl font-bold mb-2">學術英語</h3>
              <p className="text-white/40">想提升學術英語能力的學習者</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
              <span className="text-5xl mb-4 block">🌍</span>
              <h3 className="text-xl font-bold mb-2">英語愛好者</h3>
              <p className="text-white/40">希望系統性擴充詞彙量的英語愛好者</p>
            </div>
          </div>
        </div>
      </section>


      {/* Screenshots */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">應用截圖</h2>
          </div>
          <div className="flex justify-center gap-6 overflow-x-auto pb-4 px-4">
            {['/screenshots/screenshot1.jpg', '/screenshots/screenshot2.jpg', '/screenshots/screenshot3.jpg', '/screenshots/screenshot4.jpg'].map((src, i) => (
              <img key={i} src={src} alt={`截圖 ${i + 1}`} className="h-96 rounded-3xl shadow-lg object-contain flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">每天 5 分鐘<br/>一個月掌握 150+ 新單字</h2>
          <p className="text-xl text-white/40 mb-12">立即下載，開始你的英語詞彙之旅</p>
          <a 
            href="https://apps.apple.com/cn/app/%E5%96%AE%E5%AD%97%E5%A4%A7%E5%B8%AB5000/id6764540927" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store 下載
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <span className="text-lg">📚</span>
            </div>
            <span className="font-bold text-xl">VOCAB 5000 單字大師</span>
          </div>
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="/privacy-policy.html" target="_blank" className="text-white/40 hover:text-white transition">隱私權政策</a>
            <a href="/terms-of-use.html" target="_blank" className="text-white/40 hover:text-white transition">使用條款</a>
          </div>
          <p className="text-white/30 text-sm mb-4">
            © 2026 Gokujoumonoya Limited
          </p>
          <div className="text-white/20 text-sm">
            開發者：Gokujoumonoya Limited
          </div>
        </div>
      </footer>
    </div>
  );
}
