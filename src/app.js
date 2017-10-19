import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';
import { data } from './data'
import Messages from './message'
import Toolbar from './toolbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages:data,
    }
    console.log('data', data);
  }

  render(){
    return(
      <div>
      <Toolbar />
      <Messages />
      </div>
    )
  }
}


export default App
