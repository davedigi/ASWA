import React, { useState } from "react";
import "./App.css";
import Home from "./components/shared/Home";
import Footer from "./components/shared/Footer";
import ASWADashboard from "./views/ASWADashboard";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './components/shared/Login';
import logo from "./logo.svg"
import PrivateRoute from './components/shared/PrivateRoute'
import AlertComponent from "./components/shared/AlertComponent";


const onLogout = async () => {
  return <div>logout...</div>;
};

function App() {

  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [logged, setLogged] = useState(false);
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null)

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
                              className="    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                              Login
                            </button>
                          </Link>
                          <Link to="/register" className="sm:mr-4 block mt-4 sm:mt-0">
                            <div className="text-center pt-12 pb-12 pr-2">
                              <span>Dont have an account?</span>
                              <span
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
              {/* <PrivateRoute path="/listproducts-tb" component={ListProductsTable} /> */}
              {/* <PrivateRoute path="/listproducts" component={ListProductsGrid} /> */}
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
