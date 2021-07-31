import About from './components/About';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

// https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec

import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
return (
<div className="App">
  <Router>
  <NavigationBar></NavigationBar>
  <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route exact path="/hobbies" component={Hobbies}></Route>
  </Router>
</div>
);
}
export default App;