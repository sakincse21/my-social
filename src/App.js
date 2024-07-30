// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/posts'>
            <Posts></Posts>
          </Route>
          <Route path='/postdetail/:id'>
            <PostDetail></PostDetail>
          </Route>
          <Route path='/user/:id'>
            <Profile></Profile>
          </Route>
          <Route path='/'>
            <Posts></Posts>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
