import './App.css';
import {BrowserRouter as Router,Switch, Route ,NavLink } from 'react-router-dom'
import VideoListing from './components/VideoListing'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm';
import VideoDetails from './components/VideoDetails';
import Hidden from './components/Hidden';


function App() {
  return (
   <>
  
  <Router>
  <div className="nav">
 
 <NavLink exact activeClassName='is-active' to='/'>ALL VIDEOS</NavLink>
 <NavLink  exact activeClassName='is-active' to='/hidden'>HIDDEN</NavLink>
  </div>
 
  <button className="primary-button"><NavLink exact={true} activeClassName='is-active' to='/add'>ADD NEW</NavLink></button>
  
  <Switch>
  <Route exact path='/' component={VideoListing}/>
  <Route exact path='/add' component={AddForm}/>
  <Route exact path='/videodetails/:id' component={VideoDetails}/>
  <Route exact path='/edit/:id' component={EditForm}/>
  <Route exact path='/hidden' component={Hidden}/>
  
  </Switch>
  </Router>

  
   </>
  );
}

export default App;
