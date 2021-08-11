import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
                             <h1 className="pb-3">Thank You For Your Submission</h1>
                             <p className="pb-3">You will get an email with further instructions.</p>
                     <Link to="/" className="text-center">
                             <button className="btn btn-primary m-4 w-10 ">Home Page</button>
                     </Link>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
