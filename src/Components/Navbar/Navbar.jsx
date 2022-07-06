import React, {useState} from "react";

import "./Navbar.scss"
import logoSrc from "./homeatT.png"


const Navbar=(props)=>{
    
    const [currTab,changecurrTab]=useState("Rent");
    
    const handleClick=(e)=>{
        const name=e.target.name;
        changecurrTab(name);
    }   

    return (

      <div className="Navbar">

           {/* Logo Section */}
            <div className="logo">
                <img src={logoSrc} alt="LOGO" />
                <span> HomeAt.com</span>
            </div>
           
           {/* Important Buttons */}    
           <div className="Tabs">

                <button name="Buy"
                        className={currTab==="Buy"?"activeBtn":""}
                        onClick={handleClick}>
                        Buy
                </button>
                <button name="Sell"
                        className={currTab==="Sell"?"activeBtn":""}
                        onClick={handleClick}>
                        Sell
                </button>
                <button name="Rent"
                        className={currTab==="Rent"?"activeBtn":""}
                        onClick={handleClick}>
                        Rent
                </button>
                <button name="Agents"
                        className={currTab==="Agents"?"activeBtn":""}
                        onClick={handleClick}>
                        Find Agents
                </button>
                <button name="Manage"
                        className={currTab==="Manage"?"activeBtn":""}
                        onClick={handleClick}>
                        Manage
                </button>

           </div>

           {/* Login SignUp */}
           <div className="authButtons">
               <button className="login">
                       Login
               </button>
               <button className="signUp">
                       SignUp
               </button>
           </div>

      </div>
    )
}

export default Navbar;