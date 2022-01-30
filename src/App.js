import Header from './components/Header'
import Bio from './components/Bio'
import WorkMajor from './components/WorkMajor'
import WorkMinor from './components/WorkMinor'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className="transition-all bg-white dark:bg-gray-800">
        <Header />
        <Bio />
        <WorkMajor />
        <WorkMinor />
        <Contact />
      </div>
    </div>
  );
}

export default App;
