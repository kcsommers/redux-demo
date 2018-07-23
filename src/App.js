import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {reducers} from './reducers';
import {postComment} from './actions';
import Form from './Form'
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p>Lorem Khaled Ipsum is a major key to success. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. We don’t see them, we will never see them. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. They don’t want us to win. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! The key to more success is to have a lot of pillows. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough?</p>
          
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;