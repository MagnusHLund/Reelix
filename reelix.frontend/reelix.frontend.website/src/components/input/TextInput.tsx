import { stringToPascalCase } from '../../utils/stringUtils'
import './TextInput.scss'

type AllowedTextInputTypes = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  placeholder?: string
  defaultValue?: string
  className?: string
  type?: AllowedTextInputTypes
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  defaultValue = '',
  className = '',
  type = 'text',
  onChange,
  ...props
}) => {
  const id = placeholder ? stringToPascalCase(placeholder) : undefined

  return (
    <div className={`text-input__container ${className}`}>
      {placeholder && (
        <label className='text-input__placeholder' htmlFor={id}>
          {placeholder}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        className='text-input__field'
        defaultValue={defaultValue}
        placeholder=''
        onChange={(e) => onChange?.(e)}
        {...props}
      />
    </div>
  )
}

export default TextInput
