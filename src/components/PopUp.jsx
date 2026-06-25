export default function PopUp({ verse, onClose }) {
  if (!verse) return null

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={e => e.stopPropagation()}>
        <div className="popup-header">
          <h2>Pop Up</h2>
          <button className="popup-close" onClick={onClose}>✕</button>
        </div>
        <div className="popup-body">
          <p>{verse}</p>
        </div>
      </div>
    </div>
  )
}
