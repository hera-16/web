import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Me | Portfolio',
  description: '私のバックグラウンド、経験、スキルについて詳しくご紹介します。',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
          福岡工業大学情報システム工学科で学びながら、
          個人でプログラミングスキルを磨いている学生です。
        </p>
      </div>

      {/* プロフィール写真とメイン説明 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-200">
            <Image 
              src="/images/projects/lon.jpg" 
              alt="プロフィール写真" 
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
            私について
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-normal">
            <p>
              <strong className="text-gray-200 font-semibold">2023年入学・2027年卒業見込み</strong><br />
              福岡工業大学情報システム工学科
            </p>
            <p>
              個人で幅広い言語を勉強しています。実際にシステムを運用を行っています。
            </p>
            <p>
              新しい技術を学ぶことが好きで、実践的なプロジェクトを通して
              スキルアップに取り組んでいます。
            </p>
            <p>
              独学開発:2025年6月～
            </p>
          </div>
        </div>
      </div>

      {/* 使用技術一覧 */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 text-center">
          実際に使用した技術
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-300 mb-6">フロントエンド</h3>
            <ul className="space-y-3 text-gray-500 text-base leading-relaxed font-normal">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• Typescript</li>
              <li>• レスポンシブデザイン</li>
              <li>• DOM操作</li>
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-lg border border-green-100">
            <h3 className="text-xl font-semibold text-green-300 mb-6">バックエンド・API</h3>
            <ul className="space-y-3 text-gray-500 text-base leading-relaxed font-normal">
              <li>• Java</li>
              <li>• Spring Boot</li>
              <li>• WebSocket</li>
              <li>• Firebase</li>
              <li>• JWT認証</li>
              <li>• MySQL</li>              
            </ul>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-300 mb-6">ツール・ホスティング</h3>
            <ul className="space-y-3 text-gray-500 text-base leading-relaxed font-normal">
              <li>• Git / GitHub</li>
              <li>• docker</li>
              <li>• Firebase</li>
              <li>• Vercel</li>
              <li>• Railway</li>
            </ul>
          </div>
        </div>
      </div>



      {/* 趣味・興味 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 text-center">
          趣味 & 興味
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18c4.97 0 9 4.03 9 9s-4.03 9-9 9m0-18C7.03 3 3 7.03 3 12s4.03 9 9 9"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0-8l6 3m-6-3L6 11"/>
                <circle cx="18" cy="8" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#6b7280'}}>釣り</h3>
            <p className="text-gray-400 text-base leading-relaxed font-normal">
              自然の中でリラックスしながら釣りを楽しんでいます。トーナメントにも挑戦しています。
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="white"/>
                <path d="M12 8c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#6b7280'}}>サッカー</h3>
            <p className="text-gray-400 text-base leading-relaxed font-normal">
              小学生から高校生まで12年間続けてきました。チームワークの大切さを学びました。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}