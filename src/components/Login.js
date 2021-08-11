import React from 'react';


import 'bootstrap/dist/css/bootstrap.css'
import history from '../history';
import "../style.css"

const Login = () => {
  const checkError=()=>{
      let email=document.forms["myform"]["email"].value;
      let password=document.forms["myform"]["password"].value;  /* checks empty fields and if no errors found then diverts user to profileform */
      if(email===""||password===""){
        alert("Empty Filed!!")

      }
      else{
          history.push("/profile") 
      
      }
  }
    
  return (
    
     <div>
          <div className="container bg-light p-5 text-dark mt-5  ">
   
                   <div className="row">
                      <div className>
                        <h1 className="text-center text-primary p-4">Welcome TO Your Happly Place</h1>
                        </div>
                       <div className=" col text-center">
                                   <form   name="myform" onSubmit={checkError}> 
            
                                          <div className="col"> 
                                                      <h2 className="pb-4 ">log in </h2>
                                                        <input className="mb-4 p-3 " type="text" name="email"  placeholder="Email"/><br></br>
                                                        <input className="mb-4 p-3"  type="text" name="password"   placeholder="Password" />
                                          </div>
                                          <div className="text-center  ">
                                                        < input type="submit" value="submit" className="btn  btn-primary"/>\
                                         </div>
                                        
                                   </form>
            
          
                        </div>
                    </div>
         
         
          </div> 
 </div>
    
    

  );
}

export default Login;