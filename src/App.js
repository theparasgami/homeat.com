import React, { useState } from 'react'

import { LottieMain } from './Components/Constants/Lottie/Lottie';
import Home from './Pages/Home/RentPage';

const App = ()=>{

  const [loading,setLoading]=useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3500);

  return (
      <>
          {loading?
             <LottieMain/>:
             <Home/>
          }
      </>
  );
}

export default App;
