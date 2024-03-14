import "./comments.scss";
import { useState } from "react"
import axios from 'axios'

const Comments = () => {
    const [commentPost, setComment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      commentPost: commentPost,
    }
    axios.post('http://localhost:5000/Comment',data).then((response) => {
      console.log(response.data);
      setComment('')
    })
  }

    return (
      <div className="comments">
        <div className="write">
          <img src="" alt="" />
          <input type="text" placeholder="write a comment" value={commentPost} onChange={(event) => setComment(event.target.value)} />
          <button onClick={handleSubmit} >Send</button>
        </div>
        {/* {comments.map((comment) => (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        ))} */}
      </div>
    );
 };
  

  export default Comments;
