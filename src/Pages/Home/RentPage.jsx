import React, { useEffect, useState } from "react";
import {  useSelector } from 'react-redux';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Navbar from "../../Components/Navbar/Navbar";
import FrontView from "../../Components/Dashboard/FrontView";
import Filters from "../../Components/Dashboard/Filters"
import PropertyCard from "../../Components/Cards/PropertyCard";
import {LottieLoading} from "../../Components/Constants/Lottie/Lottie";
import DummyData from "../../DummyData.json";
import Footer from "../../Components/Footer/Footer";


const compareTwoDate=(d1,d2)=>{
   
    if(d2.substring(6)>d1.substring(6))return true;
    if(d2.substring(6)<d1.substring(6))return false;
    
    if(parseInt(d2.substring(0,2))>parseInt(d1.substring(0,2)))return true;
    if(parseInt(d2.substring(0,2))<parseInt(d1.substring(0,2)))return false;
    
    if(parseInt(d2.substring(3,5))>parseInt(d1.substring(3,5)))return true;
    if(parseInt(d2.substring(3,5))<parseInt(d1.substring(3,5)))return false;

    return true;
}


const Dashboard=()=>{
     
    const filters=useSelector(store=>store.filters);
    const [allHomes,setallHomes]=useState([]);
    const [loading,setloading]=useState(false);

    const triggerFilter=()=>{
        setloading(()=>true);   
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }
    
    //for loading data on page change
    useEffect(()=>{
        setallHomes(()=>
                DummyData.filter((home) => {
                    
                    let flag = true;
                    if (filters.cityName !== 'all') {
                        flag &= (home.Address.city).toLowerCase() === (filters.cityName).toLowerCase();
                    }
                    if (filters.propertyType !== 'all') {
                        flag &= (home.propertyType).toLowerCase() === (filters.propertyType).toLowerCase();
                    }
                    flag &= home.rent >= filters.minPrice;
                    flag &= home.rent <= filters.maxPrice;
                    
                    flag &= compareTwoDate(home.availableFrom, filters.movingDate);

                    return flag;
                })
        );
    },[filters]);// eslint-disable-line react-hooks/exhaustive-deps
    
    //for loading data on page loading
    useEffect(()=>(triggerFilter()),[]);// eslint-disable-line react-hooks/exhaustive-deps
    

    return (
    <div className="dashboard">

         <Navbar/>
         <FrontView triggerFilter={triggerFilter}/>
         <Filters triggerFilter={triggerFilter}/>
         
         {loading?<LottieLoading/>:
            <div style={{
                    width: "75%",
                    margin: "auto",
                    display: "grid",
                    gridTemplateColumns: "auto auto auto"
            }}>

                {allHomes.map((Home,ind)=>
                                <div key={ind}>
                                        <PropertyCard Home={Home}/>
                                </div>
                            )
                }
                
            </div>
         }
         {
           !loading&&allHomes.length===0?
                        (<div style={{textAlign:"center",
                                      marginTop:"2rem",
                                      fontSize:"2rem"
                         }}>
                             <SentimentVeryDissatisfiedIcon style={{fontSize:"4rem"}}/>
                             <br/>
                             Sorry , No search Result
                         </div>):''
         }
        <Footer/>
    </div>)
}

export default Dashboard;