import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mouthwashinggame.help'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',          // API 路由
        '/private/',      // 私有页面
        '/_next/',        // Next.js 系统文件
        '/_vercel/',      // Vercel 系统文件
        '/cdn-cgi/',      // CDN 缓存文件
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 