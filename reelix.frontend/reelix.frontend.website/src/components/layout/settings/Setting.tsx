import './Setting.scss'

interface SettingProps {
  settingId?: string
  title: string
  description?: string
  classname?: string
  children?: React.ReactNode
  isAdminOnly?: boolean
  isAdminUser?: boolean
}

const Setting: React.FC<SettingProps> = ({ title, description, classname, children }) => {
  return (
    <div className={`setting__container ${classname}`}>
      <h3 className='setting__title'>{title}</h3>
      {description && <p className='setting__description'>{description}</p>}
      <div className='setting__content'>{children}</div>
    </div>
  )
}

export default Setting
