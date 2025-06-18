import './SettingsView.scss'

interface SettingsTabProps {
  title: string
  classname?: string
  children: React.ReactNode
}

const SettingsView: React.FC<SettingsTabProps> = ({
  title,
  classname,
  children,
}) => {
  return (
    <section className={`settings-tab__container ${classname}`}>
      <div className="settings-tab__header">
        <h1 className="settings-tab__title">{title}</h1>
      </div>
      <div className="settings-tab__content">{children}</div>
    </section>
  )
}

export default SettingsView
