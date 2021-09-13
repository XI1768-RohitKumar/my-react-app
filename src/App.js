import './App.css';
import Login from './components/login/login';
import Registration from './components/registration/registration';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PhotoDetails from './components/home/PhotoDetails';
import PostContainer from './components/home/posts/PostContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/home/photos">
            <Home />
          </Route>
          <Route path="/home/posts">
            <PostContainer />
          </Route>
          <Route path="/photo-details/:id">
            <PhotoDetails />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
