import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lowEString from './low-e-note.m4a';
import aString from './a-note.m4a';
import dString from './d-note.m4a';
import gString from './g-note.m4a';
import bString from './b-note.m4a';
import highEString from './high-e-note.m4a';

const lowENote = new Audio(lowEString);
const aNote = new Audio(aString);
const dNote = new Audio(dString);
const gNote = new Audio(gString);
const bNote = new Audio(bString);
const highENote = new Audio(highEString);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: { lowENote, aNote, dNote, gNote, bNote, highENote }
    };
    this.pressKey = this.pressKey.bind(this);
  }

  pressKey(key) {
    let note;
    if (key === 49) {
      note = this.state.notes.lowENote;
    } else if (key === 50) {
      note = this.state.notes.aNote;
    } else if (key === 51) {
      note = this.state.notes.dNote;
    } else if (key === 52) {
      note = this.state.notes.gNote;
    } else if (key === 53) {
      note = this.state.notes.bNote;
    } else if (key === 54) {
      note = this.state.notes.highENote;
    }
    note.currentTime = 0;
    note.play();
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      this.pressKey(e.keyCode);
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Guitar Tuner</h1>
        </header>
        <p>The strings are mapped to your numkeys (1-6)</p>
      </div>
    );
  }
}

export default App;
