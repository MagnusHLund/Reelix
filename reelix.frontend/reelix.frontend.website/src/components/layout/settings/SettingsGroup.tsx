import './SettingsGroup.scss'

interface SettingsGroupProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({ title, description, children }) => {
  return (
    <div className={`settings-group__container`}>
      {title && <h3 className={`settings-group__title`}>{title}</h3>}
      {description && <p className={`settings-group__description`}>{description}</p>}
      <div className={`settings-group__settings`}>{children}</div>
    </div>
  )
}

export default SettingsGroup
