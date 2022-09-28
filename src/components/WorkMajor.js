import { useState } from "react";

import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";
import Work4 from "../images/work4.png";

const WorkMajor = () => {
  const workMajorDetails = [
    {
      title: "Lesekloden frontpage",
      image: Work1,
      description: "The landingpage for Lesekloden.no.",
      details:
        "Minimalistic design with CTAs for Leseklodens two user-groups: Children and teachers.",
      url: "https://www.lesekloden.no",
    },
    {
      title: "Lesekloden themepage",
      image: Work2,
      description: "One of Leseklodens multiple themepages.",
      details:
        "Includes accessible modals and tabbed content for multiple languages. All data fetched with Axios.",
      url: "https://www.lesekloden.no/tema/fugler",
    },
    {
      title: "Lesekloden puzzle game",
      image: Work3,
      description: "One of Leseklodens most popular games.",
      details:
        "Generated math-tasks with 17 levels of difficulty. Reveals images gradually through a grid, depending on selected theme.",
      url: "https://www.lesekloden.no/plusslespill",
    },
    {
      title: "Lesekloden worksheets",
      image: Work4,
      description:
        "Grid-view of Leseklodens free worksheets available for download.",
      details:
        "All data is loaded conditionally via database, dependant on membership status.",
      url: "https://www.lesekloden.no/fag/4",
    },
  ];

  const [activeDetails, setActiveDetails] = useState(0);

  return (
    <section>
      <div className="container px-5 py-16 mx-auto">
        <h2 className="text-7xl dark:text-zinc-50">work</h2>
        <div className="max-w-4xl py-6 mb-6 prose prose-zinc dark:text-zinc-400">
          <p>
            My main project for the last 3+ years is Lesekloden.no, one of
            Norway's largest educational websites for teachers and children in
            grade 1. - 7.
          </p>
          <p>
            Version 1 of the site was built with a Wordpress backend and
            BulmaCSS frontend, with custom modules built in PHP.
            <br />
            Version 2 is built with a Laravel 8 PHP / MySQL backend, and
            frontend in TailwindCSS v3 and AlpineJS v3.
          </p>
          <p></p>
          <p>
            Lesekloden was nominated for <em>Hobbyproject of the Year</em> on
            Kode24.no in 2020.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          Click thumbnails for details.
        </div>

        <div className="flex gap-3 my-3">
          {workMajorDetails.map((image, idx) => (
            <button
              key={idx}
              className="w-40 transition duration-200 ease-in-out rounded-sm zincscale-75 opacity-95 hover:opacity-100 hover:zincscale-0 focus:zincscale-75 focus:ring-2 focus:outline-none focus:ring-zinc-800 focus:ring-offset-2"
              onClick={() => setActiveDetails(idx)}
            >
              <img
                className="rounded-sm object-fit"
                src={image.image}
                alt={image.title}
              />
            </button>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="order-last w-full md:w-10/12 md:order-first">
            <img
              className="w-full transition duration-500 ease-in-out rounded-sm zincscale-25 opacity-95 hover:opacity-100 hover:zincscale-0"
              src={workMajorDetails[activeDetails].image}
              alt={workMajorDetails[activeDetails].title}
            />
          </div>

          <div className="order-first w-full space-y-2 md:w-2/12 md:order-last">
            <div className="font-semibold dark:text-white">
              {workMajorDetails[activeDetails].title}
            </div>
            <div className="text-zinc-800 dark:text-zinc-300">
              {workMajorDetails[activeDetails].description}
            </div>
            <div className="text-zinc-500">
              {workMajorDetails[activeDetails].details}
            </div>

            <div className="pt-3 border-t">
              <a
                className="flex hover:underline dark:text-white"
                href={workMajorDetails[activeDetails].url}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                External link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkMajor;
