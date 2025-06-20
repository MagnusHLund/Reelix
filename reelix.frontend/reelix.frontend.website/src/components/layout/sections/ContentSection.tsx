import useWindowDimensions from '../../../hooks/useWindowDimensions'
import ScrollIndicator from '../indicators/ScrollIndicator'
import { useEffect, useRef, useState } from 'react'
import BaseSectionProps from './BaseSectionProps'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Button from '../../input/Button'
import './ContentSection.scss'
import cn from 'classnames'

interface ContentSectionProps extends BaseSectionProps {
  title?: string
  children: React.ReactNode
  scrollDirection?: 'horizontal' | 'vertical'
  navigateTo?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title = '',
  children,
  className = '',
  scrollDirection = 'horizontal',
  navigateTo,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { screenSize } = useWindowDimensions()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const updateScrollButtons = () => {
      const el = scrollRef.current
      if (!el || screenSize === 'small') {
        return
      }
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
    }

    updateScrollButtons()
    const el = scrollRef.current
    if (!el) {
      return
    }
    el.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [screenSize])

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

  // TODO: Fix buttons and scroll indicator loading in much slower than everything else.
  return (
    <section className={`content-section__container ${className}`}>
      <div className="content-section__header-wrapper">
        {scrollDirection === 'horizontal' && (
          <NavLink
            className="content-section__title"
            to={{ pathname: navigateTo ? `${navigateTo}` : `${title}` }}
          >
            {title}
          </NavLink>
        )}
        {scrollDirection === 'vertical' && (
          <h1 className="content-section__title">{title}</h1>
        )}
        {screenSize !== 'small' && scrollDirection === 'horizontal' && (
          <ScrollIndicator
            className="content-section__scroll-indicator"
            scrollRef={scrollRef}
          />
        )}
        {screenSize !== 'small' && scrollDirection === 'vertical' && (
          <p className="content-section__media-count">
            {undefined /* TODO: Total amount of items in database. Not those displayed. */ || (
              <Skeleton />
            )}
          </p>
        )}
      </div>
      <div className={cn('content-section__content-wrapper')}>
        {scrollDirection === 'horizontal' && canScrollLeft && (
          <Button
            transparent
            className="content-section__button content-section__button--left"
            onClick={() => handleScroll('left')}
          >
            {'<'}
          </Button>
        )}
        <div
          className={cn('content-section__items', scrollDirection, {
            'small-screen': screenSize === 'small',
          })}
          ref={scrollRef}
        >
          {children}
        </div>
        {scrollDirection === 'horizontal' && canScrollRight && (
          <Button
            transparent
            className="content-section__button content-section__button--right"
            onClick={() => handleScroll('right')}
          >
            {'>'}
          </Button>
        )}
      </div>
    </section>
  )
}

export default ContentSection
