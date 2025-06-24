import { RootState } from '../store'

export const selectMyUser = (state: RootState) => state.users.myUser
