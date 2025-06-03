import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldError,
  Path,
} from 'react-hook-form'
import Button from '../../input/Button'
import './Form.scss'

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
}

const Form = <T extends FieldValues>({
  onSubmit,
  fields,
  buttonText = 'Submit',
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>()

  return (
    <div className="form__container">
      {Object.keys(errors).length > 0 && (
        <div className="error__box">
          {Object.entries(errors).map(([field, error]) => (
            <p key={field} className="error__message">
              {(error as FieldError)?.message ||
                fields.find((f) => f.name === field)?.errorMessage ||
                'Field is required'}
            </p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="form__element">
        {fields.map(({ name, label, type, validation }) => (
          <div key={String(name)} className="form__group">
            <label htmlFor={String(name)} className="form__label">
              {label}
            </label>
            {/* TODO: Use custom Input component. Remove form__group and just use the custom input component directly */}
            <input
              type={type}
              id={String(name)}
              className="form__input"
              {...register(name as Path<T>, validation)}
            />
          </div>
        ))}
        <Button type="submit" className="form__submit-button">
          {buttonText}
        </Button>
      </form>
    </div>
  )
}

export default Form
