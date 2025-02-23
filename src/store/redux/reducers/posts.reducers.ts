import { postsConstants } from 'store/redux/constants';
import { IPost } from 'types';

const posts = (state = [], action: any) => {
  switch (action.type) {
    case postsConstants.SET_POSTS:{    
      return [...action.posts];
    }
    case postsConstants.SET_POST:{    
      return [...state, action.post];
    }
    case postsConstants.SET_DELETED_POST: {      
      const newState = state.filter((post:IPost) => {
        return post.id !== action.id
      })
      return [...newState]
    }
    default:
      return state;
  }
}

export default posts;
