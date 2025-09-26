import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'プロジェクト | Portfolio',
  description: '私が取り組んだプロジェクトの一覧です。Web開発、アプリケーション開発など様々な作品をご紹介しています。',
}

// プロジェクトデータ（実際のプロジェクトでは外部ファイルやCMSから取得）
const projects = [
  {
    id: 1,
    title: 'Eコマースプラットフォーム',
    description: 'React/Next.jsとStripeを使用したフル機能のEコマースWebサイト。商品管理、決済処理、ユーザー認証機能を実装。',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Webアプリケーション',
    status: '完成',
    imageColor: 'from-blue-400 to-cyan-400',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'タスク管理アプリ',
    description: 'チーム向けのタスク管理ツール。リアルタイム同期、ドラッグ&ドロップ、通知機能を搭載したSPAアプリケーション。',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Webアプリケーション',
    status: '完成',
    imageColor: 'from-green-400 to-emerald-400',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'ポートフォリオサイト',
    description: 'Next.js 13のApp Routerを使用したレスポンシブなポートフォリオサイト。SEO最適化とパフォーマンス向上を重視。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Webサイト',
    status: '完成',
    imageColor: 'from-purple-400 to-pink-400',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: '天気予報アプリ',
    description: 'OpenWeather APIを使用した天気予報アプリ。位置情報取得、5日間予報、お気に入り都市機能を実装。',
    technologies: ['React', 'JavaScript', 'Weather API', 'Chart.js'],
    category: 'Webアプリケーション',
    status: '完成',
    imageColor: 'from-yellow-400 to-orange-400',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'ブログCMS',
    description: 'Headless CMSとしても使用可能なブログシステム。マークダウンエディター、SEO機能、コメントシステムを搭載。',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TinyMCE'],
    category: 'Webアプリケーション',
    status: '開発中',
    imageColor: 'from-indigo-400 to-blue-400',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'データ可視化ダッシュボード',
    description: 'ビジネスメトリクスを可視化するダッシュボード。インタラクティブなチャートとリアルタイムデータ更新機能。',
    technologies: ['React', 'D3.js', 'Node.js', 'WebSocket', 'PostgreSQL'],
    category: 'データ分析',
    status: '開発中',
    imageColor: 'from-teal-400 to-cyan-400',
    demoUrl: '#',
    githubUrl: '#'
  }
]

const categories = ['すべて', 'Webアプリケーション', 'Webサイト', 'データ分析']

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          これまでに取り組んだプロジェクトの一覧です。
          様々な技術を使用して、実用的なWebアプリケーションやツールを開発しています。
        </p>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* プロジェクト一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* プロジェクト画像（グラデーション） */}
            <div className={`h-48 bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === '完成'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* プロジェクト情報 */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* 技術スタック */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* リンク */}
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  デモを見る
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* もっと見るセクション */}
      <div className="text-center mt-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            もっとプロジェクトをご覧になりたい方へ
          </h2>
          <p className="text-gray-600 mb-6">
            GitHubでより多くのプロジェクトとソースコードをご確認いただけます。
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHubを見る
          </a>
        </div>
      </div>
    </div>
  )
}