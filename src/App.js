import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer.js";
import ASWADashboard from "./views/ASWADashboard";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ListProductsTable from "./components/ListProductsTable";
import ListProductsGrid from "./components/ListProductsGrid";
import Navbar from './components/Navbar';

const userInfoLoaded = true;
const logged = true;

const onLogout = async () => {
  return "LOGOUT";
};

function App() {
  const [menu, setMenu] = React.useState({
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
        <Header title="Auction Sales System" />
        {userInfoLoaded && (
          <div className="relative pr-5 flex flex-col sm:flex-row sm:items-center">
            {logged ? (
              <>
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
                  <Link to="/" className="sm:mr-4 block mt-4 sm:mt-0">
                    <Button
                      type="OUTLINE"
                      size="small"
                      className="block w-full sm:w-auto"
                    >
                      Home
                  </Button>
                  </Link>
                  <Link to="/login" className="sm:mr-4 block mt-4 sm:mt-0">
                    <Button
                      type="OUTLINE"
                      size="small"
                      className="block w-full sm:w-auto"
                    >
                      Login
                  </Button>
                  </Link>
                  <Link to="/signup" className="sm:mr-4 block mt-4 sm:mt-0">
                    <Button
                      type="OUTLINE"
                      size="small"
                      className="block w-full sm:w-auto"
                    >
                      Register
                  </Button>
                  </Link>
                </>
              )}
          </div>
        )}
        {/* <MainTiles /> */}
        <div>
          {/* <Navbar items={menu} /> */}
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
