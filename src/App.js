import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer.js";
import ASWADashboard from "./views/ASWADashboard";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ListProductsTable from "./components/ListProductsTable";
import ListProductsGrid from "./components/ListProductsGrid";
import Navbar from './components/Navbar';
import  Login  from './components/shared/Login';
import UseAsync from './Hooks/UseAsync';
import MainTiles from './views/MainTiles';
import AlertComponent from './components/shared/ErrorMessage';
import Timer from './components/ASWA/Timer100';

const userInfoLoaded = true;
// const logged = true;
const logged = false;

const onLogout = async () => {
  return "LOGOUT";
};

function App() {
  const menu = React.useState({
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
  });
  console.log(menu);
  return (
    <>
      <Router>
        {userInfoLoaded && (
          <div className="">
            {logged ? (
              <>
                <Header title="Auction Sales System" />
                <Navbar items={menu} />
                <Link to="/profile" className="mr-4 hidden sm:flex -my-2">
                  ProfileLogo
                </Link>
                <Button
                  type="OUTLINE"
                  size="small"
                  className="block mt-4 sm:inline-block sm:mt-0"
                  onClick={onLogout}
                >
                  Login
                </Button>
              </>
            ) : (
                <>
                  {/* <MainTiles title="Now i'm developing this modules:" /> */}


                  {/* <UseAsync /> */}
                  <Link to="/login" className="sm:mr-4 block mt-4 sm:mt-0"> 
                    <Button
                      type="OUTLINE"
                      size="small"
                      className="block w-full sm:w-auto"
                    >
                      Login
                  </Button>
                  </Link> 
                </>
              )}
          </div>
        )}
        {/* <MainTiles /> */}
        <div>
          <Route path="/login" component={Login} />
          <Route path="/home" component={App} />
          <Route path="/error" component={AlertComponent} />
          <Route path="/aswadashboard" component={ASWADashboard} />
          <Route path="/listproducts-tb" component={ListProductsTable} />
          <Route path="/listproducts" component={ListProductsGrid} />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
