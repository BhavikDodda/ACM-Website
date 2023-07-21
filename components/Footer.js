import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/acm-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 hidden bg-inherit pt-6 dark:text-gray-50 lg:block">
        <div className="container mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50 px-6 md:space-y-12">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-full pb-6 md:col-span-5 md:pb-0">
              <div className="flex justify-center space-x-3 md:justify-start">
                <div className="rounded-ful mb-1 flex h-12 w-12 items-center justify-center">
                  <Image src={Logo} alt="ACM NIT Surat" width="40px" height="40px" />
                </div>
                <Link href="/">
                  <span className="cursor-pointer self-center text-2xl font-semibold hover:text-primary-500">
                    ACM NIT Surat
                  </span>
                </Link>
              </div>
              <p className="text-md pr-12 text-justify ">
                ACM NIT-Surat is a student chapter highly focused on planning and organising events
                for coding, development, design.
              </p>
            </div>
            <div className="col-span-6 text-center md:col-span-3 md:text-left">
              <p className="pb-1 text-lg font-medium">Quick Links</p>
              <ul>
                <li>
                  <Link href="/blog">
                    <span className="cursor-pointer hover:text-primary-400">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <span className="cursor-pointer hover:text-primary-400">Events</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <span className="cursor-pointer hover:text-primary-400">Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <span className="cursor-pointer hover:text-primary-400">Team</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="cursor-pointer hover:text-primary-400">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="cursor-pointer hover:text-primary-400">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:col-span-4 md:text-left">
              <p className="pb-1 text-lg font-medium">Contacts</p>
              <ul>
                <li className="my-3">
                  <a href="#" className="hover:text-primary-400">
                    📞 +91 12345 43210
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:text-primary-400">
                    ✉️ acmnitsurat@gmail.com
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:text-primary-400">
                    📍 SVNIT, Ichchhanth, Surat 395 007
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="/">
              <p className="cursor-pointer">
                Made with ❤️ by <span className="text-primary-500">ACM </span>NIT Surat
              </p>
            </Link>
          </div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>

        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {/* <Link href="https://github.com/vinayaka-iyer/ACM-Website">ACM NIT Surat</Link> */}
        </div>
      </div>
    </footer>
  )
}
