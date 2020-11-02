import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from "../logo.svg"
/* import useCrud from '../Hooks/useCrud';
import userReducer from '../context/UserReducer';
import userContext from '../context/UserContext';
import { ADD_USER } from '../context/types'; */
/*
import { MyPaper } from '../components/shared/Paper'; // custom Paper
import { MyTitle } from '../components/shared/Title'; // custom Title
*/
import { H2, P } from '../components/shared/SharedStyleComponents';
import {APP_MIRROR_CLOCK_URL} from '../Hooks/apiContants'

function MainTiles(props) {
/*     const users = useCrud("http://jsonplaceholder.typicode.com/users")
    const initialState = { users: users }

    const [state, dispatch] = React.useReducer(userReducer, initialState)

    const addUser = (user) => {
        dispatch({
            type: ADD_USER,
            payload: user
        })
    } */
    return (
        <div className="w-full max-w-4xl mx-auto ml-4 ">
            <div className="p-8 mx-auto text-gray-800 bg-green-200 rounded shadow-md">
                <h1 className='text-2xl font-bold tracking-wider text-center font-display'>About ASWA</h1>
                <H2>What is it</H2>
                <P>
                    <i>ASWA</i> is a online Auction Sales Web App inspired to <b>Sintel Van der Hoorn</b> Auction System
                </P>
                <div className="flex md:pl-12 ">
                    <img src={logo} alt="logo" className="App-logo" />
                    {/* <a href="/#" className="p-4 text-xl font-bold text-white bg-black">
                        <span className="timer-font"><Timer loop={true} /></span>
                    </a> */}
                    <img className="max-w-sm" src={APP_MIRROR_CLOCK_URL} alt="clock mirror"/>
                </div>
                    <div className="my-blockquote">Web Human Experience</div>
            <h3>{props.title}</h3>
            {/*                 <div className="app">
                    <H2>Users Map</H2>
                    { <input value={word} onChange={e => setWord(e.target.value)} /> }
                    { <button onClick={getAssociations}>Find Associations</button> }
                    {users && (
                        Object.keys(users).length === 0
                            ? <p>No results</p>
                            : <div>
                                {
                                    arr.map((item) => (
                                        <span key={item[1].id} className="block" >
                                            {item[1].name}
                                        </span>
                                    ))
                                }
                            </div>
                    )}
                </div>
 */}
{/*     <userContext.Provider
        value={{
            users: state.users,
            addUser
        }}>

    </userContext.Provider> */}
        </div >
        {/* <ListUsers /> */ }
    {/* <WinnerAuction /> */}
        </div >
    )
}

export default withRouter(MainTiles)