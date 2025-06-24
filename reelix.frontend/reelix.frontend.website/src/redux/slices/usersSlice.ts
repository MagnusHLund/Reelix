import { createSlice } from '@reduxjs/toolkit'

export type User = {
  id: number
  username: string
  email: string
  isAdmin: boolean
  createdAt: string
  updatedAt: string
}

export interface UsersProps {
  myUser: User
  users: User[]
}

const initialState: UsersProps = {
  myUser: {
    id: 0,
    username: '',
    email: '',
    isAdmin: false,
    createdAt: '',
    updatedAt: '',
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
