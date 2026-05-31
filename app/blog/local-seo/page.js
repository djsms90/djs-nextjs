import BlogLayout from '../../../components/BlogLayout'

export const metadata = {
  title: 'Local SEO Playbook for Niche Service Pros 2026 | DJS Marketing',
  description: 'If you serve a local market and you are not ranking in the top 3 locally, you are invisible to the clients who are actively looking for you right now.',
  alternates: { canonical: 'https://djsmarketingservices.com/blog/local-seo' },
}

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
