import { ADD_USER } from './types'

const addUser = (user, state) => {
   const newUser = [...state.users, user]
   return{
      ...state,
      user: newUser
   }
}

export default (state, action) => {
   switch (action.type) {
      case ADD_USER:
         return addUser(action.payload, state);
      default:
         return state;

   }

}