import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: 1,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: '3',
    title: 'third Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 3 }).toISOString(),
  },
  {
    id: '4',
    title: 'forth  Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 2 }).toISOString(),
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title, content, userId) => ({
        payload: {
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId,
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
