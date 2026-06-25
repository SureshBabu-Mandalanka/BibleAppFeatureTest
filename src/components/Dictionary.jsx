export default function Dictionary({ selectedVerse }) {
  return (
    <div className="panel dictionary">
      <div className="panel-title">Dictionary</div>
      <div className="panel-content scrollable">
        {selectedVerse ? (
          <p className="selected-verse-display">{selectedVerse}</p>
        ) : (
          <p className="drop-placeholder">Dictionary</p>
        )}
      </div>
    </div>
  )
}
