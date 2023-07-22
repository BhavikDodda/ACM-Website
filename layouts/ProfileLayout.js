import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, shortname, avatar, occupation, company, email, twitter, linkedin, github } =
    frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700"> */}
      {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div> */}
      {/* <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"> */}
      <div className="flex flex-col items-center pt-8">
        {/* <Link href="/team/[shortname]" as={`team/${shortname}`}>
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="h-48 w-48 cursor-pointer rounded-full"
          />
        </Link> */}
        <div className="group h-fit">
          <div className="relative overflow-hidden">
            <Image
              className="h-48 w-48 cursor-pointer rounded-full object-cover"
              src={avatar}
              width="192px"
              height="192px"
            />
            <div className="absolute -bottom-10 flex h-full w-full items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 dark:hover:bg-black/30">
              <button className="rounded-full bg-black py-2 px-5 text-white opacity-50">
                <Link href="/team/[shortname]" as={`team/${shortname}`}>
                  See more
                </Link>
              </button>
            </div>
          </div>
        </div>

        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
        {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
        <div className="flex space-x-3 pt-6">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="twitter" href={twitter} />
        </div>
      </div>
      {/* <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  )
}
