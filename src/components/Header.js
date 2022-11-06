const Header = ({ theme, setTheme }) => {
  const themeHandler = () => {
    if (theme === "") {
      setTheme("dark")
    } else {
      setTheme("")
    }
  }

  return (
    <header>
      <div className="container flex items-end justify-between px-5 py-6 mx-auto">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-zinc-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
