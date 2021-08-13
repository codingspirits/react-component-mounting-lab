import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    timerIDs: []
  }}

// returns array of components written in JSX, mapped from this.state.timerIDs
renderTimers = () => this.state.timerIDs.map(id => {
  return <Timer key={id} id={id} removeTimer={this.removeTimer} />
})

// adds a random number for timer ID
handleAddTimer = () => {
  this.setState(prevState => ({
    timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
  }))
}

// removeTimer updates state, removing any timer that matches the provided author
removeTimer = id => {
  this.setState(prevState => ({
    timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
  }))
}
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  


}

export default App;
