import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import JobTrackerApp from './components/job/JobTrackerApp';

 
class App extends Component {
  render() {
    return (
      <div className="App">
      <JobTrackerApp/>

      </div>
    );
  }
}
export default App;
