import Docks from './Components/Docks'
import './index.scss'
import Navbar from './Components/Navbar'
import Github from './pages/Github'
import Notes from './pages/Notes'
import Pdf from './pages/Pdf'
import Spotifiy from './pages/Spotifiy'
import Terminalcli from './pages/Terminal'
import { useState } from 'react'




const App = () => {

  const [WindowState, setWindowState] = useState({
    github: false,
    notes: false,
    pdf: false,
    spotify: false,
    terminal: false
  })
  return (
    <>
    <main>
        <Docks WindowState={WindowState} setWindowState={setWindowState}/>
        <Navbar />
        {WindowState.github &&  <Github windowname="github" setWindowState={setWindowState} />}
        {WindowState.notes && <Notes windowname="notes" setWindowState={setWindowState}/>}
        {WindowState.pdf &&  <Pdf windowname="pdf" setWindowState={setWindowState}/>}
        {WindowState.spotify &&   <Spotifiy windowname="spotify" setWindowState={setWindowState} />}
        {WindowState.terminal &&   <Terminalcli windowname="terminal" setWindowState={setWindowState} />}
    </main>
    </>
  )
}

export default App