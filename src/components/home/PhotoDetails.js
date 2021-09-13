import { useHistory } from "react-router";

const PhotoDetails = () => {
    let history = useHistory();
    let details = history.location.state;
    return (
        <div>
            <img src={details.url} alt="full_image" />
            <p>{details.title}</p>
        </div>
    );
};

export default PhotoDetails;