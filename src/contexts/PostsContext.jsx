import { createContext, useReducer } from "react";
import axios from "axios";

export const postsContext = createContext(null);

const INITIALS_STATE = {
  posts: [],
};

const reducer = (state = INITIALS_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return { ...state, posts: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const PostsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIALS_STATE);

  const getPosts = async (category) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/posts?title=${category}`);
      dispatch({
        type: "GET_POSTS",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <postsContext.Provider
      value={{
        posts: state.posts,
        getPosts: getPosts,
      }}
    >
      {props.children}
    </postsContext.Provider>
  );
};
