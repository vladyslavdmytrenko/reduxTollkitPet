import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title, content) => ({
        payload: {
          id: nanoid(),
          title,
          content,
        },
      }),
    },
    postUpdate: (state, action) => {
      const { id, title, content } = action.payload
      const existPost = state.find((post) => post.id === id)
      debugger
      if (existPost) {
        existPost.title = title
        existPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdate } = postSlice.actions

export default postSlice.reducer
