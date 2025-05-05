import './MediaTypes.scss'

interface MediaTypesProps {
  className?: string
}

const MediaTypes: React.FC<MediaTypesProps> = ({ className }) => {
  const MediaTypes = [
    { label: 'Home', value: 'home' },
    { label: 'Movies', value: 'movies' },
    { label: 'Series', value: 'series' },
    { label: 'Collections', value: 'collections' },
    { label: 'Watch list', value: 'watchlist' },
  ]

  return (
    <div className={`media-types__container ${className}`}>
      {MediaTypes.map((type) => (
        <a
          key={type.value}
          className="media-types__item"
          href={`#${type.value}`}
        >
          {type.label}
        </a>
      ))}
    </div>
  )
}

export default MediaTypes
