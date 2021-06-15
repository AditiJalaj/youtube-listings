import './App.css';
import {BrowserRouter as Router,Switch, Route ,Link } from 'react-router-dom'
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
 
  <button><Link to='/add'>ADD</Link></button>
  
  {/* replace below two with buttons and onclick -set state to show hidden or all videos components*/}
  <button><Link to='/'>ALL VIDEOS</Link></button>
  <button><Link to='/hidden'>HIDDEN</Link></button>
  </div>
 
  <Switch>
  <Route exact path='/videodetails/:id' component={VideoDetails}/>
  <Route exact path='/edit/:id' component={EditForm}/>
  <Route exact path='/' component={VideoListing}/>
  <Route exact path='/add' component={AddForm}/>
  <Route exact path='/hidden' component={Hidden}/>
  
  </Switch>
  </Router>

  
   </>
  );
}

export default App;
