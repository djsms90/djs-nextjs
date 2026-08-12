import BlogLayout from '../../../components/BlogLayout'
import { blogMeta } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'Google PMax Just Gave Advertisers What They Have Been Asking For',
  description: 'Customer list exclusions and channel-level reporting finally arrived in Performance Max. Here is what changed and what to do in your campaigns this week.',
  slug: 'pmax',
  date: '2026-05-05',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Paid Advertising"
      title="Google PMax Just Gave Advertisers What They Have Been Asking For"
      date="May 5, 2026"
      readTime="5 min read"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />
    </BlogLayout>
  )
}
