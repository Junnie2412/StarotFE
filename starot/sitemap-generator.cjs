const fs = require('fs')

const sitemap = [
  {
    url: 'https://starotvn.com/',
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 1
  },
  {
    url: 'https://starotvn.com/tram-chua-lanh',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: 'https://starotvn.com/dich-vu',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.5
  }
]

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap
  .map(
    (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', xmlContent)
console.log('Sitemap has been generated!')
