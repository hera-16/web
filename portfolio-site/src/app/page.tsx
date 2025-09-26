import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ヒーローセクション */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hello, I'm{" "}
            <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            クリエイティブな開発者として、革新的なWebアプリケーションとデジタル体験を創造しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              プロジェクトを見る
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            スキル & 技術
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            現代的なWeb技術を使用して、スケーラブルで高品質なアプリケーションを開発しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">フロントエンド</h3>
            <p className="text-gray-600 mb-4">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">バックエンド</h3>
            <p className="text-gray-600 mb-4">Node.js, Python, PostgreSQL, MongoDB</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ツール & DevOps</h3>
            <p className="text-gray-600 mb-4">Git, Docker, AWS, Vercel</p>
          </div>
        </div>
      </section>

      {/* 注目プロジェクト */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            注目のプロジェクト
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            最近取り組んだ代表的なプロジェクトをご紹介します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  プロジェクト {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  このプロジェクトの説明文です。使用した技術やポイントを簡潔に説明します。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">MongoDB</span>
                </div>
                <Link
                  href={`/projects/project-${project}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            すべてのプロジェクトを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
