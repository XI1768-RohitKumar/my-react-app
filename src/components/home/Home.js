import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotoData, getPostData } from "./../../redux/actions/homeAction";
import PhotoContainer from "./photos/PhotoContainer";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import PostContainer from "./posts/PostContainer";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isPhotosClicked: true,
            isPostClicked: false
        }
    }

    componentDidMount() {
        this.props.getPhotoData("photos");
    }

    isEmptyObject = (obj) => {
        if (obj === undefined || obj === null) {
            return true;
        }
        return Object.keys(obj).length === 0;
    };

    fetchPostData = () => {
        this.setState({ isPhotosClicked: false, isPostClicked: true }, () => {
            this.props.getPostData("posts");
        });
    }

    render() {
        const { isLoading, list, error, postList, postError } = this.props;
        if (!this.isEmptyObject(error)) {
            return (
                <div className="App">
                    <header className="App-header"></header>
                    <h1>Error Occured</h1>
                </div>
            );
        } else if (!this.isEmptyObject(postError)) {
            return (
                <div className="App">
                    <header className="App-header"></header>
                    <h1>Error Occured</h1>
                </div>
            );
        }
        return (
            <div className="App">
                <ul style={{ listStyleType: "none", padding: 0, flexDirection: 'row' }}>
                    <li>
                        <Link to="/home/photos" onClick={() => this.setState({ isPhotosClicked: true, isPostClicked: false })} >Photos</Link>
                    </li>
                    <li>
                        <Link to="/home/posts" onClick={() => { this.fetchPostData(); }}>Posts</Link>
                    </li>
                </ul>

                {this.state.isPhotosClicked && list && list.length !== 0 && <PhotoContainer list={list} />}
                {this.state.isPostClicked && postList && postList.length !== 0 && <PostContainer postList={postList} />}
                {isLoading && (
                    <Loader
                        type="Rings"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.homeReducer.list,
    postList: state.homeReducer.postList,
    isLoading: state.homeReducer.isLoading,
    error: state.homeReducer.error,
});
const mapDispatchToProps = {
    getPhotoData, getPostData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
