import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

const DEFAULT_LAYOUT = 'ProfileLayout'

export async function getStaticProps() {
  const vinayaka = await getFileBySlug('authors', ['vinayaka'])
  const sparrowhawk = await getFileBySlug('authors', ['sparrowhawk'])
  const acm = await getFileBySlug('authors', ['default'])

  return { props: { vinayaka, sparrowhawk, acm } }
}

export default function About({ vinayaka, sparrowhawk, acm }) {
  return (
    <>
      <PageSEO
        title={'About ACM Team 2023-2024'}
        description={'about the ACM NIT Surat Core team 2023-2024'}
      />

      <div className="divide-y divide-gray-700">
        <div className="space-y-2 py-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            The Team
          </h1>
        </div>

        <div className="xl:grid xl:grid-cols-3">
          <MDXLayoutRenderer
            layout={vinayaka.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={vinayaka.mdxSource}
            frontMatter={vinayaka.frontMatter}
          />

          <MDXLayoutRenderer
            layout={sparrowhawk.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={sparrowhawk.mdxSource}
            frontMatter={sparrowhawk.frontMatter}
          />
          <MDXLayoutRenderer
            layout={acm.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={acm.mdxSource}
            frontMatter={acm.frontMatter}
          />
        </div>
      </div>
    </>
  )
}
