import Link from 'next/link'
import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale } from '../lib/locale'
import { translations } from '../lib/translations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale]
  
  const products = [
    { 
      name: currentLocale === 'zh' ? '电视支架' : 'TV Stand', 
      slug: 'tv-stand',
      subItems: [
        { name: currentLocale === 'zh' ? '旋转电视支架' : 'Rotating TV Stand', slug: 'rotating-tv-stand' },
        { name: currentLocale === 'zh' ? '可调电视支架' : 'Adjustable TV Stand', slug: 'adjustable-tv-stand' },
        { name: currentLocale === 'zh' ? '固定电视支架' : 'Fixed TV Stand', slug: 'fixed-tv-stand' },
      ]
    },
    { name: currentLocale === 'zh' ? '电视移动推车' : 'TV Mobile Cart', slug: 'tv-mobile-cart' },
    { name: currentLocale === 'zh' ? '音响支架' : 'Speaker Stand', slug: 'speaker-stand' },
    { name: currentLocale === 'zh' ? '空调支架' : 'AC Bracket', slug: 'ac-bracket' },
    { name: currentLocale === 'zh' ? '显示器支架' : 'Monitor Stand', slug: 'monitor-stand' },
    { name: currentLocale === 'zh' ? '电视吊架' : 'TV Wall Mount', slug: 'tv-wall-mount' },
  ]

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/products', label: t.nav.products, hasDropdown: true, items: products },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BW</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BeWellTEC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setProductsMenuOpen(true)}
                onMouseLeave={() => item.hasDropdown && setProductsMenuOpen(false)}
              >
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center"
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    {productsMenuOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-[100] border border-gray-100"
                        onMouseEnter={() => setProductsMenuOpen(true)}
                        onMouseLeave={() => setProductsMenuOpen(false)}
                        style={{ pointerEvents: 'auto' }}
                      >
                        {item.items.map((product) => {
                          // 电视支架有二级菜单
                          if (product.slug === 'tv-stand' && product.subItems) {
                            return (
                              <div key={product.slug} className="relative group">
                                <div className="px-4 py-2 text-gray-700 font-medium flex items-center justify-between">
                                  {product.name}
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                <div className="ml-2 mt-1 space-y-1 border-l-2 border-primary-100 pl-2">
                                  {product.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.slug}
                                      href={`/products#${subItem.slug}`}
                                      className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer rounded"
                                      onClick={() => setProductsMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={product.slug}
                              href={`/products#${product.slug}`}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer"
                              onClick={() => setProductsMenuOpen(false)}
                            >
                              {product.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="pb-4 border-b border-gray-200">
              <LanguageSwitcher />
            </div>
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => !item.hasDropdown && setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.items.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products#${product.slug}`}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

