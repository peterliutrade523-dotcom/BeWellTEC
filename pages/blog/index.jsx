import SEO from '../../components/SEO'
import BlogCard from '../../components/BlogCard'
import { getSortedPostsData } from '../../lib/markdown'
import { useLocale } from '../../lib/locale'
import { translations } from '../../lib/translations'
import { useEffect, useState } from 'react'

export default function Blog({ allPostsData }) {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale]
  const tBlog = t.blog

  return (
    <>
      <SEO
        title={tBlog.title}
        description="BeWellTEC 博客，分享支架产品、行业资讯、技术知识等专业内容。"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tBlog.title}</h1>
            <p className="text-xl text-primary-100">
              {tBlog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {(() => {
            // 根据当前语言过滤博客文章
            const filteredPosts = allPostsData.filter(post => {
              // 如果没有 locale 字段，默认为中文
              const postLocale = post.locale || 'zh'
              return postLocale === currentLocale
            })
            
            return filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">{tBlog.noPosts}</p>
              </div>
            )
          })()}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

