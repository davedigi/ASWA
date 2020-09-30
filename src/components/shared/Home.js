import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import {
  APP_TITLE,
  APP_BASE_URL,
  APP_PORT,
  APP_API_USER,
  ACCESS_TOKEN_NAME,
  API_BASE_URL
} from "../../Hooks/apiContants"
import MainTiles from '../../views/MainTiles';


function Home(props) {
  useEffect(() => {
    console.log('useEffect Home chiamo /user/me')
    axios.get("http://localhost:4000/user/me", { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
      .then(function (response) {
        if (response.status !== 200) {
          redirectToLogin()
        }
      })
      .catch(function (error) {
        redirectToLogin()
      });
  })
  function redirectToLogin() {
    props.history.push('/login');
  }
  function redirectToASWA() {
    props.history.push('/aswadashboard');
  }
  return (
    <div className="w-full max-w-4xl mx-auto ml-4 ">
      <MainTiles />
      <button type="submit" 
        onClick={redirectToASWA}
        className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      >-> Enter ASWA
      </button>
    </div>
  )
}

export default withRouter(Home);