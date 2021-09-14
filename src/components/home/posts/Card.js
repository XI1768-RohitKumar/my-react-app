import { Button } from "bootstrap";
import "./../home.css";

const Card = ({
  postComment,
  postDetail,
  onChangeText,
  submitComment,
  submitData,
}) => {
  let data = [...postComment];
  if (submitData) {
    data.push(submitData);
  }
  return (
    <div className="wrapper">
      <h1>Title: {postDetail.title}</h1>
      <h3> Posts: {postDetail.body} </h3>

      <div className="card-container">
        {data.map((item) => (
          <div className="card">
            <div className="text">Email : {item.email} </div>
            <div className="text">Name : {item.name}</div>
            <div className="text">Comment: {item.body}</div>
          </div>
        ))}
        <input type="text" onChange={(e) => onChangeText(e)} />

        <button
          type="submit"
          onClick={() =>
            submitComment(postDetail.id, postDetail.email, postDetail.title)
          }
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Card;
