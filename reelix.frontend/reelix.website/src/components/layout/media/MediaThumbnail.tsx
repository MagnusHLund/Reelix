import React from 'react'
import './MediaThumbnail.scss'
import Image from '../common/Image'
import Skeleton from '../common/Skeleton'

const MediaThumbnail: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className="media-thumbnail_container">
      {isLoading && (
        <>
          <Skeleton className="media-thumbnail_image" />
          <div className="media-thumbnail_info">
            <Skeleton className="media-thumbnail_title" />
            <Skeleton className="media-thumbnail_release-year" />
          </div>
        </>
      )}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Image
          src="/black.png"
          alt="Media Thumbnail"
          className="media-thumbnail_image"
          width="200"
          height="200"
        />
        <div className="media-thumbnail_info">
          <h3 className="media-thumbnail_title">Media Title</h3>
          <p className="media-thumbnail_release-year">Media Release Year</p>
        </div>
      </div>
    </div>
  )
}

export default MediaThumbnail
