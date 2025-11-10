import Link from 'next/link'
import { useLocale } from '../lib/locale'
import { translations } from '../lib/translations'
import { useEffect, useState } from 'react'

export default function BlogCard({ slug, title, date, excerpt }) {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale].blog

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <time className="text-sm text-gray-500">{date}</time>
          <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {currentLocale === 'zh' ? '产品资讯' : 'Product News'}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
        >
          {t.readMore}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

