import { createSlice } from '@reduxjs/toolkit'

export type MediaLibrary = {
  id: string
  name: string
}

export interface MediaLibrariesProps {
  mediaLibraries: MediaLibrary[]
}

const initialState: MediaLibrariesProps = {
  mediaLibraries: [{ id: '1', name: 'Library 1' }],
}

const mediaLibrariesSlice = createSlice({
  name: 'mediaLibraries',
  initialState,
  reducers: {
    setMediaLibraries: (state, action) => {
      state.mediaLibraries = action.payload
    },
  },
})

export const { setMediaLibraries } = mediaLibrariesSlice.actions
export default mediaLibrariesSlice.reducer
