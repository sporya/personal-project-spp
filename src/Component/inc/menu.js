import React, { useState  } from 'react';
import '../../App.css';



export default function MenuApp() {
    const[current,setcurrent] = useState(0)
   const handleClick =(e)=>{
         setcurrent(e.key);
    }
    return (
     <div className="menu">
         <nav>
                 <ul>
                      <li><a href="#">درباره من</a></li>
                      <li><a href="#">نیازمندی های شما</a>
                         <ul>
                             <li><a href="#">مدیریت کارها</a></li>
                             <li><a href="#">تقویم</a></li>
                             <li><a href="#">آرامش</a>
                        
                      </li>
             </ul>
                    </li>
        <li><a href="#">مقالات من</a>
            <ul>
                <li><a href="#">طراحی سات</a></li>
                <li><a href="#">کد نویسی</a></li>
            </ul>
        </li>
        <li><a href="#">خانه</a></li>
    </ul>
</nav>
     </div> 
    );
  }
  