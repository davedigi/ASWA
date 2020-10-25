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
import ModelDialog from "./components/shared/ModelDialog"


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
                <div className="flex flex-col max-w-sm p-6 mx-auto mt-2 bg-white rounded-lg shadow-xl ">
                  <img src={logo} alt="logo" className="App-logo" />
                  {/* <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} /> */}
                  {!userInfoLoaded && (
                    <div className="flex-col mx-auto ">
                      {!logged ? (
                        <>
                          <Link to="/login" className="block mt-4 sm:mr-4 sm:mt-0">
                            <button
                              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            >
                              Login
                            </button>
                          </Link>
                          <Link to="/register" className="block mt-4 sm:mr-4 sm:mt-0">
                            <div className="pt-12 pb-12 pr-2 text-center">
                              <span>Dont have an account?</span>
                              <span
                                className="px-4 py-2 font-bold bg-blue-200 rounded-full hover:bg-blue-400 text-blue"
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
