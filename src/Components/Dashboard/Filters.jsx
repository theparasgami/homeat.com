import React, { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";

import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./filters.scss"
import { applyFilter } from "../../features/Filters/filterSlice";

const convertDatetoString=(date)=>{
    if(!date)return "01/01/2025";
    const Date=`${(date.getUTCMonth()+1)<10?'0':''}${(date.getUTCMonth()+1)}/${(date.getUTCDate()+1)<10?'0':''}${date.getUTCDate()+1}/${date.getUTCFullYear()}`;
    return Date;
}

const Filters=(props)=>{
    
    const filters=useSelector((store)=>store.filters);
    const [movingDate, setMovingDate] = useState(null);
    const [minPrice,setminPrice]=useState(0);
    const [propertyType,setpropertyType]=useState('all');
    
    const dispatch=useDispatch();
    const SearchforFilters=()=>{
         
          let maxPrice=0;
          if(minPrice===0||minPrice===3000)maxPrice=10000;
          else maxPrice=minPrice+500;
          
          dispatch(applyFilter(
            {...filters,
                movingDate:convertDatetoString(movingDate),
                minPrice,
                maxPrice:maxPrice,
                propertyType
            }
          ));

          props.triggerFilter();
    }
   
    return (
    <div className="filters">

         <FilterListIcon className="filterIcon" />
         
         <div className="movingDate">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select Move-in Date"
                        value={movingDate}
                        minDate={new Date()}
                        onChange={(date)=>setMovingDate(date)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
         </div>

         <div className="priceRange">
            <FormControl sx={{minWidth: 310 }}>
                <InputLabel>
                   Select Price Range
                </InputLabel>
                <Select
                    sx={{height:66}}
                    label="Select Price Range"
                    value={minPrice}
                    onChange={(e)=>setminPrice(e.target.value)}
                >
                    <MenuItem value={0}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={500}>$ 500 - $ 1000</MenuItem>
                    <MenuItem value={1000}>$ 1000 - $ 1500</MenuItem>
                    <MenuItem value={1500}>$ 1500 - $ 2000</MenuItem>
                    <MenuItem value={2000}>$ 2500 - $ 3000</MenuItem>
                    <MenuItem value={3000}>$ 3000 - inf</MenuItem>
                </Select>    
            </FormControl>
         </div>

         <div className="propertyType">
            <FormControl sx={{minWidth: 310 }}>
                <InputLabel>
                   Select Property Type
                </InputLabel>
                <Select
                    sx={{height:66}}
                    label="Select Property Type"
                    value={propertyType}
                    onChange={(e)=>setpropertyType(e.target.value)}
                >
                    <MenuItem value="all">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"house"}>House</MenuItem>
                    <MenuItem value={"hotel"}>Hotel</MenuItem>
                    <MenuItem value={"office"}>Office</MenuItem>
                </Select>      
            </FormControl>
         </div>

         <button className="search"
                 onClick={SearchforFilters}>
             Search
         </button>
        
    </div>)

}

export default Filters;