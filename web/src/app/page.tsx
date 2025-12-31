import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ヒーローセクション */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
            Hello, I&apos;m{" "}
            <span className="text-blue-400">Souta Kojima</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-normal">
            企画・設計から開発・実装までを個人で行うエンジニアです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
            >
              プロジェクトを見る
            </Link>
            <Link
              href="/contact"
              className="border border-slate-700 text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            スキル & 技術
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            現代的なWeb技術を使用して、スケーラブルで高品質なアプリケーションを開発しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-900 rounded-lg border border-slate-800">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-4">フロントエンド</h3>
            <p className="text-slate-300 text-base leading-relaxed font-normal">Next.js, React, TypeScript, HTML5, CSS3, JavaScript ES6+, Tailwind CSS</p>
          </div>

          <div className="text-center p-8 bg-slate-900 rounded-lg border border-slate-800">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-4">バックエンド</h3>
            <p className="text-slate-300 text-base leading-relaxed font-normal">Spring Boot, Java 17, MySQL, WebSocket, JWT認証, REST API</p>
          </div>

          <div className="text-center p-8 bg-slate-900 rounded-lg border border-slate-800">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-4">ツール & Web3</h3>
            <p className="text-slate-300 text-base leading-relaxed font-normal">Git, GitHub, Vercel, Polygon, Web3, Docker</p>
          </div>
        </div>
      </section>

      {/* 注目プロジェクト */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            注目のプロジェクト
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            最近取り組んだ代表的なプロジェクトをご紹介します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden hover:border-blue-500/40 transition">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/images/projects/cheerain.jpg"
                alt="CheeRain - NFT応援プラットフォーム"
                width={400}
                height={192}
                priority
                className="object-cover w-full h-full"
                style={{ width: 'auto', height: 'auto' }}
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border border-yellow-400/30">
                  注目
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                CheeRain
              </h3>
              <p className="text-slate-300 mb-4">
                応援メッセージをNFT化。ブロックチェーン技術を活用した革新的な選手応援プラットフォーム
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">Spring Boot</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Web3</span>
              </div>
              <a
                href="/videos/cheerain-demo.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                動画 →
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden hover:border-blue-500/40 transition">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/images/projects/letteral.png"
                alt="Letteral - 社内問題可視化アプリ"
                width={400}
                height={192}
                priority
                className="object-cover w-full h-full"
                style={{ width: 'auto', height: 'auto' }}
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border border-yellow-400/30">
                  注目
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                Letteral
              </h3>
              <p className="text-slate-300 mb-4">
                社内問題可視化アプリ。リアルタイム返信機能を備えた匿名進捗共有プラットフォーム
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">Java</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">MySQL</span>
              </div>
              <a
                href="/videos/Letteral-demo.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                動画 →
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden hover:border-blue-500/40 transition">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/images/projects/leaving-work.jpg"
                alt="勤怠管理システム"
                width={400}
                height={192}
                priority
                className="object-cover w-full h-full"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                勤怠管理システム
              </h3>
              <p className="text-slate-300 mb-4">
                ログイン機能付きの勤怠管理システム。管理者ページも完備
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">認証</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">管理画面</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">フォーム</span>
              </div>
              <a
                href="https://hera-16.github.io/leaving-work/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                システムを見る →
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
          >
            すべてのプロジェクトを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
