import {createContext} from 'react'

const userContext = createContext({
   users: [],
   addUser: (user) => {}
})

export default userContext