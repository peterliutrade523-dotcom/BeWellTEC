'use client'
import { useLocale } from '../lib/locale'

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLocale('zh')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'zh'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:text-primary-600'
        }`}
      >
        中文
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLocale('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:text-primary-600'
        }`}
      >
        English
      </button>
    </div>
  )
}

