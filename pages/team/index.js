import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import { Reveal } from '@/components/Reveal'

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
  const manav = await getFileBySlug('authors', ['manav'])
  const shubh = await getFileBySlug('authors', ['shubh'])
  const mahesh = await getFileBySlug('authors', ['mahesh'])
  const jainesh = await getFileBySlug('authors', ['jainesh'])
  const yagnik = await getFileBySlug('authors', ['yagnik'])
  const kaushik = await getFileBySlug('authors', ['kaushik'])
  const parth = await getFileBySlug('authors', ['parth'])
  const krishna = await getFileBySlug('authors', ['krishna'])

  return {
    props: {
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
      manav,
      shubh,
      mahesh,
      jainesh,
      yagnik,
      kaushik,
      parth,
      krishna,
    },
  }
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
  manav,
  shubh,
  mahesh,
  jainesh,
  yagnik,
  kaushik,
  parth,
  krishna,
}) {
  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 py-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Team of 2023-2024
          </h1>
        </div>
        <div className="mx-auto xl:grid xl:grid-cols-3">
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
            layout={manav.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={manav.mdxSource}
            frontMatter={manav.frontMatter}
          />
          <MDXLayoutRenderer
            layout={vinayaka.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={vinayaka.mdxSource}
            frontMatter={vinayaka.frontMatter}
          />
          <MDXLayoutRenderer
            layout={shubh.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={shubh.mdxSource}
            frontMatter={shubh.frontMatter}
          />
          <MDXLayoutRenderer
            layout={mahesh.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mahesh.mdxSource}
            frontMatter={mahesh.frontMatter}
          />

          <MDXLayoutRenderer
            layout={rutvik.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={rutvik.mdxSource}
            frontMatter={rutvik.frontMatter}
          />
          <MDXLayoutRenderer
            layout={jainesh.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={jainesh.mdxSource}
            frontMatter={jainesh.frontMatter}
          />
          <MDXLayoutRenderer
            layout={yagnik.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={yagnik.mdxSource}
            frontMatter={yagnik.frontMatter}
          />
          <MDXLayoutRenderer
            layout={ved.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={ved.mdxSource}
            frontMatter={ved.frontMatter}
          />
          <MDXLayoutRenderer
            layout={kaushik.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={kaushik.mdxSource}
            frontMatter={kaushik.frontMatter}
          />
          <MDXLayoutRenderer
            layout={parth.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={parth.mdxSource}
            frontMatter={parth.frontMatter}
          />
          <MDXLayoutRenderer
            layout={raj.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={raj.mdxSource}
            frontMatter={raj.frontMatter}
          />
          <MDXLayoutRenderer
            layout={krishna.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={krishna.mdxSource}
            frontMatter={krishna.frontMatter}
          />
          <MDXLayoutRenderer
            layout={yatra.frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={yatra.mdxSource}
            frontMatter={yatra.frontMatter}
          />
          <PageSEO
            title={'ACM Team 2023-2024'}
            description={'About the ACM NIT Surat Core team 2023-2024'}
          />
        </div>
      </div>
    </>
  )
}
