import { usePlatform } from '../hooks/usePlatform'

export default function Header() {
  const { platform, resolution } = usePlatform()

  return (
    <header className="app-header">
      <h1>Bible Feature Test App</h1>
      <span className="header-platform">{platform} · {resolution}</span>
    </header>
  )
}
