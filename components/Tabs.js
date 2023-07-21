import { useState } from 'react'
import { Tab } from '@headlessui/react'
import AccordionComponent from './AccordionComponent'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    Events: [
      {
        id: 1,
        header: 'Development Workshops',
        content:
          'ACM conducts development workshops on popular and emerging technology to get you started with your development journey',
      },
      {
        id: 2,
        header: 'Coding Contests and Challenges',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
      {
        id: 3,
        header: 'Building Real World Projects',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
      {
        id: 4,
        header: 'Career Guidance and Mentorship',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
    ],
    FAQs: [
      {
        id: 1,
        header: 'How do I join ACM?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
      {
        id: 2,
        header: 'What is competitive programming?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
    ],
    Benefits: [
      {
        id: 1,
        header: 'Participate in ACM exclusvie Inhouse events',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
      {
        id: 2,
        header: 'Higher chance to get selected for Dotslash 7.0',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas',
      },
    ],
  })

  return (
    <div className="mx-auto w-full max-w-3xl px-2 py-16 sm:px-0">
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
  )
}
