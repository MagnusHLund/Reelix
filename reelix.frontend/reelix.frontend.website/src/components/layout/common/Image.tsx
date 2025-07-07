import cn from 'classnames'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface ImageProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  className?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return <Skeleton width={width} height={height} className={cn('image', className)} />
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('image', className)}
      onError={() => setHasError(true)}
    />
  )
}

export default Image
