export default function Notes({ selectedVerse }) {
  return (
    <div className="panel notes">
      <div className="panel-title">Notes</div>
      <div className="panel-content scrollable">
        {selectedVerse ? (
          <p className="selected-verse-display">{selectedVerse}</p>
        ) : (
          <p className="drop-placeholder">Notes</p>
        )}
      </div>
    </div>
  )
}
