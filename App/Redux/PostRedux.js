import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  postsRequest: [],
  postsSuccess: ['posts'],
  postsFailure: null
})

export const PostTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  posts: [],
  fetching: null,
  error: null,
})

/* ------------- Selectors ------------- */
export const PostSelectors = {
  selectPosts: state => state.posts.posts,
  selectPostsLoading: state => state.posts.fetching,
  selectPostsHasError: state => !!state.posts.error
}

/* ------------- Reducers ------------- */
// request the posts
export const request = (state, action) =>
  state.merge({ fetching: true, posts: [] })

// successful posts
export const success = (state, action) => {
  const { posts } = action
  return state.merge({ fetching: false, error: null, posts })
}

// failed to get the posts
export const failure = (state) =>
  state.merge({ fetching: false, error: true, posts: [] })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.POSTS_REQUEST]: request,
  [Types.POSTS_SUCCESS]: success,
  [Types.POSTS_FAILURE]: failure
})