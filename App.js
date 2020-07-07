import React, {Component} from 'react';
import Routes from './Routes/Routes';

export default class App extends Component {

  constructor(){
 
    super();
 
    // Creating Global Variable.
    global.api = 'http://192.168.3.129:8000/api/';
    global.img = 'http://192.168.3.129:8000/images/';
  }


  render() {
    return <Routes />;
  }
}
