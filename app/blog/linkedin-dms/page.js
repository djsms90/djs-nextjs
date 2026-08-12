import BlogLayout from '../../../components/BlogLayout'
import { blogMeta } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'LinkedIn Auto-DMs: The Right Way to Turn New Followers Into Booked Calls',
  description: 'Most LinkedIn DM sequences read like spam. Here is the approach that actually converts new followers into booked discovery calls.',
  slug: 'linkedin-dms',
  date: '2026-04-14',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Social Media"
      title="LinkedIn Auto-DMs: The Right Way to Turn New Followers Into Booked Calls"
      date="April 14, 2026"
      readTime="5 min read"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />
    </BlogLayout>
  )
}
