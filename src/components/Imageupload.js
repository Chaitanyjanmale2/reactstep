import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
const Imageupload=()=>{
    
  /*   const imgInp = evt => {
       let imgs= document.getElementById("imgs")
      
let [file] = imgs.files
if (file) {
let blah= document.getElementById("blah")
blah.src = URL.createObjectURL(file)
console.log(blah.src)
}
}  */
const previewd=(event)=>{
    let frame=document.getElementById("frame")
   
    frame.src=URL.createObjectURL(event.target.files[0]) 
    console.log(frame.src)
}
return(
    <div>
        <form>
            <input type="file" className="w-45  " onChange={(event)=>previewd(event)}/>
            <img id="frame" className="mr-5 rounded-circle" alt="" src="https://tse4.mm.bing.net/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&pid=Api&P=0&w=300&h=300" width="100" height="100"/>
        </form>
    </div>
/* <div>

<form runat="server">  <input accept="image/*" type='file' id="imgs" onChange={(evt)=>imgInp(evt)} />
<img   id="blah" src="#" height="50" width="50" alt="c" />
</form>
</div>
 */ )
}
export default  Imageupload