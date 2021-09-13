import { useHistory } from "react-router-dom";
import './../home.css';


const PostContainer = ({ postList }) => {
    let history = useHistory();
    return (
        <div>
            <h3>Posts</h3>
            <div className="posts-container">
                {postList.length &&
                    postList.map((item, index) => (
                        <div className="post-wrapper">
                            <p className="post-title">{item.title}</p>
                            <p className="post-body">{item.body}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PostContainer;