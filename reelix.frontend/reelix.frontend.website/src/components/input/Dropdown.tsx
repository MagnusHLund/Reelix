import './Dropdown.scss'
import cn from 'classnames'
import { useState } from 'react'

interface DropdownProps {
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  defaultSelectedValue?: string
  titleInsideDropdown?: string
  className?: string
  transparent?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultSelectedValue,
  onChange,
  titleInsideDropdown = '',
  className = '',
  transparent = false,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultSelectedValue)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <select
      className={cn('dropdown', className, { transparent: transparent })}
      onChange={(e) => handleChange(e.target.value)}
      value={selectedValue}
    >
      {titleInsideDropdown && (
        <option value='' disabled>
          {titleInsideDropdown}
        </option>
      )}
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value} className='dropdown__option'>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

export default Dropdown
