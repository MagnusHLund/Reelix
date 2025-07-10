import './button.scss'
import cn from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  transparent?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  transparent = false,
  ...props
}) => {
  return (
    <div className={cn('button__container', className, { transparent: transparent })}>
      <input type={type} className='button__input' {...props} />
      <div className='button__content'>{children}</div>
    </div>
  )
}

export default Button
