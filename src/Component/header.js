
import React, { useState  } from 'react';
import '../App.css';
import MenuApp from './inc/menu';


export default function HeaderApp() {
  const[current,setcurrent] = useState(0)
 const handelmenu=(e)=>{
       setcurrent(e.key);
  }
  return (
    <header className="header">
        <div className="logo" >
             <img 
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
             />
    </div>
  
     
     <div className="Titel-left">
            <h3>هر چیزی که شما نیاز دارید اینجاست!!</h3>
     </div>
     <MenuApp/>
 <button className="login-singup-btn">
   <h4>ورود/عضویت</h4>
 </button>
    </header>
  );
}


