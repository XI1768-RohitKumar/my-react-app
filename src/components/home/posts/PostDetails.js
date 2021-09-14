import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {
  getCommentList,
  submitComment,
} from "../../../redux/actions/homeAction";
import Card from "./Card";

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  componentDidMount() {
    const { postDetail } = this.props;
    this.props.getCommentList(postDetail.id);
  }

  render() {
            const { postDetail, isCommentLoading,  postComment ,submitData} =
      this.props;
  

    return (
      <div>
        {postComment && postComment.length > 0 && (
          <Card
            postDetail={postDetail}
            postComment={postComment}
            onChangeText={(e) => {
              this.setState({ comment: e.target.value });
            }}
            submitComment={(postid, email, name) => {
              this.props.submitComment(postid, email, this.state.comment, name);
              this.setState({
                comment: "",
              });
            }}
            submitData={submitData}
          />
        )}
        {isCommentLoading && (
          <Loader type="Rings" color="#00BFFF" height={100} width={100} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postDetail: state.homeReducer.postDetail,
  isCommentLoading: state.homeReducer.isCommentLoading,
  isErrorComment: state.homeReducer.isErrorComment,
  postComment: state.homeReducer.postComment,
  submitData: state.homeReducer.submitData,
});

const mapDispatchToProps = {
  getCommentList,
  submitComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
