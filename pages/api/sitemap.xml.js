import { getSortedPostsData } from '../../lib/markdown'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'

function generateSiteMap(posts) {
  const currentDate = new Date().toISOString().split('T')[0]
  
  // 静态页面
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((page) => {
         return `
       <url>
           <loc>${siteUrl}${page.url}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `
       })
       .join('')}
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${siteUrl}/blog/${post.slug}</loc>
           <lastmod>${post.date || currentDate}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // 获取所有博客文章
  const posts = getSortedPostsData()

  // 生成 XML sitemap
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // 写入 sitemap
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap


