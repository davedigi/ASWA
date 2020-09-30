import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { ACCESS_TOKEN_NAME, APP_BASE_URL, APP_PORT } from '../../Hooks/apiContants'
import AlertComponent from './AlertComponent';

function Login(props) {

   const [logged, setLogged] = React.useState(false)

   // useEffect(() => {
   // setLogged((Data) => (!logged))
   // })

   const [state, setState] = React.useState({
      email: "",
      password: "",
      successMessage: null
   })


   /* YOU CAN'T DO THIS: 
      <button onClick={removeBill(index)}>𝗫</button>
      because the expression inside onClick is going to be executed on mount.This is going to delete all the bills in the list, as soon as the app is started.
   
      Instead, this is what YOU NEED TO DO, using arrow functions:
      <button onClick={() => removeBill(index)}>𝗫</button>
    */
   const handleChange = (e) => {
      const { id, value } = e.target
      setState(prevState => ({
         ...prevState,
         [id]: value
      }))
   }
   const handleSubmitClick = (e) => {
      e.preventDefault();
      console.log('value del click=', e.target.value)
      const payload = {
         "email": state.email,
         "password": state.password,
      }
      console.log('vado ad autorizzare user ', state.email,)
      // axios.post(APP_BASE_URL + ':' + APP_PORT + '/user/login', payload)
      axios.post('http://localhost:4000/user/login', payload)
         .then(function (response) {
            if (response.status === 200) {
               setState(prevState => ({
                  ...prevState,
                  'successMessage': 'Login successful. Redirecting to home page..'
               }))
               localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
               console.log("login ok", payload, " e token=", response.data.token)
               props.showError(null)
               redirectToHome();
            }
            else if (response.code === 204) {
               console.log("Username and password do not match");
               props.showError("Username and password do not match");
            }
            else {
               console.log("Username does not exists");
               props.showError("Username does not exists");
            }
         })
         .catch(function (error) {
            if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               const message = error.response.data.errors
               message.map((item) => {
                  console.log('err message from backend=', item.msg);
                  props.showError(item.msg);
                  return null
               })
               console.log(error.response.status);
               console.log(error.response.headers);
            } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log(error.request);
            } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
            }
            console.log(error.config);
            console.log(error.toJSON());
            console.log("CATCH error in axios.post", error)
         });
   }

   const redirectToHome = () => {
      // props.updateTitle('Home')
      props.history.push('/home');
   }
   const redirectToRegister = () => {
      props.history.push('/register');
      // props.updateTitle('Register');
   }
   return (
      <div className="w-full flex flex-wrap">
         <div className="w-full md:w-1/2 flex flex-col">

            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
               <a href="/#" className="bg-black text-white font-bold text-xl p-4">WIM</a>
            </div>

            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
               <p className="text-center text-3xl">Welcome.</p>
               <form className="flex flex-col pt-3 md:pt-8" >
                  <div className="flex flex-col pt-4">
                     <label htmlFor="email" className="text-lg">Email</label>
                     <input type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        aria-describedby="emailHelp"
                        value={state.email}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="flex flex-col pt-4">
                     <label htmlFor="password" className="text-lg">Password</label>
                     <input type="password"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                     />
                  </div>
                  <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                  {state.successMessage}
               </div>
                  <button type="submit"
                     onClick={handleSubmitClick}
                     className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                  >Log In</button>
               </form>

               <AlertComponent errorMessage={state.successMessage} hideError={''} />
               <div className="text-center pt-12 pb-12">
                  <span>Dont have an account? </span>
                  <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
               </div>
            </div>

         </div>
         <div className="w-1/2 shadow-2xl">
            <img className="object-cover w-full  md:max-h-full lg:h-screen hidden md:block" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80" alt="" />

         </div>
      </div >
   )
}
export default withRouter(Login);