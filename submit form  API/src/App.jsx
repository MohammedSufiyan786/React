import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostApi from "./PostApi";
// import GetApi from "./GetApi";
import Listing from "./Listing";
// import Edit from "./Edit";

const App = () => {
return(
    <>   
    
     {/* <GetApi/>
 <Listing/> */}

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<PostApi/>} />
       <Route path="/listing" element={<Listing />} />
        {/* <Route path='/Edit/:id' component={Edit}/> */}
      </Routes>
    </BrowserRouter>

    </>

)
};

export default App;




