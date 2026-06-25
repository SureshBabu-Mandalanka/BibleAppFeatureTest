export default function SongBook({ selectedVerse }) {
  return (
    <div className="panel song-book">
      <div className="panel-title">Songs Book</div>
      <div className="panel-content scrollable">
        {selectedVerse ? (
          <p className="selected-verse-display">{selectedVerse}</p>
        ) : (
          <p className="drop-placeholder">Songs book</p>
        )}
      </div>
    </div>
  )
}
