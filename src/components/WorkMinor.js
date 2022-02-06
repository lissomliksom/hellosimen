import { Disclosure, Transition } from "@headlessui/react"

const WorkMinor = () => {

  const minorProjects = [
    {
      title: 'Portfolio',
      content: 'The page you\'re currently viewing.',
      tech: 'Built with React, HeadlessUI and TailwindCSS.',
      github: 'https://github.com/lissomliksom/hellosimen', 
      url: false,
    },
    {
      title: 'Bestefars blomster',
      content: 'A simple responsive image gallery with modals. One-day-project.',
      tech: 'Built with React and TailwindCSS.',
      github: 'https://github.com/lissomliksom/bestefars-blomster',
      url: 'https://bestefar.hellosimen.com/',
    },
    {
      title: 'Greyp',
      content: 'A tool to generate multiple greyscale color palettes for design prototyping. Tweak variables to saturate greys with different RGB-values.',
      tech: 'Built with SCSS',
      github: 'https://github.com/lissomliksom/greyp',
      url: 'https://lissomliksom.github.io/greyp/',
    },
    {
      title: 'Rainbow-classless',
      content: 'Classless CSS-framework: Write semantic HTML and get some basic styling. Includes styles for most common HTML-elements, including typography, tables, forms, images and more.',
      tech: 'CSS custom properties / variables',
      github: 'https://github.com/lissomliksom/rainbow-classless',
      url: 'https://lissomliksom.github.io/rainbow-classless/',
    },
    {
      title: 'Printsheet',
      content: 'When producing custom worksheets for Lesekloden i needed specific styles for print. There are many stylesheets for print out there, but none were a perfect fit. So I created my own.',
      tech: 'CSS',
      github: 'https://github.com/lissomliksom/printsheet',
      url: false,
    },
    {
      title: 'Lesekloden v1',
      content: 'First version of my main project, Lesekloden.no. Used a lot of custom configurations to Wordpress, including a complete custom design system.',
      tech: 'Built with Wordpress and BulmaCSS',
      github: false,
      url: false,
    },
  ]

  return(
    <section>
      <div className="container px-5 py-6 mx-auto">
        <h3 className="text-4xl dark:text-zinc-50">minor projects</h3>
        <div className="py-6 prose prose-zinc dark:text-zinc-400">
          <p>
            Personal projects and tools for prototyping and learning purposes.
          </p>
        </div>

        {minorProjects.map((project, idx) => ( 
          <div 
            key={idx}
            className="px-3 py-8 mb-1 rounded-sm bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:text-zinc-500 dark:text-zinc-600"
          > 
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center mb-1">
                  <span className="mr-2 font-semibold">{project.title}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`${open ? 'transform rotate-180 text-zinc-900 dark:text-zinc-300' : ''} w-5 h-5 text-zinc-400`} 
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
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
                    <div className="flex justify-between gap-6">
                      <div className="w-10/12">
                        <div className="leading-relaxed prose-zinc max-w-prose">
                          <p>
                            {project.content}
                          </p>
                          <p className="mt-2 text-sm text-zinc-700">
                            {project.tech}
                          </p>
                        </div>
                      </div>
                      <div className="w-2/12">
                        <div className={project.github ? 'text-zinc-700 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-300' : 'text-zinc-200 dark:text-zinc-700 cursor-not-allowed line-through'}>
                          <a 
                            className="flex mb-3"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {/* Github logo */}
                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 mr-3">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            GitHub
                          </a>
                        </div>

                        <div className={project.url ? 'text-zinc-700 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-300' : 'text-zinc-200 dark:text-zinc-700 cursor-not-allowed line-through'}>
                          <a 
                            className="flex"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            External link
                          </a>
                        </div>

                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          </div>
        ))}

      </div>
    </section>
  )
}

export default WorkMinor