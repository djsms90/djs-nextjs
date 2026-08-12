import BlogLayout from '../../../components/BlogLayout'
import { blogMeta } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'The Local SEO Playbook for Niche Service Professionals in 2026',
  description: 'If you serve a local market and you are not ranking in the top 3 locally, you are invisible to the clients who are actively looking for you right now.',
  slug: 'local-seo',
  date: '2026-04-07',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Local SEO"
      title="The Local SEO Playbook for Niche Service Professionals in 2026"
      date="April 7, 2026"
      readTime="6 min read"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />
    </BlogLayout>
  )
}
