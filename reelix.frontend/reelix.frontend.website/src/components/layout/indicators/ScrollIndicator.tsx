import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import './ScrollIndicator.scss'

interface ScrollIndicatorProps {
  scrollRef: RefObject<HTMLDivElement | null>
  className?: string
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  scrollRef,
  className = '',
}) => {
  const [scrollStart, setScrollStart] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const rafRef = useRef<number | null>(null)

  const updateScrollIndicator = useCallback(() => {
    if (!scrollRef?.current) {
      return
    }
    const {
      scrollLeft,
      scrollWidth: totalWidth,
      clientWidth,
    } = scrollRef.current

    const percentStart = (scrollLeft / totalWidth) * 100
    const percentWidth = (clientWidth / totalWidth) * 100

    setScrollStart(percentStart)
    setScrollWidth(percentWidth)
  }, [scrollRef])

  useEffect(() => {
    const el = scrollRef?.current
    if (!el) {
      return
    }

    const onScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(updateScrollIndicator)
    }

    el.addEventListener('scroll', onScroll)
    window.addEventListener('resize', updateScrollIndicator)

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateScrollIndicator)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [scrollRef, updateScrollIndicator])

  useEffect(() => {
    // Ensure the indicator is correctly set on component mount
    setTimeout(updateScrollIndicator, 0)
  }, [updateScrollIndicator])

  return (
    <div className={`scroll-indicator__container ${className}`}>
      <div
        className="scroll-indicator__bar"
        style={{
          left: `${scrollStart}%`,
          width: `${scrollWidth}%`,
        }}
      />
    </div>
  )
}

export default ScrollIndicator
