import React, { Component } from 'react';
// import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import requestUsers from './http/';
import store from './store';



class App extends Component {
  async componentDidMount() {
    const { users, widgets } = await requestUsers('/data/users.json')
    store.dispatch({
      type: 'USER_LIST_SUCCES',
      users,
    })
    store.dispatch({
      type: 'WIDGET_LIST_SUCCES',
      widgets,
    })
    console.log(users)
  }

  render(){

    return(
      <div>
        <h2>Hello redux</h2>
        {this.props.users.map((user, i) => <p key={i.toString()}>{user.name}</p>)}
      </div>
    )
  }

}

// const mapStateToProps = function(store) {
//   return {
//     users: store.userState.users,
//   }
// }

const mapStateToProps = store => ({ users: store.userState.users});


export default connect(mapStateToProps)(App);
