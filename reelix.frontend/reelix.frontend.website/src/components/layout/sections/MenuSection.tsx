import BaseSectionProps from './BaseSectionProps'
import cn from 'classnames'
import './MenuSection.scss'

interface MenuSectionProps extends BaseSectionProps {
  title: string
  direction?: 'vertical' | 'horizontal'
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  children,
  className = '',
  direction = 'vertical',
}) => {
  return (
    <div
      className={cn('menu-section__container', className, {
        'menu-section__container--vertical': direction === 'vertical',
        'menu-section__container--horizontal': direction === 'horizontal',
      })}
    >
      <p className="menu-section__title">{title}</p>
      <div
        className={cn(`menu-section__items ${className}`, {
          vertical: direction === 'vertical',
          horizontal: direction === 'horizontal',
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default MenuSection
