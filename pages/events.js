import siteMetadata from '@/data/siteMetadata'
import eventsData from '@/data/eventsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Events() {
  return (
    <>
      <PageSEO title={`Events - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Events
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are all the events conducted by the ACM Student chapter in the academic year
            2023-2024
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {eventsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
