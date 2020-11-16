import React from 'react'
import { connect } from 'react-redux'
import fetchUsers from './store/actions/FetchUsers'

export const UserList = (props) => {
   const [hack, setHack] = React.useState([])

   console.log('[USERLIST] props:', props)
   var isUndefined = (typeof props.users === 'undefined');

   const DispatchFetchUsers = () => {
      // const result = props.fetchUsers()
      fetch('https://reqres.in/api/users')
         .then(res => res.json())
         .then(res => {
            setHack(res.data)
            console.log('[USERLIST] DispatchFetchUsers :', res.data)
         })

      return
   }

   React.useEffect(() => {
      DispatchFetchUsers()
      props.onChange(props.users)
      console.log('[USERLIST] chiamato USEEFFECT :', props.users)
   }, [])

   console.log('[USERLIST] RENDER HACK:', hack)

   return (
      <div className="App">
         <h3>REDUX MOVIELIST APP</h3>
         {Array.isArray(hack) && hack.length ?
            hack.map(hack => <p className="" key={hack.id}>{hack.first_name} -    {hack.email}</p>)
            :
            <p>THERE ARE NO USERS</p>
         }
         <br />
         <button onClick={DispatchFetchUsers}>FETCH USERS</button>
      </div>
   )
}

const MapStateToProps = (state) => {
   return {
      users: state.users
   }
}
const MapDispatchToProps = (dispatch) => ({
   fetchUsers: () => dispatch(fetchUsers)
})

export default connect(MapStateToProps, MapDispatchToProps)(UserList)