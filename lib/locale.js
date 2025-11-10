'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const LocaleContext = createContext()

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('zh')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // 从 localStorage 读取保存的语言设置
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && ['zh', 'en'].includes(savedLocale)) {
        setLocale(savedLocale)
      }
    }
  }, [])

  const changeLocale = (newLocale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}

