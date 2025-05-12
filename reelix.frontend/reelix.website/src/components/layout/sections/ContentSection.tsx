import BaseSectionProps from './BaseSectionProps'

type ContentSectionProps = BaseSectionProps

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <section className={`content-section__container ${className}`}>
      <h1 className="content-section__title">{title}</h1>
      <div className="content-section__items">{children}</div>
    </section>
  )
}

export default ContentSection
