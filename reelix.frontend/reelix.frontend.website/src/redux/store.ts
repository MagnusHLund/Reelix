import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit'
import usersReducer, { UsersProps } from './slices/usersSlice'
import settingsReducer, { SettingsProps } from './slices/settingsSlice'

export interface RootState {
  users: UsersProps
  settings: SettingsProps
}

const rootReducer = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
}) as Reducer<RootState>

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export default store
