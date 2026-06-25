export default function NavBar({ songsVisible, notesVisible, dictVisible, rightVisible, onToggleSongs, onToggleNotes, onToggleDict, onToggleRight }) {
  return (
    <nav className="side-nav">
      <button className="nav-btn nav-btn-chevron" onClick={onToggleRight}>
        {rightVisible ? '›' : '‹'}
      </button>
      <button
        className={`nav-btn${songsVisible ? ' nav-btn-active' : ''}`}
        onClick={onToggleSongs}
      >
        Songs
      </button>
      <button
        className={`nav-btn${notesVisible ? ' nav-btn-active' : ''}`}
        onClick={onToggleNotes}
      >
        Notes
      </button>
      <button
        className={`nav-btn${dictVisible ? ' nav-btn-active' : ''}`}
        onClick={onToggleDict}
      >
        Dict
      </button>
    </nav>
  )
}
