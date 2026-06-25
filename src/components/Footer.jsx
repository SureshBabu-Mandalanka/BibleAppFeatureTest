import { useState } from 'react'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

export default function Footer() {
  const { deferredPrompt, isIOS, isInstalled, isInStandaloneMode, promptInstall } = useInstallPrompt()
  const [showHint, setShowHint] = useState(false)

  if (isInstalled || isInStandaloneMode) {
    return (
      <footer className="app-footer">
        <span className="installed-badge">✓ Installed as app</span>
      </footer>
    )
  }

  const handleClick = () => {
    if (deferredPrompt) {
      promptInstall()
    } else {
      setShowHint((v) => !v)
    }
  }

  const hint = isIOS
    ? 'Tap the Share icon in Safari, then select Add to Home Screen'
    : 'In Chrome, tap the menu (⋮) and select "Add to Home Screen"'

  return (
    <footer className="app-footer">
      <div className="install-area">
        <button className="install-btn" onClick={handleClick}>
          Add to Home Screen
        </button>
        {showHint && <div className="install-hint">{hint}</div>}
      </div>
    </footer>
  )
}
