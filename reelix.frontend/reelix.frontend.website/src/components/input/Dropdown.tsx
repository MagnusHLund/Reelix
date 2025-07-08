import useWindowDimensions from '../../hooks/useWindowDimensions'
import { stringToPascalCase } from '../../utils/stringUtils'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import './Dropdown.scss'

export type DropdownOption = {
  value: string
  label: string
}

interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: DropdownOption[]
  label?: string
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
  label,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultSelectedValue)
  const { screenSize } = useWindowDimensions()

  const labelRef = useRef<HTMLLabelElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    if (labelRef.current && selectRef.current) {
      if (screenSize === 'small') {
        selectRef.current.style.minWidth = 'unset'
      } else {
        const labelSpacing = parseFloat(getComputedStyle(labelRef.current).marginLeft) * 2 || 0
        selectRef.current.style.minWidth = `${labelRef.current.offsetWidth + labelSpacing}px`
      }
    }
  }, [labelRef?.current?.offsetWidth, screenSize])

  const id = label ? stringToPascalCase(label) : undefined

  const handleChange = (value: string) => {
    setSelectedValue(value)
    onValueChange?.(value)
  }

  return (
    <div className={`dropdown__container ${className}`}>
      {label && (
        <label className='dropdown__label' htmlFor={id} ref={labelRef}>
          {label}
        </label>
      )}
      <select
        className={cn('dropdown__select', className, { transparent: transparent })}
        onChange={(e) => handleChange(e.target.value)}
        value={selectedValue}
        ref={selectRef}
        id={id}
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
    </div>
  )
}

export default Dropdown
