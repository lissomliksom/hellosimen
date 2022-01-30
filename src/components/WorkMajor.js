import { useState } from 'react'

import Work1 from '../images/work1.png'
import Work2 from '../images/work2.png'
import Work3 from '../images/work3.png'
import Work4 from '../images/work4.png'



const WorkMajor = () => {

  const workImages = [
    {
      title: 'Lesekloden frontpage',
      image: Work1,
    },
    {
      title: 'Lesekloden themepage',
      image: Work2
    },
    {
      title: 'Lesekloden puzzle game',
      image: Work3
    },
    {
      title: 'Lesekloden worksheets',
      image: Work4
    },
  ]

  const [activeImage, setActiveImage] = useState(0)

  return(
    <section>
      <div className="container px-5 py-16 mx-auto">
        <h2 className="text-7xl dark:text-gray-50">work</h2>
        <div className="py-6 prose prose-zinc max-w-prose">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>

        <div className="flex justify-between gap-6">
          <div className="w-10/12">
            <img 
              className="w-full transition duration-500 ease-in-out rounded-sm grayscale-25 opacity-95 hover:opacity-100 hover:grayscale-0"
              src={workImages[activeImage].image} 
              alt={workImages[activeImage].title}
            />
          </div>
          <div className="w-2/12">

            <a 
              className="flex mb-3 text-gray-400 cursor-not-allowed"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              {/* Github logo */}
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 mr-3">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              GitHub (private)
            </a>

            <a 
              className="flex"
              href="https://www.lesekloden.no"
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

        <div className="flex gap-3 my-3">
          {workImages.map((image, idx) => ( 
            <button
              key={idx} 
              className="w-40 transition duration-200 ease-in-out rounded-sm grayscale-75 opacity-95 hover:opacity-100 hover:grayscale-0 focus:grayscale-75 focus:ring-2 focus:outline-none focus:ring-zinc-800 focus:ring-offset-2"
              onClick={() => (
                  setActiveImage(idx)
                )
              }
              >
              <img
                className="rounded-sm object-fit"              
                src={image.image}
                alt={image.title}
              />
            </button>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WorkMajor