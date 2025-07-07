import './Dropdown.scss'
import cn from 'classnames'
import { useState } from 'react'

export type DropdownOption = {
  value: string
  label: string
}

interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[]
  onValueChange?: (value: string) => void
  defaultSelectedValue?: string
  titleInsideDropdown?: string
  className?: string
  transparent?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultSelectedValue,
  onValueChange,
  titleInsideDropdown = '',
  className = '',
  transparent = false,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultSelectedValue)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onValueChange?.(value)
  }
  return (
    <select
      className={cn('dropdown', className, { transparent: transparent })}
      onChange={(e) => handleChange(e.target.value)}
      value={selectedValue}
      {...props}
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
