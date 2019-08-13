import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// Assignemnt 2 Dealing with List and Conditions.
// Application will take in user string input and outputs the string in characters.
// Dynamically allow removals and changes from input.
class App extends Component {
  state = {
    userInput: ''
  }

  // inputChangedHandler modifies the state userInput depending on the input field.
  // @param event is from the input FileReader.
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  // deleteCharHandler will delete the chosen index element from the array of userInputs
  // @param index distinguised by clicking on the element.
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }
  
  render() {

    // charList variable is an array of the states userInput. The String is broken up into individial characters.
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked ={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr/>
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>

        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
