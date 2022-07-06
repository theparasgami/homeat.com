import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cityName:"all",
    movingDate:"01/01/2025",
    minPrice:0,
    maxPrice:100000,
    propertyType:"all"
}

const filterSlice=createSlice({
    name:"filters",
    initialState,
    reducers:{
        applyFilter:(state,{ payload })=>{
                state.cityName    = payload.cityName;
                state.movingDate  = payload.movingDate;
                state.minPrice    = payload.minPrice;
                state.maxPrice    = payload.maxPrice;
                state.propertyType= payload.propertyType;
        },  
    },
});

export const {applyFilter} = filterSlice.actions;
export default filterSlice.reducer;