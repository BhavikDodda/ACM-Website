import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

const DEFAULT_LAYOUT = 'ProfileLayout'

export async function getStaticProps() {
  const vinayaka = await getFileBySlug('authors', ['vinayaka'])
  const garvit = await getFileBySlug('authors', ['garvit'])
  const rutvik = await getFileBySlug('authors', ['rutvik'])
  const bhavya = await getFileBySlug('authors', ['bhavya'])
  const anushka = await getFileBySlug('authors', ['anushka'])
  const swayam = await getFileBySlug('authors', ['swayam'])
  const rushil = await getFileBySlug('authors', ['rushil'])
  const ved = await getFileBySlug('authors', ['ved'])
  const yatra = await getFileBySlug('authors', ['yatra'])
  const raj = await getFileBySlug('authors', ['raj'])

  return { props: { vinayaka, garvit, rutvik, bhavya, anushka, swayam, rushil, ved, yatra, raj } }
}

export default function About({
  vinayaka,
  garvit,
  rutvik,
  bhavya,
  anushka,
  swayam,
  rushil,
  ved,
  yatra,
  raj,
}) {
  return (
    <>
      <PageSEO
        title={'About ACM Team 2023-2024'}
        description={'about the ACM NIT Surat Core team 2023-2024'}
      />

      <div className="divide-y divide-gray-700">
        <div className="space-y-2 py-4 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Team of 2023-2024
          </h1>
        </div>

        <div className="xl:grid xl:grid-cols-3">
          <MDXLayoutRenderer
            layout={garvit.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={garvit.mdxSource}
            frontMatter={garvit.frontMatter}
          />
          <MDXLayoutRenderer
            layout={bhavya.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={bhavya.mdxSource}
            frontMatter={bhavya.frontMatter}
          />
          <MDXLayoutRenderer
            layout={swayam.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={swayam.mdxSource}
            frontMatter={swayam.frontMatter}
          />
          <MDXLayoutRenderer
            layout={rushil.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={rushil.mdxSource}
            frontMatter={rushil.frontMatter}
          />
          <MDXLayoutRenderer
            layout={anushka.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={anushka.mdxSource}
            frontMatter={anushka.frontMatter}
          />
          <MDXLayoutRenderer
            layout={vinayaka.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={vinayaka.mdxSource}
            frontMatter={vinayaka.frontMatter}
          />

          <MDXLayoutRenderer
            layout={rutvik.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={rutvik.mdxSource}
            frontMatter={rutvik.frontMatter}
          />
          <MDXLayoutRenderer
            layout={ved.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={ved.mdxSource}
            frontMatter={ved.frontMatter}
          />
          <MDXLayoutRenderer
            layout={raj.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={raj.mdxSource}
            frontMatter={raj.frontMatter}
          />
          <MDXLayoutRenderer
            layout={yatra.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={yatra.mdxSource}
            frontMatter={yatra.frontMatter}
          />
        </div>
      </div>
    </>
  )
}
