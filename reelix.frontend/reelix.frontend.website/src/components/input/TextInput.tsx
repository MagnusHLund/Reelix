import './TextInput.scss'
import { stringToPascalCase } from '../../utils/stringUtils'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  defaultValue?: string
  className?: string
  type?: React.HTMLInputTypeAttribute
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
    <div className={`text-input ${className}`}>
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
