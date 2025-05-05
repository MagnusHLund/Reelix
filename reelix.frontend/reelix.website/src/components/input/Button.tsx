import cn from 'classnames'
import './Button.scss'

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  transparent?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  className = '',
  transparent = false,
}) => {
  return (
    <button
      type={type}
      className={cn('button', className, { transparent: transparent })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
