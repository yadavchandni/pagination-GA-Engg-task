

import { GET_POSTS_API} from "../action/actionType";
const initial_state = {
    loading: true,
    posts:[],
};

export const PostsDetailsReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_API:
      return {
        ...state,
        posts:state.posts.concat(payload), //using concat 
        loading: false,
      };     
    default:
      return state;
  }
};

// posts:payload,
// The concat() method is used to merge two or more arrays. ---------
// This method does not change the existing arrays, but instead returns a new array.----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat----------
