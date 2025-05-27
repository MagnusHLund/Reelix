import { useRef } from 'react'
import Button from '../../input/Button'
import BaseSectionProps from './BaseSectionProps'
import './ContentSection.scss'
import cn from 'classnames'

interface ContentSectionProps extends BaseSectionProps {
  title?: string
  children: React.ReactNode
  scrollDirection?: 'horizontal' | 'vertical'
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title = '',
  children,
  className = '',
  scrollDirection = 'vertical',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    // TODO: Implement cooldown. Client cant spam the button. Wait until it finishes scrolling
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // TODO: Maybe implement a small scroll indicator (pretty readonly scroll bar) on the right side, same height as title. Remove the actual scrollbar, when implementing this.
  return (
    <section className={`content-section__container ${className}`}>
      <h1 className="content-section__title">{title}</h1>
      <div
        className={cn('content-section__items', scrollDirection)}
        ref={scrollRef}
      >
        {children}
      </div>
      {scrollDirection === 'horizontal' && (
        <Button
          transparent
          className="content-section__button"
          onClick={() => handleScroll('left')}
        >
          {'<'}
        </Button>
      )}
      {scrollDirection === 'horizontal' && (
        <Button
          transparent
          className="content-section__button"
          onClick={() => handleScroll('right')}
        >
          {'>'}
        </Button>
      )}
    </section>
  )
}

export default ContentSection
