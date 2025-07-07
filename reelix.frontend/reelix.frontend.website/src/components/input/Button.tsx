import './Button.scss'
import cn from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  return (
    <button
      type={type}
      className={cn('button', className, { transparent: transparent })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
