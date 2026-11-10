/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old static HTML pages → new Next.js routes
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/blog-linkedin-dms.html', destination: '/blog/linkedin-dms', permanent: true },
      { source: '/blog-geo-vs-seo.html', destination: '/blog/geo-vs-seo', permanent: true },
      { source: '/blog-ai-overviews.html', destination: '/blog/ai-overviews', permanent: true },
      { source: '/blog-meta-ai-ads.html', destination: '/blog/meta-ai-ads', permanent: true },
      { source: '/blog-aeo.html', destination: '/blog/aeo', permanent: true },
      { source: '/blog-youtube.html', destination: '/blog/youtube', permanent: true },
      { source: '/blog-pmax.html', destination: '/blog/pmax', permanent: true },
      { source: '/blog-local-seo.html', destination: '/blog/local-seo', permanent: true },
      { source: '/blog-boost365.html', destination: '/blog/boost365', permanent: true },
      { source: '/pillar1-branding.html', destination: '/#services', permanent: true },
      { source: '/pillar2-optimization.html', destination: '/#services', permanent: true },
      { source: '/pillar3-outreach.html', destination: '/#services', permanent: true },
      { source: '/pillar4-sales.html', destination: '/#services', permanent: true },
      { source: '/pillar5-tracking.html', destination: '/#services', permanent: true },
    ]
  },
};

export default nextConfig;
