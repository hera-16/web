import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'アバウト | Portfolio',
  description: '私のバックグラウンド、経験、スキルについて詳しくご紹介します。',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Me
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          情熱的な開発者として、技術とクリエイティビティを組み合わせて、
          意味のあるデジタル体験を創造することに取り組んでいます。
        </p>
      </div>

      {/* プロフィール写真とメイン説明 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            私のストーリー
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              こんにちは！私は[あなたの名前]です。Web開発とデザインに情熱を注ぐ開発者として、
              ここ数年間様々なプロジェクトに取り組んできました。
            </p>
            <p>
              大学でコンピューターサイエンスを学び、その後フロントエンド開発からバックエンド、
              そしてフルスタック開発まで幅広い技術を習得してきました。
              特にユーザー体験を重視したWebアプリケーションの開発を得意としています。
            </p>
            <p>
              新しい技術を学ぶことが好きで、常に最新のトレンドをキャッチアップしながら、
              実践的なプロジェクトに活かすことを心がけています。
            </p>
          </div>
        </div>
      </div>

      {/* スキルセット */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          技術スキル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">フロントエンド</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">React / Next.js</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">TypeScript</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tailwind CSS</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">バックエンド</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Node.js</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Python</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Database</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 経験・経歴 */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          経験 & 経歴
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900">フリーランス開発者</h3>
              <span className="text-gray-600">2023年 - 現在</span>
            </div>
            <p className="text-gray-700">
              様々なクライアントのWebアプリケーション開発に従事。
              フロントエンドからバックエンドまで一貫した開発を担当。
            </p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900">Web開発インターン</h3>
              <span className="text-gray-600">2022年 - 2023年</span>
            </div>
            <p className="text-gray-700">
              スタートアップ企業でのインターンとして、React/Next.jsを使用した
              Webアプリケーションの開発に参加。
            </p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900">コンピューターサイエンス専攻</h3>
              <span className="text-gray-600">2020年 - 2024年</span>
            </div>
            <p className="text-gray-700">
              大学でコンピューターサイエンスを専攻し、プログラミングの基礎から
              高度なアルゴリズムまで幅広く学習。
            </p>
          </div>
        </div>
      </div>

      {/* 趣味・興味 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          趣味 & 興味
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">デザイン</h3>
            <p className="text-gray-600 text-sm">
              UI/UXデザインとグラフィックデザインに興味があります
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">読書</h3>
            <p className="text-gray-600 text-sm">
              技術書からビジネス書まで幅広く読書を楽しんでいます
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">音楽</h3>
            <p className="text-gray-600 text-sm">
              集中するときはインストゥルメンタル音楽を聴いています
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}