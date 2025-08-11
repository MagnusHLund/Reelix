import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit'
import usersReducer, { UsersProps } from './slices/usersSlice'
import settingsReducer, { SettingsProps } from './slices/settingsSlice'
import mediaLibrariesReducer, { MediaLibrariesProps } from './slices/mediaLibrariesSlice'

export interface RootState {
  users: UsersProps
  settings: SettingsProps
  mediaLibraries: MediaLibrariesProps
}

const rootReducer = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
  mediaLibraries: mediaLibrariesReducer,
}) as Reducer<RootState>

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export default store
