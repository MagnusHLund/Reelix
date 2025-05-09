import cn from 'classnames'

interface ImageProps {
  src: string
  alt: string
  width: string | number
  height: string | number
  className?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('image', className)}
    />
  )
}

export default Image
