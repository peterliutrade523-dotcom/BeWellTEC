import SEO from '../components/SEO'
import Link from 'next/link'
import { useLocale } from '../lib/locale'
import { translations } from '../lib/translations'
import { useEffect, useState } from 'react'

export default function Home() {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // 在客户端渲染前使用默认语言
  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale].home

  return (
    <>
      <SEO
        title={mounted ? (locale === 'zh' ? '首页' : 'Home') : '首页'}
        description="BeWellTEC - 专业的支架制造商，生产电视支架、音响支架、空调支架、显示器支架等高品质产品。"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-medium">
                {t.viewProducts}
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-medium">
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChooseUs}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.whyChooseUsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.quality}</h3>
              <p className="text-gray-600">
                {t.qualityDesc}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.customization}</h3>
              <p className="text-gray-600">
                {t.customizationDesc}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.fastDelivery}</h3>
              <p className="text-gray-600">
                {t.fastDeliveryDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <Link href="/contact" className="btn-primary">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}

