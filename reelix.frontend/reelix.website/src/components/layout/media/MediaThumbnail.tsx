import React from 'react'
import './MediaThumbnail.scss'
import Image from '../common/Image'
import Skeleton from 'react-loading-skeleton'
import Button from '../../input/Button'

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
    <Button
      className="media-thumbnail__container"
      transparent
      onClick={() => {}}
    >
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
    </Button>
  )
}

export default MediaThumbnail

/* // TODO: Add a hover effect, giving the user the ability to...
  Add to watch list, 
  like or dislike, 
  see age rating, 
  total playtime & when it ends (local time),
  genres
*/
