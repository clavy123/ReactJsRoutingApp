import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Birds from './birds.js';
import Foods from './foods.js';
import Animals from './animals.js';
import Mountains from './mountains.js';
//import reportWebVitals from './reportWebVitals';
import {Route,Switch,Link,BrowserRouter as Router} from  'react-router-dom';
function Routing() {
  return (
    <Router>
      <div className="center">
        <h3 className="heading">RoutingApp</h3>
        <nav className="navigation">
        <ul>
          <li><Link to ="/" className="link">Birds</Link></li>
          <li><Link to="/foods" className="link">Foods</Link></li>
          <li><Link to="/animals" className="link">Animals</Link></li>
          <li><Link to="/mountains" className="link">Mountains</Link></li>
        </ul>
        </nav>
        <Switch>
        <Route exact path="/" component={Birds}/>
        <Route exact path="/foods" component={Foods}/>
        <Route exact path="/animals" component={Animals}/>
        <Route exact path="/mountains" component={Mountains}/>
        </Switch>
      </div>
    </Router>

  )
}

ReactDOM.render(
  <Routing/>,
  document.getElementById('root')
);

//reportWebVitals();
