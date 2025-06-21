import { useState, useEffect } from 'react'

type WindowDimensions = {
  width: number
  height: number
  screenSize: 'small' | 'medium' | 'large'
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const getSizeCategory = (width: number) => {
  if (width < 768) {
    return 'small'
  } else if (width >= 768 && width < 1024) {
    return 'medium'
  } else {
    return 'large'
  }
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...windowDimensions,
    screenSize: getSizeCategory(windowDimensions.width),
  }
}
