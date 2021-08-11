import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Imageupload from './Imageupload';
export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, Birth, occupation, city, height }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          ><h1 className="text-center p-3 text-primary">Create Profile To Continue</h1>
            <AppBar title="Confirm User Data" />
            <div className="m-3"><List>
              <ListItem>
                <ListItemText primary="First Nme" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Birth date" secondary={Birth } />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="height" secondary={height} />
              </ListItem>
              <hr style={{width:"100%",backgroundColor:"black",height:"6px"}}></hr>
              <ListItem>
              <Imageupload/>
              </ListItem>
            </List>
            <br />

            <Button
            className="m-4"
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button></div>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
