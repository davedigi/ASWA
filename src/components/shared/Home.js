import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import {
  APP_TITLE, APP_ENV, APP_API_PORT, APP_API_URL,
  ACCESS_TOKEN_NAME
} from "../../Hooks/apiContants"
import MainTiles from '../../views/MainTiles';


function Home(props) {
  useEffect(() => {
    console.log('useEffect Home chiamo /user/me')
    axios.get(APP_API_URL + ':' + APP_API_PORT + "/user/me", { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
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
      >-> Enter ASWA {APP_TITLE} in {APP_ENV} mode
      </button>
      <div>
        <a
          className="text-sm uppercase lg:inline-block font-semibold"
          href="https://speakerdeck.com/jaketrent/getting-into-frontend-dev-today"
          // onClick={e => e.preventDefault()}
        >
          ASWA Speakerdeck
          </a>
        {/* <Link to="https://speakerdeck.com/jaketrent/getting-into-frontend-dev-today">Speakerdeck.com {APP_TITLE}</Link> */}
        {/* <script async className="speakerdeck-embed" data-id="f7fcd7ad9ff6426991a063b9b8aa1f11" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script> */}
      </div>
    </div>
  )
}

export default withRouter(Home);