import './App.css';
import {BrowserRouter as Router,Switch, Route ,Link } from 'react-router-dom'
import VideoListing from './components/VideoListing'
import AddForm from './components/AddForm'


function App() {
  return (
   <>
  
  <Router>
  <div>
  <Link to='/add'>ADD</Link>
  <Link to='/'>HOME</Link>
  {/* replace below two with buttons and onclick -set state to show hidden or all videos components*/}
  <Link to='/all'>ALL</Link>
  <Link to='/hiddenvideos'>HIDDEN</Link>
  </div>
 
  <Switch>
  <Route exact path='/' component={VideoListing}></Route>
  <Route exact path='/add' component={AddForm}></Route>
  
  </Switch>
  
  </Router>

  
   </>
  );
}

export default App;
