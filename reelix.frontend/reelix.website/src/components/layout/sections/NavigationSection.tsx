import BaseSectionProps from './BaseSectionProps'

type NavigationSectionProps = BaseSectionProps

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <nav className={`content-section__container ${className}`}>
      <h1 className="content-section__title">{title}</h1>
      <ul className="content-section__content">{children}</ul>
    </nav>
  )
}

export default NavigationSection
