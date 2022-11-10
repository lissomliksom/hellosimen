import { SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Header = ({ darkMode, setDarkMode }) => {

  const darkModeHandler = () => {
    if (!darkMode) { setDarkMode('dark') } 
    else { setDarkMode('') }
  }

  return (
    <header>
      <div className="container flex items-end justify-end px-4 py-6 mx-auto space-x-8">
          <a 
              href="mailto:Simen.Kristoffersen.88@gmail.com"
              className="text-gray-500 transition duration-200 ease-in hover:text-gray-900 dark:hover:text-gray-400">
              <EnvelopeIcon className="w-6 h-6" />
          </a>
          <button 
            onClick={() => darkModeHandler()} 
            className="text-gray-500 transition duration-200 ease-in hover:text-gray-900 dark:hover:text-gray-400">
            {darkMode
              ? <SunIcon className="w-6 h-6" />
              : <MoonIcon className="w-6 h-6" /> 
            }
        </button>
      </div>

    </header>
  )
}

export default Header