import { RootState } from '../store'

export const selectSettingsScope = (state: RootState) => state.settings.settingsScope
