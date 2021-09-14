import { useHistory } from "react-router-dom";
import './../home.css';

const PhotoContainer = ({ list }) => {
  let history = useHistory();
  return (
    <div>
      <h3>Photos</h3>
      <div className="photos-container">
        {list.length &&
          list.map((item, index) => (
            <div key={index} onClick={() => { history.push(`/photo-details/${item.id}`, item) }}>
              <img src={item.thumbnailUrl} key={index} alt="thumbnail" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotoContainer;