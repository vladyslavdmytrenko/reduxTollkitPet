import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: 1,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '3',
    title: 'third Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '4',
    title: 'forth  Post',
    content: 'More text',
    user: 1,
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
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
          reactions: { thumbsUp: 0, hooray: 0 },
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
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload
      const existPost = state.find((post) => post.id === postId)

      if (existPost) {
        existPost.reactions[reaction]++
      }
    },
  },
})

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions

export default postSlice.reducer
