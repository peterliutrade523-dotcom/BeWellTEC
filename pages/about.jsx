import SEO from '../components/SEO'
import { useLocale } from '../lib/locale'
import { translations } from '../lib/translations'
import { useEffect, useState } from 'react'

export default function About() {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale]
  const tAbout = t.about
  const tContent = t.aboutContent

  return (
    <>
      <SEO
        title={tAbout.title}
        description={`了解 BeWellTEC 的公司背景、发展历程和核心优势，我们致力于为全球客户提供专业的支架产品制造服务。`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tAbout.title}</h1>
            <p className="text-xl text-primary-100">
              {tAbout.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{tAbout.companyTitle}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                {tContent.companyDesc1}
              </p>
              <p className="text-gray-700 mb-4">
                {tContent.companyDesc2}
              </p>
              <p className="text-gray-700">
                {tContent.companyDesc3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{tAbout.valuesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">{tContent.integrity}</h3>
              <p className="text-gray-600">
                {tContent.integrityDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">{tContent.professional}</h3>
              <p className="text-gray-600">
                {tContent.professionalDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">{tContent.innovation}</h3>
              <p className="text-gray-600">
                {tContent.innovationDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">{tContent.winWin}</h3>
              <p className="text-gray-600">
                {tContent.winWinDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{tAbout.advantagesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-600">{tAbout.countries}</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">1000+</div>
              <p className="text-gray-600">{tAbout.cases}</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-gray-600">{tAbout.experience}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

