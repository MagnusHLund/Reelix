import React from 'react'
import './MediaThumbnail.scss'
import Image from '../common/Image'
import Skeleton from 'react-loading-skeleton'

interface MediaThumbnailProps {
  title: string
  releaseYear: string
  imageUrl: string
}

const MediaThumbnail: React.FC<MediaThumbnailProps> = ({
  title,
  releaseYear,
  imageUrl,
}) => {
  return (
    <div className="media-thumbnail__container">
      <Image
        src={imageUrl}
        alt="Media Thumbnail"
        className="media-thumbnail__image"
        height="175"
        width="250"
      />
      <div className="media-thumbnail__info">
        <span className="media-thumbnail__title">{title || <Skeleton />}</span>
        <span className="media-thumbnail__release-year">
          {releaseYear || <Skeleton />}
        </span>
      </div>
    </div>
  )
}

export default MediaThumbnail
