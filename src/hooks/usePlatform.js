import { useState, useEffect } from 'react'

function detect() {
  const ua = navigator.userAgent
  const w = window.screen.width
  const h = window.screen.height
  const resolution = `${w} x ${h}`

  const isTouch = navigator.maxTouchPoints > 0
  const isMobileUA = /android|iphone|ipod/i.test(ua)
  const isTabletUA = /ipad/i.test(ua) || (/android/i.test(ua) && !/mobile/i.test(ua))

  let platform
  if (isMobileUA) platform = 'Phone'
  else if (isTabletUA) platform = 'Tablet'
  else if (isTouch && w <= 1024) platform = 'Tablet'
  else platform = 'Desktop'

  return { platform, resolution }
}

export function usePlatform() {
  const [info, setInfo] = useState(detect)

  useEffect(() => {
    const handler = () => setInfo(detect())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return info
}
