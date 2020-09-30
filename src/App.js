import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Home from "./components/shared/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer.js";
import ASWADashboard from "./views/ASWADashboard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ListProductsTable from "./components/ListProductsTable";
import ListProductsGrid from "./components/ListProductsGrid";
import Navbar from './components/Navbar';
import Login from './components/shared/Login';
import UseAsync from './Hooks/UseAsync';
import MainTiles from './views/MainTiles';
import AlertComponent from './components/shared/ErrorMessage';
import Timer from './components/ASWA/Timer100';
import logo from "./logo.svg"
import PrivateRoute from './components/shared/PrivateRoute'


const onLogout = async () => {
  return "LOGOUT";
};

function App() {

  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [logged, setLogged] = useState(false);
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null)

/*   const menu = useState({
    login: { id: 2, label: "Login", url: "/login", active: true },
    register: { id: 3, label: "Register", url: "/register", active: true },
    aswa: {
      id: 0,
      label: "Auction Sales System",
      url: "/aswadashboard",
      active: true,
    },
    listproducts: {
      id: 1,
      label: "List Products",
      url: "/listproducts-tb",
      active: true,
    },
  }); */ 
  // console.log(menu);


  return (
    <>
      <Router>
        <div className="App">

          {/* <MainTiles /> */}
          <div className="">
            <Switch>
              <Route path="/" exact={true}>
                <div className="  max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl flex-col mt-2 ">
                  <img src={logo} alt="logo" className="App-logo" />
                  {/* <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} /> */}
                  {!userInfoLoaded && (
                    <div className="flex-col mx-auto ">
                      {!logged ? (
                        <>
                          <Link to="/login" className="sm:mr-4 block mt-4 sm:mt-0">
                            <button
                              size="large"
                              className="    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                              Login
                            </button>
                          </Link>
                          <Link to="/register" className="sm:mr-4 block mt-4 sm:mt-0">
                            <div className="text-center pt-12 pb-12 pr-2">
                              <span>Dont have an account?</span>
                              <span
                                size="large"
                                className="    bg-blue-200 hover:bg-blue-400 text-blue font-bold py-2 px-4 rounded-full"
                              >
                                Register
                            </span>
                            </div>
                          </Link>


                        </>
                      ) : (
                          <>
                            {/* <MainTiles title="Now i'm developing this modules:" /> */}

                            {/* <UseAsync /> */}
                          </>
                        )}
                    </div>
                  )}
                </div>
              </Route>
              <Route path="/register">
                Registration Form
            {/* <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} /> */}
              </Route>
              <Route path="/login">
                <Login showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route>
              <PrivateRoute path="/home">
                <Home />
              </PrivateRoute>
              <Route path="/error" component={AlertComponent} />
              <PrivateRoute path="/aswadashboard" component={ASWADashboard} />
              <PrivateRoute path="/listproducts-tb" component={ListProductsTable} />
              <PrivateRoute path="/listproducts" component={ListProductsGrid} />
            </Switch>
            <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
          </div>
          <Footer />
        </div>
      </Router >
    </>
  );
}

export default App;
