import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.actions";

const Like = ({ post }) => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer)

  const handleLike = () => {

    const postData = {
      title: post.title,
      author: post.pseudo,
      content: post.content,
      id: post.id,
      likes: post.likes + 1
    }

    const userData = {
      pseudo: user.pseudo,
      id: user.id,
      age: user.age,
      likes: user.likes + 1
    }

    dispatch(addPostLike(postData))
    dispatch(addUserLike(userData))
  }
  return (
    <div>
      <img src="./icons/clap.png" 
        className="clap" 
        alt="clap"
        onClick={() => handleLike()}
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
