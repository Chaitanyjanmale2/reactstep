import React from 'react';
import  Profileform from './components/Profileform';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Router, Switch } from 'react-router';
import history from './history';
import Login from './components/Login';

const App = () => {
  
    
  return (
    
     <div className="container pt-3 ">
       <Router history={history}>
         <Switch>
           <Route path="/" exact component={Login}/>             {/* login page through which  user to profile page after validation*/}
           <Route path="/profile" exact  component={Profileform}/>  {/* profile page */}
   
         </Switch>
       </Router>
    
      </div>
    
   
  );
}

export default App;
