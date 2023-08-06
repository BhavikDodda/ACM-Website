import { useState } from 'react'
import { Tab } from '@headlessui/react'
import AccordionComponent from './AccordionComponent'
import { Reveal } from './Reveal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    Events: [
      {
        id: 1,
        header: 'Tech Talks and Workshops',
        content:
          'Our ACM Student Chapter hosts regular Tech Talks and Workshops. These events provide invaluable insights into cutting-edge technologies, trends, and research. Through interactive sessions, attendees have the opportunity to enhance their technical skills and broaden their knowledge base. From artificial intelligence to fullstack development, our diverse range of topics ensures that members stay at the forefront of the rapidly evolving tech landscape.',
      },
      {
        id: 2,
        header: 'Hackathons and Coding Competitions',
        content:
          "Engage your problem-solving prowess in our thrilling Hackathons and Coding Competitions. These events challenge participants to collaborate, innovate, and create solutions to real-world problems within a limited timeframe. Whether you're a seasoned coder or a beginner, these events offer an excellent platform to showcase your talents and connect with like-minded individuals. Expect adrenaline-pumping challenges and the chance to win exciting prizes!",
      },
      {
        id: 3,
        header: 'Building Real-world Projects',
        content:
          'Members engage in hands-on project development, honing practical skills, problem-solving abilities, and teamwork. Diverse project teams collaborate on web applications, mobile apps, and hardware-based projects, fostering innovation. The experience strengthens technical expertise and project management capabilities, preparing members for real-world challenges.',
      },
    ],
    FAQs: [
      {
        id: 1,
        header: 'How can I become a member of the ACM Student Chapter?',
        content:
          'Becoming a member is easy! We have a simple interview process that allows you to join our vibrant community of tech enthusiasts. The tentative dates for the interviews are 19-20th August, prepare well!',
      },
      {
        id: 2,
        header: 'Do I need prior technical knowledge to participate in events?',
        content:
          "Not at all! Our events cater to a diverse audience with varying levels of technical expertise. Whether you're a beginner or an expert, you'll find value in our events, workshops, and activities.",
      },
      {
        id: 3,
        header: "Can I participate in events if I'm not from a computer science background?",
        content:
          'Absolutely! While ACM Student Chapter primarily focuses on computer science and related fields, we welcome students from all disciplines. Many of our events emphasize interdisciplinary collaboration, offering unique perspectives and opportunities for growth.',
      },
    ],
    Benefits: [
      {
        id: 1,
        header: 'Enhance Technical Skills',
        content:
          "As a member of our ACM Student Chapter, you'll have access to workshops, tech talks, and coding competitions that will sharpen your technical skills. Stay updated on the latest technologies and gain hands-on experience through practical sessions.",
      },
      {
        id: 2,
        header: 'Networking Opportunities',
        content:
          'Build a strong professional network by interacting with industry experts, faculty members, and like-minded students. Our flagship hackathon Dotslash provides an excellent platform to create connections that can open doors to future career opportunities.',
      },
      // {
      //   id: 3,
      //   header: 'Resume Building and Career Support',
      //   content:
      //     'Receive guidance on crafting an impressive resume and preparing for job interviews. Our chapter offers resources to help you navigate the job market and secure internships or full-time positions.',
      // },
      {
        id: 3,
        header: 'Community and Friendship',
        content:
          'Join a welcoming community of tech enthusiasts who share your passion for technology. Participate in social gatherings and make lasting friendships with peers who can become valuable collaborators and mentors throughout your academic journey and beyond.',
      },
    ],
  })

  return (
    <>
      <div className="mx-auto w-full max-w-3xl px-2 pt-8 pb-16 sm:px-0">
        <div className="container mx-auto mb-4 flex flex-col items-center pb-6 md:p-10 md:px-12">
          <Reveal>
            <h1 className="leadi text-center text-4xl font-semibold">What we do</h1>
          </Reveal>
        </div>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-t-xl dark:bg-gray-900/20">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-t-xl py-2.5 text-sm font-medium leading-5 dark:text-gray-100 ',
                    selected ? 'border bg-inherit focus:outline-none' : 'bg-gray-400/[0.12]'
                  )
                }
              >
                <a className="text-xl">{category}</a>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className={classNames('bg-gray rounded-xl-400')}>
                <AccordionComponent element={posts} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="container mx-auto mb-4 flex flex-col items-center pb-6 md:p-10 md:px-12">
        <Reveal>
          <h1 className="leadi pt-8 text-center text-4xl font-semibold">What you can expect</h1>
        </Reveal>
      </div>
    </>
  )
}
