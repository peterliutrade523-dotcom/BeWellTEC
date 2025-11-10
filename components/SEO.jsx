import Head from 'next/head'

export default function SEO({ title, description, ogTitle, ogDescription, ogImage }) {
  const siteName = 'BeWellTEC - 专业支架制造商'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const metaDescription = description || '专业的支架制造商，生产电视支架、音响支架、空调支架、显示器支架等高品质产品。'
  const metaOgTitle = ogTitle || fullTitle
  const metaOgDescription = ogDescription || metaDescription
  const metaOgImage = ogImage || `${siteUrl}/logo.png`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:description" content={metaOgDescription} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={metaOgTitle} />
      <meta property="twitter:description" content={metaOgDescription} />
      <meta property="twitter:image" content={metaOgImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

