import React from "react";
import Lottie from "lottie-react"

import mainData from "./99232-real-estate.json"; 
import loadingData from "./98635-loading.json";

function LottieLoading()
{
    return (
       <div style={{
           marginTop:"3rem"
       }}>
            <Lottie  loop={true} 
                     animationData={loadingData} 
                     style={{height:300,width:300,margin:"auto"} }
            />
       </div>
    )
}
export {LottieLoading};

function LottieMain()
{
    return (
       <div style={{
            marginTop:"10%"
       }}>
            <Lottie  loop={true}
                     animationData={mainData} 
                     style={{height:300,width:300,margin:"auto"}} 
            />
            <div style={{
                fontSize: "8rem",
                textAlign:"center",
                fontFamily:" 'Smooch', cursive", 
                color: "rgb(53, 54, 5)"
            }}>
                HomeAt.com
            </div>
            <div  style={{
                  fontSize:"1.4rem",
                  textAlign:"center",
                  fontFamily:"sans-serif",
                  color:"#786464"
            }}>
                Buy property, Rent property, sell Property, Find Agents and much more...
            </div>
       </div>
    )    
}
export {LottieMain};


