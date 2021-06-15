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
  <div style={{display:"flex",justifyContent:"space-around"}}>
 
 <NavLink exact={true} activeClassName='is-active' to='/add'>ADD</NavLink>
 <NavLink activeClassName='is-active' to='/'>ALL VIDEOS</NavLink>
 <NavLink to='/hidden'>HIDDEN</NavLink>
  </div>
 
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
