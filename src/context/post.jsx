import { createContext, useState, useCallback, useEffect } from "react";
export const PostContext = createContext({
  posts: [],
});

export const PostContextPorvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const updatePosts = useCallback(({ posts }) => {
    setPosts(posts);
  }, []);

  return <PostContext value={{ posts, updatePosts }}>{children}</PostContext>;
};
