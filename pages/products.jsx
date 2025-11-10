import SEO from '../components/SEO'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '../lib/locale'
import { translations } from '../lib/translations'
import { useEffect, useState } from 'react'

export default function Products() {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale]
  const tProducts = t.products
  const tDetails = t.productDetails

  // 产品数据，根据语言动态获取
  const getProducts = () => {
    const details = translations[currentLocale].productDetails
    return [
      {
        id: 1,
        name: details.tvStand.name,
        slug: 'tv-stand',
        description: details.tvStand.description,
        features: details.tvStand.features,
        image: '/products/tv-stand.jpg',
      },
      {
        id: 2,
        name: details.tvMobileCart.name,
        slug: 'tv-mobile-cart',
        description: details.tvMobileCart.description,
        features: details.tvMobileCart.features,
        image: '/products/tv-mobile-cart.jpg',
      },
      {
        id: 3,
        name: details.speakerStand.name,
        slug: 'speaker-stand',
        description: details.speakerStand.description,
        features: details.speakerStand.features,
        image: '/products/speaker-stand.jpg',
      },
      {
        id: 4,
        name: details.acBracket.name,
        slug: 'ac-bracket',
        description: details.acBracket.description,
        features: details.acBracket.features,
        image: '/products/ac-bracket.jpg',
      },
      {
        id: 5,
        name: details.monitorStand.name,
        slug: 'monitor-stand',
        description: details.monitorStand.description,
        features: details.monitorStand.features,
        image: '/products/monitor-stand.jpg',
      },
      {
        id: 6,
        name: details.tvWallMount.name,
        slug: 'tv-wall-mount',
        description: details.tvWallMount.description,
        features: details.tvWallMount.features,
        image: '/products/tv-wall-mount.jpg',
      },
    ]
  }

  const products = getProducts()

  return (
    <>
      <SEO
        title={tProducts.title}
        description="BeWellTEC 专业生产电视支架、电视移动推车、音响支架、空调支架、显示器支架、电视吊架等高品质支架产品。"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tProducts.title}</h1>
            <p className="text-xl text-primary-100">
              {tProducts.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Menu */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{tDetails.category}</h2>
                <nav className="space-y-2">
                  {products.map((product) => (
                    <a
                      key={product.id}
                      href={`#${product.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                      {product.name}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                id={product.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden scroll-mt-20"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {product.image && product.image.startsWith('/') ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-primary-600 font-semibold">{product.category}</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{tProducts.features}</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <svg
                            className="w-4 h-4 text-primary-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                  >
                    {tProducts.inquire}
                  </Link>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {tProducts.customTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {tProducts.customDesc}
          </p>
          <Link href="/contact" className="btn-primary">
            {tProducts.contactUs}
          </Link>
        </div>
      </section>
    </>
  )
}

