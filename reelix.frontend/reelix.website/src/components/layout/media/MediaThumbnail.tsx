import React from 'react'
import './MediaThumbnail.scss'
import Image from '../common/Image'
import Skeleton from '../common/Skeleton'

const MediaThumbnail: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className="media-thumbnail__container">
      {isLoading && (
        <>
          <Skeleton
            className="media-thumbnail__image"
            height="175"
            width="250"
          />
          <div className="media-thumbnail__info">
            <Skeleton className="media-thumbnail__title" />
            <Skeleton className="media-thumbnail__release-year" />
          </div>
        </>
      )}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Image
          src="/black.png"
          alt="Media Thumbnail"
          className="media-thumbnail__image"
          height="175"
          width="250"
        />
        <div className="media-thumbnail__info">
          <h3 className="media-thumbnail__title">Media Title</h3>
          <p className="media-thumbnail__release-year">Media Release Year</p>
        </div>
      </div>
    </div>
  )
}

export default MediaThumbnail
