import BaseSectionProps from './BaseSectionProps'

type MenuSectionProps = BaseSectionProps

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`menu-section__container ${className}`}>
      <h1 className="menu-section__title">{title}</h1>
      <div className="menu-section__content">{children}</div>
    </div>
  )
}

export default MenuSection
