import { useState } from "react"

import Header from "./components/Header"
import Bio from "./components/Bio"
import WorkMajor from "./components/WorkMajor"
import WorkMinor from "./components/WorkMinor"
import Contact from "./components/Contact"

const App = () => {
  const [theme, setTheme] = useState("")

  return (
    <div className={theme}>
      <div className="transition-all duration-500 ease-in-out bg-white dark:bg-zinc-800">
        <Header theme={theme} setTheme={setTheme} />
        <Bio />
        <WorkMajor />
        <WorkMinor />
        <Contact />
      </div>
    </div>
  )
}

export default App
