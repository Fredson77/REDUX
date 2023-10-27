import { useState } from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { deletePost, editPost } from "../actions/post.action";

const Post = ({ post }) => {

  const user = useSelector((state) => state.userReducer)

  const [editToggle, setEditToggle] = useState(false);

  const [ editContent, setEditContent ] = useState(post.content)

  const dispatch = useDispatch()

  const handleEditForm = (e) => {
    e.preventDefault()

    const postData = {
      title: post.title,//élément rappelé sinon écrasé en db.json || en db normale pas besoin
      id: post.id,//élément rappelé sinon écrasé en db.json || en db normale pas besoin
      likes: post.likes,//élément rappelé sinon écrasé en db.json || en db normale pas besoin
      content: editContent,
    }

    dispatch(editPost(postData))
    setEditToggle(false)
  }


  return (
    <div className="post">

      { !isEmpty(user) && user.pseudo === post.author && (
        <div className="edit-delete">
        <img
          src="./icons/edit.svg"
          alt="edit"
          onClick={() => setEditToggle(!editToggle)}
        />
        <img
          src="./icons/delete.svg"
          alt="delete"
          onClick={() => {dispatch(deletePost(post.id))}}
        />
      </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={e => handleEditForm(e)}>
          <textarea autoFocus={true} defaultValue={post.content} 
          onChange={e => setEditContent(e.target.value)}></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
