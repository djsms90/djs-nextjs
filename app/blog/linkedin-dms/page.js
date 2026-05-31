import BlogLayout from '../../../components/BlogLayout'

export const metadata = {
  title: 'LinkedIn Auto-DMs That Convert Followers to Clients | DJS',
  description: 'Most LinkedIn DM sequences read like spam. Here is the approach that actually converts new followers into booked discovery calls.',
  alternates: { canonical: 'https://djsmarketingservices.com/blog/linkedin-dms' },
}

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
