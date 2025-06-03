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
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            },
            errorMessage: 'Invalid email format',
          },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            validation: {
              required: true,
              minLength: { value: 6, message: 'Must be at least 6 characters' },
            },
          },
        ]}
      />
    </div>
  )
}

export default LoginPage
