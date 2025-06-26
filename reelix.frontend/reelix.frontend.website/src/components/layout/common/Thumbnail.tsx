import React from 'react'
import './Thumbnail.scss'
import Image from './Image'
import Skeleton from 'react-loading-skeleton'
import Button from '../../input/Button'

interface ThumbnailProps {
  PrimaryText: string
  SecondaryText: string
  imageUrl: string
  hoverElement?: React.ReactNode
  onClick?: () => void
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  PrimaryText,
  SecondaryText,
  imageUrl,
  hoverElement,
  onClick = () => {},
}) => {
  return (
    <Button className='thumbnail__container' transparent onClick={onClick}>
      <Image src={imageUrl} alt='Thumbnail' className='thumbnail__image' height='175' width='250' />
      <div className='thumbnail__info'>
        <span className='thumbnail__primary-text'>{PrimaryText || <Skeleton />}</span>
        <span className='thumbnail__secondary-text'>{SecondaryText || <Skeleton />}</span>
      </div>
      {hoverElement}
    </Button>
  )
}

export default Thumbnail

/* // TODO: Add a hover effect, giving the user the ability to...
  Add to watch list, 
  like or dislike, 
  see age rating, 
  total playtime & when it ends (local time),
  genres
*/
