import { createSlice } from '@reduxjs/toolkit'
import { UserRole } from './usersSlice'

export type Setting = {
  id: number
  name: string
  value: string
  createdAt: string
  updatedAt: string
}

export interface SettingsProps {
  settingsScope: UserRole
  settings: Setting[]
}

const initialState: SettingsProps = {
  settingsScope: 'user',
  settings: [],
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettingsScope: (state, action) => {
      state.settingsScope = action.payload
    },
  },
})

export const { setSettingsScope } = settingsSlice.actions
export default settingsSlice.reducer
