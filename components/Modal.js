import React from 'react'

export default function Modal({ title, description, date, href, photos }) {
  const [showModal, setShowModal] = React.useState(false)
  console.log(photos)
  return (
    <>
      <button
        className=" text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Learn more &rarr;
      </button>
      {showModal ? (
        <>
          <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-4xl rounded-md border-2 border-gray-200 border-opacity-60 bg-white dark:border-gray-700 dark:bg-gray-900">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-xl font-semibold md:text-3xl">{title}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-gray-500 opacity-5 outline-none focus:outline-none dark:text-gray-400"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-gray-500 opacity-5 outline-none focus:outline-none dark:text-gray-400">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-sm leading-relaxed md:text-lg">
                    <span className="pr-2 font-bold">Date: </span>
                    {date}
                  </p>
                  <p className="text-blueGray-500 my-4 text-sm leading-relaxed md:text-lg">
                    {' '}
                    <span className="pr-2 font-bold">About the event: </span>
                    {description}
                  </p>
                  {/*Image gallery*/}
                  {photos && <span className="pr-2 text-sm font-bold md:text-lg">Gallery: </span>}

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {photos &&
                      photos.map((photo, i) => (
                        <div key={i}>
                          <img className="h-auto max-w-full rounded-lg" src={photo} />
                        </div>
                      ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-primary-500 outline-none transition-all duration-150 ease-linear hover:text-primary-600 focus:outline-none dark:hover:text-primary-400"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}
