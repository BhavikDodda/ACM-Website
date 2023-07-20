import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'

const items = [
  {
    header: 'What is Lorem Ipsum?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    header: 'Where does it come from?',
    content: 'Quisque eget luctus mi, vehicula mollis lorem...',
  },
  {
    header: 'Why do we use it?',
    content: 'Suspendisse massa risus, pretium id interdum in...',
  },
]

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <h1 className="text-xl">{header}</h1>
        <p
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
        >
          &darr;
        </p>
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) => `flex w-full p-4 text-left ${isEnter && 'bg-gray-400/[0.12]'}`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
)

export default function AccordionComponent() {
  return (
    <div className="rounded-lg border">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200}>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
