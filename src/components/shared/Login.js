import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../Hooks/apiContants'


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
   const handleChange = (e) => {
      const { id, value } = e.target
      setState(prevState => ({
         ...prevState,
         [id]: value
      }))
   }

   const handleSubmitClick = (e) => {
      e.preventDefault();
      const payload = {
         "email": state.email,
         "password": state.password,
      }
      axios.post(API_BASE_URL + '/user/login', payload)
         .then(function (response) {
            if (response.status === 200) {
               setState(prevState => ({
                  ...prevState,
                  'successMessage': 'Login successful. Redirecting to home page..'
               }))
               localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
               // redirectToHome();
               alert("login ok, token=", response.data.token)
               props.showError(null)
            }
            else if (response.code === 204) {
               alert("Username and password do not match");
               props.showError("Username and password do not match");
            }
            else {
               alert("Username does not exists");
               props.showError("Username does not exists");
            }
         })
         .catch(function (error) {
            alert("error",error)
            console.log(error);
         });
   }
   const redirectToHome = () => {
      // props.updateTitle('Home')
      props.history.push('/aswadashboard');
   }
   const redirectToRegister = () => {
      props.history.push('/aswadashboard');
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
                     <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                  </div>

                  <input onClick={() => handleSubmitClick()} type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
               </form>
               <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                  {state.successMessage}
               </div>
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