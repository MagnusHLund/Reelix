import { regexValidationPatterns } from '../../utils/validationUtils'
import Form from '../layout/common/Form'
import './LoginPage.scss'

type FormData = {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="login__page">
      <div className="login__container">
        <h1 className="login__title">Welcome to Reelix</h1>
        <Form
          onSubmit={onSubmit}
          fields={[
            {
              name: 'email',
              label: 'Email',
              type: 'text',
              validation: {
                required: true,
                pattern: regexValidationPatterns.email,
              },
              errorMessage: 'Invalid email format',
            },
            {
              name: 'password',
              label: 'Password',
              type: 'password',
              validation: {
                required: true,
                pattern: regexValidationPatterns.password,
              },
              errorMessage:
                'Password must be at least 6 characters long, contain at least one uppercase letter and one number',
            },
          ]}
        />
        <p className="login__footer">
          Can't login? Contact your administrator.
        </p>
      </div>
    </div>
  )
}

export default LoginPage
