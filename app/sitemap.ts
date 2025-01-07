import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mouthwashinggame.help'
  const currentDate = new Date().toISOString()

  // 主要页面
  const mainPages = [
    '',
    '/about',
    '/characters',
    '/guide',
    '/story',
    '/resources',
    '/community',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 角色页面
  const characterPages = [
    '/characters/anya',
    '/characters/curly',
    '/characters/jimmy',
    '/characters/daisuke',
    '/characters/swansea',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 指南页面
  const guidePages = [
    '/guide/walkthrough',
    '/guide/puzzles',
    '/guide/achievements',
    '/guide/endings',
    '/guide/items',
    '/guide/troubleshooting',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 故事页面
  const storyPages = [
    '/story/main-plot',
    '/story/analysis',
    '/story/timeline',
    '/story/relationships',
    '/story/secrets',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 资源页面
  const resourcePages = [
    '/resources/download',
    '/resources/faq',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 社区页面
  const communityPages = [
    '/community/news',
    '/community/fanworks',
    '/community/discussion',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }))

  // 关于页面
  const aboutPages = [
    '/about/overview',
    '/about/changelog',
    '/about/requirements',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // 法律页面
  const legalPages = [
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  return [
    ...mainPages,
    ...characterPages,
    ...guidePages,
    ...storyPages,
    ...resourcePages,
    ...communityPages,
    ...aboutPages,
    ...legalPages,
  ].map(item => ({
    ...item,
    lastModified: currentDate
  }))
} 