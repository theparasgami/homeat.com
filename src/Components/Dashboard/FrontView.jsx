import React , {useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import imgSrc from "./RentPic.jpg"
import "./frontView.scss"
import { applyFilter } from "../../features/Filters/filterSlice";

const FrontView=(props)=>{

    const [country,setCountry]=useState('');
    const [City,setCity] =useState("all");
    const [cities,setCitites]=useState([]);

    const filters=useSelector(state=>state.filters);
    
    const handleCountryChange=(e)=>{
          
        e.preventDefault();
        let currName=e.target.value;
        setCountry(e.target.value);
        currName=currName.toLowerCase();
        
        if(currName==="us"){
            setCitites(["California"]);
        }else if(currName==="uk"){
            setCitites(["London","Manchestar"]);
        }else if(currName==="india"){
            setCitites(["Mumbai","Bengaluru","Delhi"]);
        }else{
            setCitites([]);
        }
    }
    
    const dispatch=useDispatch();
    const SearchCity=()=>{

         dispatch(applyFilter({...filters,cityName:City}));
         props.triggerFilter();
         
    }

    return (
   
     <div className="ImageSection">
        
        <img src={imgSrc} alt="good" />
        
        <div className="heading" >
            Let's Find a Home that's perfect for you. 
        </div>
        <div className="subHead">
            With the most complete source of homes for Rent & real estate near you
        </div>
        
        <div className="filterLocation">

            <input type="text" 
                   className="inputLocation" 
                   placeholder="Country-(US,UK,India)"
                   value={country}
                   onChange={handleCountryChange}
            />
            <select className="selectCity" 
                    onChange={(e)=>setCity(e.target.value)}
                    value={City}
             >
                        <option value="all"> Select City </option>
                        {
                            cities.map((city,ind)=>
                                <option value={city} key={ind}>
                                {city}
                                </option>
                            )
                        }
            </select>
            <button className="findLocation"
                    onClick={SearchCity}>
                   Search
            </button>

        </div>

     </div>
    )
}

export default FrontView;