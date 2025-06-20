import './ErrorContainer.scss'
import Image from './Image'

interface ErrorContainerProps {
  errorMessages: string[]
  className?: string
}

const ErrorContainer: React.FC<ErrorContainerProps> = ({
  errorMessages,
  className,
}) => {
  return (
    <div className={`error-container__container ${className}`}>
      {errorMessages.map((message, index) => (
        <div key={index} className="error-container__message-wrapper">
          <Image
            src="/black.png"
            alt="Error icon"
            width={20}
            height={20}
            className="error-container__icon"
          />
          <p className="error-container__message">{message}</p>
        </div>
      ))}
    </div>
  )
}

export default ErrorContainer
