import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'
import './TabMenu.scss'

type MenuTab = {
  title: string
  navigateTo: string
  tabContents: React.ReactNode
  adminOnly?: boolean
}

interface TabMenuProps {
  tabs: MenuTab[]
  className?: string
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, className }) => {
  const location = useLocation().pathname
  const activeTab = tabs.find((tab) => tab.navigateTo === location)

  return (
    <div className={`tab-menu__container ${className}`}>
      <div className="tab-menu__header">
        {tabs.map((tab) => (
          <NavLink
            key={tab.navigateTo}
            to={tab.navigateTo}
            className={cn(`tab-menu__tab`, { active: activeTab === tab })}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="tab-menu__content">{activeTab?.tabContents}</div>
    </div>
  )
}

export default TabMenu
