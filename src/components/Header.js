import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Header = ({ theme, setTheme }) => {

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
          <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform scale-100 opacity-100 text-zinc-500">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform scale-0 opacity-0 text-zinc-700">
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      )
    }
  }

  const themeHandler = () => {
    if (theme === '') {
      setTheme('dark');
      console.log("dark")
    } else {
      setTheme('');
      console.log("light")
    }
  }

  return(
    <header>
      <div 
        className="container flex items-end justify-between px-5 py-6 mx-auto"
      >
        <div className="md:w-10/12">
          <h1 className="hidden text-lg md:flex md:space-x-6">
            <span className="text-zinc-600">Portfolio</span>
            <span className="font-semibold">&middot;</span>
            <span className="text-zinc-400">Simen F. Kristoffersen</span>
          </h1>
        </div>

        <div className="md:w-2/12">
          <div className="flex space-x-2">
            <button 
              onClick={() => themeHandler()}
              className="flex px-3 py-2 space-x-3 text-xs border rounded-md border-zinc-500 hover:border-zinc-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
          {/*
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${darkMode ? 'bg-zinc-900' : 'bg-zinc-700'}
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
  <button className="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-zinc-500 text-zinc-200 focus-visible:ring-zinc-600" id="headlessui-switch-5" role="switch" type="button" tabIndex="0" aria-checked="false">
    <span className="sr-only">Light / Dark mode</span>
    <svg width="24" height="24" fill="none" aria-hidden="true" className="transition-transform duration-500 transform scale-0">
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3.5 transform transition-transform scale-100 duration-300">
      <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    
    <span className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform">
      <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform scale-100 opacity-100 text-zinc-500">
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform scale-0 opacity-0 text-zinc-700">
        <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </span>
  </button>
*/