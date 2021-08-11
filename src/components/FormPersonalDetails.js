import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css'
export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div  >
                 <MuiThemeProvider>
                   <>
                    <Dialog className="bg-dark"   open   fullWidth   maxWidth='sm'>
                       <h1 className="text-center p-3  text-primary">Create Profile To Continue</h1>
                         <AppBar   title="Enter Personal Details" />
                         <div className="m-5"> 
                                    <TextField
                                    
                                    placeholder="Enter Your Occupation"
                                    label="Occupation"
                                    onChange={handleChange('occupation')}
                                    defaultValue={values.occupation}
                                    margin="normal"
                                    fullWidth
                                     />
                                 <br />
                                    <TextField
                                      placeholder="Enter Your City"
                                      label="City"
                                      onChange={handleChange('city')}
                                      defaultValue={values.city}
                                      margin="normal"
                                      fullWidth
                                     />
                                  <br />
                                     <TextField
                                       placeholder="Enter Your height"
                                       label="Height"
                                       onChange={handleChange('height')}
                                       defaultValue={values.height}
                                       margin="normal"
                                       fullWidth
                                     />         
                                  <br />
                                        <div className="m-4 "> 
                                                        <Button
                                                            className=""
                                                             color="secondary"
                                                             variant="contained"
                                                             onClick={this.back}
                                                           >Back</Button>
                                 
                                                         <Button
                                                            className="m-2"
                                                           color="primary"
                                                           variant="contained"
                                                           onClick={this.continue}
                                                         >Continue</Button>
                                         </div>
                          </div>
                     </Dialog>
                  </>
                 </MuiThemeProvider>
      
    </div>
      
      
    );
  }
}

export default FormPersonalDetails;
