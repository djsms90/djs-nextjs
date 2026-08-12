import BlogLayout from '../../../components/BlogLayout'
import { blogMeta } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'How Professional Service Providers Are Using YouTube to Generate Inbound Clients',
  description: 'The exact strategy we used to take a client from zero to 1M+ views and make YouTube their number one inbound source. Zero cold outreach.',
  slug: 'youtube',
  date: '2026-04-03',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Video Marketing"
      title="How Professional Service Providers Are Using YouTube to Generate Inbound Clients"
      date="April 3, 2026"
      readTime="8 min read"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />
    </BlogLayout>
  )
}
