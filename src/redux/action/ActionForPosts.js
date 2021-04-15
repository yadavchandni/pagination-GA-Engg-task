
import {GET_POSTS_API} from './actionType';
import  {getALLPostsService} from '../../services/getAllPostsService';


export const PostsDetailsAction = (posts) => {

  return async (dispatch) => {

    const details = await getALLPostsService(posts);
    
    const { data } = details;
    // console.log("data action ---", data.hits);

    dispatch({

      type: GET_POSTS_API,
      payload:data.hits,
    });
  };
};
