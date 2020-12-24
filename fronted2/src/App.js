import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import routes from "./routes";
import { GlobalProvider } from "./context/Provider"
import Header from './components/Header';

function App() {


  const { pathname } = window.location;



  console.log("path  register= ", (pathname.includes('register') || (pathname.includes('login'))))
  { !(pathname.includes('register') || (pathname.includes('login'))) && <Header /> }



  return (
    <GlobalProvider>

      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) =>
            <Route key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}></Route>
          )}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
