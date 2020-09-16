import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome!
      </header>
      <p>
        Hi there! For your challenge, please implement (or begin implementing) a proof-of-concept for an app that fulfills the following 3.5 criteria:
      </p>
      <ol>
        <li>Implements a form where the user can enter their name and choose their favorite color (input, dropdown, selector — however you want to do it)</li>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <li>On submit, fetch a list of "nouns that are often described by the adjective `userColor`," using this API: <a href={"http://www.datamuse.com/api/"} target={"_blank"}>http://www.datamuse.com/api/</a></li>
        <li>Display the results, AND allow the user the option to return to the form or otherwise enter a new color</li>
      </ol>
      <p>Use whatever resources you need to complete this challenge. Good luck!</p>
    </div>
  );
}

export default App;
