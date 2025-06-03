import './TextInput.scss'
import { stringToPascalCase } from '../../utils/stringUtils'

interface TextInputProps {
  placeholder?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  defaultValue,
  onChange,
}) => {
  const id = placeholder ? stringToPascalCase(placeholder) : undefined

  return (
    <div className="text-input">
      {placeholder && (
        <label className="text-input__placeholder" htmlFor={id}>
          {placeholder}
        </label>
      )}
      <input
        id={id}
        name={id}
        type="text"
        className="text-input__field"
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}

export default TextInput
