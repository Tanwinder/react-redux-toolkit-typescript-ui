import React from "react";

import { useAppSelector, useAppDispatch } from "../../store/redux/hooks";

export default function Posts() {
  const posts = useAppSelector((state) => state.posts.posts);
  console.log("posts----", posts);
  const dispatch = useAppDispatch();
  return <div>Posts</div>;
}
