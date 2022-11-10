import { Tab } from "@headlessui/react"
import { BIOGRAPHY } from "../constants/biography"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const BioTabs = () => {
  return (
    <article className="py-16">
      <Tab.Group>
        <Tab.List className="flex space-x-6">
          {Object.keys(BIOGRAPHY).map(bio => (
            <Tab
              key={bio}
              className={({ selected }) =>
                classNames(
                  "py-1 leading-5 font-medium text-zinc-700 text-sm",
                  "focus:outline-none",
                  selected
                    ? "font-semibold"
                    : "text-zinc-400 hover:text-zinc-900"
                )
              }
            >
              <div className="dark:text-zinc-300">{bio}</div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(BIOGRAPHY).map((bios, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "py-1",
                "focus:outline-none",
                "dark:text-zinc-300"
              )}
            >
              <div className="min-h-min">
                <ul>
                  {bios.map((bio, idx) => (
                    <li key={idx} className="relative py-1 space-y-2">
                      <div className="prose max-w-prose dark:text-zinc-400">
                        {bio.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {bio.tags.map((tag, idx) => (
                          <button
                            key={idx}
                            className="px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded text-xs dark:bg-zinc-600 dark:text-zinc-400"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {bio.tagsDetails.map((tag, idx) => (
                          <button
                            key={idx}
                            className="px-2 py-0.5 bg-zinc-50 text-zinc-500 rounded text-xs dark:bg-zinc-700 dark:text-zinc-500"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </article>
  )
}

export default BioTabs