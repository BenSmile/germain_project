import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Projectboard from './components/Projectboard';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import AddProjectTask from './components/AddProjectTask';
import store from './store';
import UpdateProjectTask from './components/UpdateProjectTask';
import Header from './components/Header';

import routes from "./routes";





function App() {

  const history = useHistory();

  const [userConnected, setUserConnected] = useState({})
  // console.log("path  register= ", (pathname.includes('register') || (pathname.includes('login'))))
  // { !(pathname.includes('register') || (pathname.includes('login'))) && <Header /> }
  // const userConnected = localStorage.getItem('user');
  // console.log('userConnected', userConnected.username)
  useEffect(() => {
    setUserConnected(localStorage.getItem("user"))

    if (!userConnected) {
      history.push('/login')
    }
  }, [])
  console.log('userConnected', localStorage.getItem("user"))

  return (
    <Provider store={store}>
      {/* <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Projectboard} />
          <Route exact path="/addProjectTask" component={AddProjectTask} />
          <Route exact path="/updateProjectTask/:pt_id" component={UpdateProjectTask} />
        </div>
      </Router> */}

      {/* .filter(route => route.requireAuth) */}

      <Router>
        <Header />
        <br></br>
        <Switch>
          {routes
            .map((route, index) =>
              <Route key={index}
                path={route.path}
                exact
                render={(props) => <route.component {...props} />}></Route>
            )}
        </Switch>
      </Router>

    </Provider>


  );
}



export default App;
