import { useState } from "react"

import Header from "./components/Header"
import Bio from "./components/Bio"
import WorkMajor from "./components/WorkMajor"
import WorkMinor from "./components/WorkMinor"

const App = () => {
  const [darkMode, setDarkMode] = useState('')

  return (
    <div className={darkMode}>
      <div className="bg-white dark:bg-slate-800">
        <div className="max-w-3xl px-5 mx-auto xl:max-w-5xl">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="space-y-24">
            <Bio />
            <WorkMajor />
            <WorkMinor />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
