import './Form.scss'
import { Path, useForm, FieldError, FieldErrors, FieldValues, SubmitHandler } from 'react-hook-form'
import Button from '../../input/Button'
import TextInput from '../../input/TextInput'
import ErrorContainer from './ErrorContainer'
import { useSelector } from 'react-redux'
import { selectMyUser } from '../../../redux/selectors/usersSelectors'
import Dropdown, { DropdownOption } from '../../input/Dropdown'

type AllowedInputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'number'
  | 'select'
  | 'button'
  | 'file'
  | 'image'

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>
  fields: {
    name: keyof T
    label?: string
    type: AllowedInputTypes
    validation?: object
    errorMessage?: string
    isAdminOnly?: boolean
    dropdownOptions?: DropdownOption[]
    children?: React.ReactNode
  }[]
  buttonText?: string
  className?: string
}

const Form = <T extends FieldValues>({
  onSubmit,
  fields,
  buttonText = 'Submit',
  className = '',
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>()
  const isAdmin = useSelector(selectMyUser).role === 'admin'

  const formatErrorMessages = (error: FieldErrors<T>): string[] => {
    return Object.entries(error).map(([field, fieldError]) => {
      const errorMessage = (fieldError as FieldError)?.message
      return (
        errorMessage || fields.find((f) => f.name === field)?.errorMessage || `${field} is required`
      )
    })
  }

  return (
    <div className={`form__container ${className}`}>
      {Object.keys(errors).length > 0 && (
        <ErrorContainer
          className='form__error-container'
          errorMessages={formatErrorMessages(errors)}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className='form__element'>
        {fields.map(({ name, label, validation, type, isAdminOnly, dropdownOptions }) => {
          validation ??= { required: true }

          if (isAdminOnly && !isAdmin) {
            return null
          }
          if (type === 'select') {
            return (
              <Dropdown
                key={label ?? ''}
                className='form__input'
                options={dropdownOptions as DropdownOption[]}
                {...register(name as Path<T>, validation)}
              />
            )
          } else if (type === 'button' || type === 'file' || type === 'image') {
            return (
              <Button
                key={label ?? ''}
                type='button'
                className='form__input'
                {...register(name as Path<T>, validation)}
              >
                {label ?? ''}
              </Button>
            )
          } else {
            return (
              <TextInput
                key={label ?? ''}
                placeholder={label ?? ''}
                type={type}
                className='form__input'
                {...register(name as Path<T>, validation)}
              />
            )
          }
        })}
        <Button type='submit' className='form__submit-button'>
          {buttonText}
        </Button>
      </form>
    </div>
  )
}

export default Form
