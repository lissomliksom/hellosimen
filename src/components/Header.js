import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  const ModeIcon = (mode) => {
    if(mode) {
      return(
        <span className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full flex items-center justify-center transition duration-500 transform">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="transition-transform duration-500 transform scale-0">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3.5 transform transition-transform scale-100 duration-300">
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      )
    } 
    else {
      return(
        <span className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full flex items-center justify-center transition duration-500 transform">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none text-gray-500 transition duration-500 transform scale-100 opacity-100">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 text-gray-700 transition duration-500 transform scale-0 opacity-0">
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      )
    }
  }

  return(
    <header>
      <div 
        className="container flex items-end justify-between px-5 py-6 mx-auto"
      >
        <div className="w-10/12 dark:bg-blue-900">
          <h1 className="hidden text-lg md:flex md:space-x-6">
            <span className="text-gray-600">Portfolio</span>
            <span className="font-semibold">&middot;</span>
            <span className="text-gray-400">Simen F. Kristoffersen</span>
          </h1>
        </div>

        <div className="w-2/12">
          {/*
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${darkMode ? 'bg-gray-900' : 'bg-gray-700'}
              relative inline-flex flex-shrink-0 h-[28px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Light / Dark mode</span>
            <span
              aria-hidden="true"
              className={`${darkMode ? 'translate-x-6' : 'translate-x-0'}
                pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            >
              {ModeIcon(darkMode)}
            </span>
          </Switch>
          {darkMode}
          */}
        </div>

      </div>
    </header>
  )
}

export default Header

/*
  <button className="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-gray-500 text-gray-200 focus-visible:ring-gray-600" id="headlessui-switch-5" role="switch" type="button" tabIndex="0" aria-checked="false">
    <span className="sr-only">Light / Dark mode</span>
    <svg width="24" height="24" fill="none" aria-hidden="true" className="transition-transform duration-500 transform scale-0">
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3.5 transform transition-transform scale-100 duration-300">
      <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    
    <span className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform">
      <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none text-gray-500 transition duration-500 transform scale-100 opacity-100">
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 text-gray-700 transition duration-500 transform scale-0 opacity-0">
        <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </span>
  </button>
*/