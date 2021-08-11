import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class Profileform extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    Birth: '',
    occupation: '',
    city: '',
    height: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, Birth, occupation, city, height } = this.state;
    const values = { firstName, lastName, Birth, occupation, city,height };

    switch (step) {
      case 1:
        return (
          <div>
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          /></div>
          
        );
      case 2:
        return (
          <div>  <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /></div>
         
        );
      case 3:
        return (
          <div> 
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          /></div>
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Profileform;
