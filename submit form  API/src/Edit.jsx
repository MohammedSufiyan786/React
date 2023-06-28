import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const handleEdit =(id)=>{
return(
<form onSubmit={onSubmits}>
 <div>
 <input 
type="text" 
placeholder="fname"
name="fname"
onChange={inputEvent}
/>

<br/>

<input 
type="text"
placeholder="lname"
name="lname"
onChange={inputEvent}
/>

<br/>

<input 
type="text"
placeholder="username"
name="username"
onChange={inputEvent}
/>
<br/>

<button type="submit">Submit Me 👍</button>
</div>
</form>
);
}