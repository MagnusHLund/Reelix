import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Button.scss'
import cn from 'classnames'
import {
  calculateElementBoxModelExcludingContentBox,
  calculateElementTotalHeight,
  calculateElementTotalWidth,
} from '../../utils/htmlElementUtils'

interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  transparent?: boolean
}

// TODO: Rewrite to use <input> tag instead. Use div, with button component and content besides it.
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  className = '',
  transparent = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [minSize, setMinSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect()
      setMinSize({ width: rect.width, height: rect.height })
    }
  }, [children])

  return (
    <div
      className={`button__container ${className}`}
      ref={containerRef}
      style={{ minWidth: minSize.width, minHeight: minSize.height }}
    >
      <input
        type={type}
        className={cn('button__input', { transparent: transparent })}
        onClick={onClick}
        ref={inputRef}
        style={{
          width:
            minSize.width + calculateElementBoxModelExcludingContentBox(inputRef.current).width,
          height:
            minSize.height + calculateElementBoxModelExcludingContentBox(inputRef.current).height,
        }}
        {...props}
        value='Submit'
      />
      <div className='button__content' ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

export default Button
