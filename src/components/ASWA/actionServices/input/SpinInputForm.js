import React from 'react'
import ReactDOM from 'react-dom';

const SpinInputForm = (props) => {
  
   let handleSubmit = (e) => {
     e.preventDefault();
   }
 
   return(
     <form action="" onSubmit={handleSubmit}>
       <label htmlFor="name">Spin</label>
       <br />
       <input type="text" id="spin" defaultValue={props.data.spin || ''} onChange={ props.inputChange } />
     </form>
   )
 
 }

 const UserDashboard = (props) => {
   
  let inputChangeHandler = (event) => {
    props.updateName(event.target.value);
  }

  return(
    <div>
      <h1>Hi { props.user.name || 'User' }</h1>
      <SpinInputForm data={props.user} inputChange={inputChangeHandler} />
    </div>
  )

}
 const mapStateToProps = (state) => {
  return {
    user: state
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (data) => dispatch( Action.updateName(data) ),
  };
};

const { connect, Provider } = React.Redux;
const UserDashboardConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);



const App = (props) => {
  return(
    <div>
      <h1>Communication between Stateless Functional Components</h1>
      <UserDashboardConnected />
    </div>
  )
}



const user = (state={name: 'John'}, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign( {}, state, {name: action.payload}  );

    default:
      return state;
  }
};

const { createStore } = React.Redux;
const store = createStore(user);
const Action = {
  updateName: (data) => {
    return { type : 'UPDATE_NAME', payload: data }
  },
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('application')
);

 export default SpinInputForm
 
