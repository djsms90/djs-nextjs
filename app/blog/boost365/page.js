import BlogLayout from '../../../components/BlogLayout'
import { blogMeta } from '../../../lib/seo'

export const metadata = blogMeta({
  title: 'Why One-Off Marketing Tactics Do Not Work, And What to Do Instead',
  description: 'One blog post, one ad campaign, one social push. None of it compounds. Here is why systems beat tactics every time.',
  slug: 'boost365',
  date: '2026-03-28',
})

export default function BlogPost() {
  return (
    <BlogLayout
      tag="Marketing Strategy"
      title="Why One-Off Marketing Tactics Do Not Work, And What to Do Instead"
      date="March 28, 2026"
      readTime="5 min read"
    >
      <div dangerouslySetInnerHTML={{ __html: `` }} />
    </BlogLayout>
  )
}
