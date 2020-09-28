import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../Hooks/apiContants";
import PropTypes from "prop-types";

// Fabio Biondi code review (without axios)
export default function useCrud(url) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // console.log('useEffect con props', props.title);
    (async () => {
      const res = await fetch(url);
      setUsers(await res.json());
    })();
    // const timer = setInterval(() => {
    // new Date()
    //     axios.get(API_BASE_URL + '/user/me', { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
    //         .then(function (response) {
    //             if (response.status !== 200) {
    //                 console.log('ERRORE useEffect Home chiamo /user/me', response.statusText)
    //                 redirectTo('/home')
    //             }
    //         })
    //         .catch(function (error) {
    // console.log('ERRORE useEffect Home chiamo /user/me', new Date())
    // redirectTo('/error')
    //         });
    // }, 2000)
  }, [url]); // << super important array
  console.log("useCRUD: USERS", users);

  function redirectTo(path) {
    // props.history.push(path);
  }

  // in attesa della riscrittura in typescript
  redirectTo.propTypes = {
    path: PropTypes.string.isRequired,
  };
  redirectTo.defaultProps = {
    path: "/error",
  };
  redirectTo.defaultProps = {
    path: "/error",
  };
  // return props.render(datai)
  return users;
}
