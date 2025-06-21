import BaseSectionProps from './BaseSectionProps'
import cn from 'classnames'
import './NavigationSection.scss'

interface NavigationSectionProps extends BaseSectionProps {
  title: string
  direction?: 'vertical' | 'horizontal'
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  children,
  className = '',
  direction = 'vertical',
}) => {
  return (
    <nav className={`navigation-section__container ${className}`}>
      <p className='navigation-section__title'>{title}</p>
      <ul
        className={cn(`navigation-section__items ${className}`, {
          vertical: direction === 'vertical',
          horizontal: direction === 'horizontal',
        })}
      >
        {children}
      </ul>
    </nav>
  )
}

export default NavigationSection
