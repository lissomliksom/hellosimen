import { useState } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"

import { MAJOR_PROJECTS } from "../constants/projects"


const WorkMajor = () => {
  const [activeDetails, setActiveDetails] = useState(0)

  return (
    <section className="px-5 divide-y divide-gray-200 dark:divide-gray-700">

      <div className="mb-1">
        <h2 className="text-sm font-semibold leading-7 text-gray-900 uppercase dark:text-gray-100 sm:truncate">Main projects</h2>
      </div>

      {MAJOR_PROJECTS.map((project, idx) => (
        <article className="py-12" key={idx}>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div className="space-y-5">
              <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                {project.type}
              </div>
              <div className="space-y-2">
                <div
                  className={
                    project.url
                      ? "text-zinc-700 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-300"
                      : "text-zinc-200 dark:text-zinc-700 cursor-not-allowed line-through"
                  }>
                  <a 
                    href={
                      project.url
                        ? project.url
                        : ""
                      }
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-sm font-medium leading-6">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <span>Link</span>
                  </a>
                </div>
                <div
                  className={
                    project.github
                      ? "text-zinc-700 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-300"
                      : "text-gray-200 dark:text-zinc-700 cursor-not-allowed line-through"
                  }
                >
                  <a
                    href={
                      project.github
                        ? project.github
                        : ""
                      }
                    target="_blank"
                    rel="noreferrer noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium leading-6">
                    {/* Github logo */}
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-5 h-5 "
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap space-x-3">
                    {project.stack.map((tech, idx) => (
                      <span className="text-sm font-medium text-gray-500 uppercase" key={idx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                  {project.description}
                </div>
              </div>

              <div
                key={idx}
                className="mb-1"
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center mb-1">
                        <span className="mr-2 font-semibold dark:text-gray-200">Show more</span>
                        <ChevronUpIcon className={`${open ? "transform rotate-180" : "" } w-5 h-5 text-gray-500`} />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel>
                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {project.samples.map((sample, idx) => (
                              <div className="py-5" key={idx}>
                                <div className="p-5 bg-indigo-700 rounded-md h-72" key={idx}>
                                  <img src={sample.image} alt={sample.title} className="object-cover w-full h-full rounded-md" />
                                </div>
                                <div className="mt-2 space-y-2">
                                  <h4 className="text-lg dark:text-white">{sample.title}</h4>
                                  <p className="text-gray-700 dark:text-gray-300">{sample.description}</p>
                                  <p className="text-sm text-gray-500">{sample.details}</p>
                                  <a 
                                    href={sample.url} 
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                    className="flex items-center justify-center px-3 py-1 space-x-1 text-blue-600 border rounded-full dark:text-blue-200 dark:border-gray-700 max-w-max">
                                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                      <span className="text-sm">Link</span>
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>

            </div>
          </div>
        </article>
      ))}

      

    </section>
  )
}

export default WorkMajor