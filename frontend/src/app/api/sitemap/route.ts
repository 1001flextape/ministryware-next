// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

const getUrls = () => [
  { loc: 'https://ministryware.org/', lastmod: '2024-10-08', changefreq: 'monthly', priority: 1.0 },
  { loc: 'https://ministryware.org/arcade/bounce', lastmod: '2024-10-08', changefreq: 'monthly', priority: 0.8 },
  { loc: 'https://ministryware.org/donate', lastmod: '2024-10-08', changefreq: 'monthly', priority: 0.6 },
  { loc: 'https://ministryware.org/about', lastmod: '2024-10-08', changefreq: 'monthly', priority: 0.6 },
  { loc: 'https://ministryware.org/more', lastmod: '2024-10-08', changefreq: 'monthly', priority: 0.6 },
  { loc: 'https://ministryware.org/more/case-studies/homeless-app-digitalization', lastmod: '2024-10-08', changefreq: 'monthly', priority: 0.5 },
];

export async function GET() {
  const urls = getUrls();
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
    `
      )
      .join('')}
  </urlset>
  `;
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
