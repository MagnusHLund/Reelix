import { createSlice } from '@reduxjs/toolkit'

export type UserRole = 'admin' | 'user'

export type User = {
  id: string
  username: string
  email: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

export interface UsersProps {
  myUser: User
  users: User[]
}

const initialState: UsersProps = {
  myUser: {
    id: 'guid-1',
    username: 'Admin user',
    email: 'admin@example.com',
    role: 'admin',
    createdAt: '25-06-2025',
    updatedAt: '26-06-2025',
  },
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setMyUser: (state, action) => {
      state.myUser = action.payload
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id)
    },
  },
})

export const { setMyUser, addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
