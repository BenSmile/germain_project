import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Projectboard from './components/Projectboard';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useHistory } from 'react-router';
import AddProjectTask from './components/AddProjectTask';
import store from './store';
import UpdateProjectTask from './components/UpdateProjectTask';
import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux';
import routes from "./routes";
import { loadUser } from './actions/userActions';
import HomepageLayout from './components/HomepageLayout';





function App() {

 

  const history = useHistory();
  console.log('history', history)


  const dispatch = useDispatch()


  const [userConnected, setUserConnected] = useState({})

  useEffect(() => {
    setUserConnected(localStorage.getItem("user"))

    if (!userConnected) {
      history.push('/login')
    }
  }, [])

  console.log('userConnected', localStorage.getItem("user"))

  return (
    <>
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
        <br></br>
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

    </>


  );
}




// <Switch>
// {routes
//   .map((route, index) => {
//     return (
//       <Route key={index}
//         path={route.path}
//         exact
//         render={(props) => {
//           if (localStorage.getItem('user')?.username && route.requireAuth) {
//             return (<route.component/>)
//           } else {
//             return (<HomepageLayout/>)
//           }
//         }}
//       />   
//         )})}

// </Switch>



export default App;
