import './Form.scss'
import {
  Path,
  useForm,
  FieldError,
  FieldErrors,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form'
import Button from '../../input/Button'
import TextInput from '../../input/TextInput'
import ErrorContainer from './ErrorContainer'

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>
  fields: {
    name: keyof T
    label: string
    type: string
    validation: object
    errorMessage?: string
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

  const formatErrorMessages = (error: FieldErrors<T>): string[] => {
    return Object.entries(error).map(([field, fieldError]) => {
      const errorMessage = (fieldError as FieldError)?.message
      return (
        errorMessage ||
        fields.find((f) => f.name === field)?.errorMessage ||
        'Field is required'
      )
    })
  }

  return (
    <div className={`form__container ${className}`}>
      {Object.keys(errors).length > 0 && (
        <ErrorContainer
          className="form__error-container"
          errorMessages={formatErrorMessages(errors)}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="form__element">
        {fields.map(({ name, validation, type }) => (
          <TextInput
            key={String(name)}
            placeholder={String(name)}
            type={type}
            className="form__input"
            {...register(name as Path<T>, validation)}
          />
        ))}
        <Button type="submit" className="form__submit-button">
          {buttonText}
        </Button>
      </form>
    </div>
  )
}

export default Form
