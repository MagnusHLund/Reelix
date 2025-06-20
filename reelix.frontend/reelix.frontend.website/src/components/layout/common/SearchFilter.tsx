import Button from '../../input/Button'
import TextInput from '../../input/TextInput'
import { useState } from 'react'
import './SearchFilter.scss'
import Image from './Image'
import cn from 'classnames'

interface SearchFilterProps {
  onchange: (value: string) => void
  className?: string
  height?: string
  width?: string
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  onchange,
  className,
  height,
  width,
}) => {
  const [displayTextInput, setDisplayTextInput] = useState(false)

  return (
    <div className={`search-filter__container ${className}`}>
      <TextInput
        placeholder="Search"
        onChange={(e) => onchange?.(e.target.value)}
        type="search"
        className={cn('search-filter__input', {
          active: displayTextInput,
        })}
      />
      <Button
        className="search-filter__button"
        transparent
        onClick={() => {
          setDisplayTextInput((prev) => !prev)
        }}
      >
        <Image src="/black.png" alt="Search" width={width} height={height} />
      </Button>
    </div>
  )
}

export default SearchFilter
