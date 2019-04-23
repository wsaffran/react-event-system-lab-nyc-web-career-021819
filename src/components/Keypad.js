import React from 'react';

class Keypad extends React.Component {

  submitPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.submitPassword}></input>
    )
  }

}
export default Keypad
