import React from 'react'
import { withRouter } from 'react-router-dom';
import useCrud from '../Hooks/useCrud';
import userReducer from '../context/UserReducer';
import userContext from '../context/UserContext';
import { ADD_USER } from '../context/types';
/*
import { MyPaper } from '../components/shared/Paper'; // custom Paper 
import { MyTitle } from '../components/shared/Title'; // custom Title
*/
import Timer from '../components/ASWA/Timer100';
import logo from "../logo.svg"




function MainTiles(props) {
    const users = useCrud("http://jsonplaceholder.typicode.com/users")
    const initialState = { users: users }

    const [state, dispatch] = React.useReducer(userReducer, initialState)

    const addUser = (user) => {
        dispatch({
            type: ADD_USER,
            payload: user
        })
    }
    /*     const arr = Object.entries(users);
        console.log('stringify:', JSON.stringify(arr))
        arr.map((item) => {
            console.log('map(item1):', item[1])
            return ""
        }); */


    return (
        <div className="w-full max-w-4xl mx-auto ml-4  ">
            <div className="bg-green-200 text-gray-800 shadow-md rounded p-8 mx-auto">
                <h1 className='text-2xl font-bold text-center font-display tracking-wider'>About ASWA</h1>
                <H2>What is it</H2>
                <P>
                    <i>ASWA</i> is a online Auction Sales Web App inspired to <b>Sintel Van der Hoorn</b>
                </P>
                <div className="flex   md:pl-12 ">
                    <img src={logo} alt="logo" className="App-logo" />
                    <a href="/#" className="bg-black text-white font-bold text-xl p-4">
                        <span className="timer-font"><Timer loop={true} /></span>
                    </a>
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
    <userContext.Provider
        value={{
            users: state.users,
            addUser
        }}>

    </userContext.Provider>
        </div >
        {/* <ListUsers /> */ }
    {/* <ListProductsTable /> */ }
        </div >
    )
}

export default withRouter(MainTiles)