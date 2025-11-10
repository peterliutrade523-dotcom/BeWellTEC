import SEO from '../../components/SEO'
import { getAllPostSlugs, getPostData } from '../../lib/markdown'
import Link from 'next/link'
import { useLocale } from '../../lib/locale'
import { translations } from '../../lib/translations'
import { useEffect, useState } from 'react'

export default function BlogPost({ postData }) {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLocale = mounted ? locale : 'zh'
  const t = translations[currentLocale]
  const tBlog = t.blog

  // 检查博客文章的语言是否与当前语言匹配
  const postLocale = postData.locale || 'zh'
  const isLocaleMismatch = mounted && postLocale !== currentLocale

  // 如果语言不匹配，显示提示信息
  if (isLocaleMismatch) {
    return (
      <>
        <SEO
          title={tBlog.title}
          description={postData.excerpt || postData.description}
        />
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{tBlog.title}</h1>
              <p className="text-xl text-primary-100 mb-8">
                {currentLocale === 'zh' 
                  ? '抱歉，这篇文章暂时没有中文版本。' 
                  : 'Sorry, this article is not available in English yet.'}
              </p>
              <Link href="/blog" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                {tBlog.backToList}
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO
        title={postData.title}
        description={postData.excerpt || postData.description}
        ogTitle={postData.title}
        ogDescription={postData.excerpt || postData.description}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {tBlog.backToList}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{postData.title}</h1>
            {postData.date && (
              <time className="text-primary-100">{postData.date}</time>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <Link href="/blog" className="btn-primary">
            {tBlog.viewMore}
          </Link>
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}

