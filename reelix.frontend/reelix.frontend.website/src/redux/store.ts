import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit'
import usersReducer, { UsersProps } from './slices/usersSlice'

export interface RootState {
  users: UsersProps
}

const rootReducer = combineReducers({
  users: usersReducer,
}) as Reducer<RootState>

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export default store
