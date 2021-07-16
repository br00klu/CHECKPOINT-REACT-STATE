
import './App.css';
import React from 'react';

import Profile from './Profile';

class App extends React.Component {


  state = {
    show: false
  };

  toggle =()=> {
    this.setState({
      show:!this.state.show
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.toggle}>
          show
        </button>
        {this.state.show && <Profile Person={this.state.person}/>}
      </div>
    )
  }
}

export default App;
