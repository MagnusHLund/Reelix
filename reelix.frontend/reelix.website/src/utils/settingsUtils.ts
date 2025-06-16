import { NavigationItem, settingsNavigation } from './navigationUtils'

export type Setting = {
  label: string
  description?: string
  type: 'text' | 'number' | 'boolean' | 'select' | 'color' | 'button' | 'file'
  defaultValue?: any
  isAdminOnly?: boolean
  isReadOnly?: boolean
}

export const settings: {
  [settingsView: (typeof settingsNavigation)[number]['value']]: {
    category: string
    setting: Setting[]
  }
} = {}
