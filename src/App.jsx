import { useState } from 'react'
import Header from './components/Header'
import BibleText from './components/BibleText'
import SongBook from './components/SongBook'
import Dictionary from './components/Dictionary'
import Notes from './components/Notes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import './App.css'

export default function App() {
  const [selectedVerse, setSelectedVerse] = useState(null)
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [songsVisible, setSongsVisible] = useState(true)
  const [dictVisible, setDictVisible] = useState(true)
  const [notesVisible, setNotesVisible] = useState(true)
  const [rightVisible, setRightVisible] = useState(true)

  return (
    <div className="app-shell">
      <Header />
      <main className="app-body">
        <BibleText
          selectedVerse={selectedVerse}
          onVerseSelect={setSelectedVerse}
          onHeaderClick={() => setPopUpOpen(true)}
        />
        <div className={`right-section${rightVisible ? '' : ' right-collapsed'}`}>
          {rightVisible && (
            <div className="panels-column">
              {songsVisible && <SongBook selectedVerse={selectedVerse} />}
              {notesVisible && <Notes selectedVerse={selectedVerse} />}
              {dictVisible && <Dictionary selectedVerse={selectedVerse} />}
            </div>
          )}
          <NavBar
            songsVisible={songsVisible}
            notesVisible={notesVisible}
            dictVisible={dictVisible}
            rightVisible={rightVisible}
            onToggleSongs={() => setSongsVisible(v => !v)}
            onToggleNotes={() => setNotesVisible(v => !v)}
            onToggleDict={() => setDictVisible(v => !v)}
            onToggleRight={() => setRightVisible(v => !v)}
          />
        </div>
      </main>
      <Footer />
      {popUpOpen && (
        <PopUp
          verse={selectedVerse}
          onClose={() => setPopUpOpen(false)}
        />
      )}
    </div>
  )
}
