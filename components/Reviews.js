import React from 'react'

const Reviews = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto mb-4 flex flex-col items-center pb-6 md:p-10 md:px-12">
        <h1 className="leadi text-center text-4xl font-semibold">What they say about us</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:px-10 md:pb-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-12 flex flex-col items-center lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 h-8 w-8 dark:text-gray-700"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam,
              eligendi exercitationem molestias possimus facere.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 h-8 w-8 dark:text-gray-700"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="my-2 h-1 w-12 rounded-lg dark:bg-primary-500"></span>
          <p>Sparrowhawk</p>
        </div>
        <div className="mx-12 flex max-w-lg flex-col items-center lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 h-8 w-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              Accusantium illum cupiditate harum asperiores iusto quos quasi quis quae! Fugit
              doloribus, voluptatum quidem magnam velit excepturi nobis
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 right-0 h-8 w-8 dark:text-gray-700"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="my-2 h-1 w-12 rounded-lg dark:bg-primary-500"></span>
          <p>Cassablanca</p>
        </div>
      </div>
    </section>
  )
}

export default Reviews
