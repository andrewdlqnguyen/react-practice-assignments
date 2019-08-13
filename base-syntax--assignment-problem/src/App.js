import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    accounts: [
      {userName: 'cindytvnguyen', pass: '100315'},
      {userName: 'andrewduynguyen', pass: '1003'}
    ]
  }

  accountHandler = (event) => {
    this.setState({
      accounts: [
        {userName: event.target.value, pass: '100315'},
        {userName: 'andrewduynguyen2', pass: '1003'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <ol>
          <li>DONE Create TWO new components: UserInput and UserOutput</li>
          <li>DONE UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>DONE Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>DONE Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>DONE Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>DONE Add a method to manipulate the state (=> an event-handler method)</li>
          <li>DONE Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>DONE Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>DONE Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>DONE Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserOutput
          userName={this.state.accounts[0].userName}
          userName2={this.state.accounts[1].userName}>
        </UserOutput>
        <UserInput
          style={style} 
          userName={this.state.accounts[0].userName}
          changed={this.accountHandler}>
        </UserInput>
      </div>

    );
  }
}

export default App;
