// https://melivecode.com/

// USer Authorization me 1st vaala demo kiAPI li he


// "username": "karn.yong@melivecode.com",
//   "password": "melivecode",


// inputEvent : Jab bhi likhte he tab likha hua DATA input event se aata he  (Name&Value)
// onSubmits : Puri process onSubmit me hi he : URL ka wait karega aur POST hoga
// credentials: jo vlaue dalenge usko string me convert karega

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const PostApi = () => {
  const navigate = useNavigate();
  //const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data,setData]=useState("");
  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    
    }));

  };

  console.log(credentials);
  console.log(data);
  const onSubmits = async (event) => {                             
    event.preventDefault();

    const url = "https://www.melivecode.com/api/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        
      });

      if (response.ok) {
        setData(response)
        alert("Form submitted successfully");
        navigate("/listing")
        // history.push("/listing", credentials); 
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }

  
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={inputEvent}
            //   value={credentials.username}
            />

            <br />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputEvent}
            //   value={credentials.password}
            />

            <button type="submit"  >Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostApi;


// import React, { useState } from "react";
// const PostApi=()=>{
// const [credentials,setCredentials]=useState({
//   fname: "",
//   lname:"",
//   username: "",
//   password:"",
//   email: "",
//   avatar:"",
// });

// const [data,setData]=useState("");
// const inputEvent=(event)=>{
// const value=event.target.value;
// const name=event.target.name;

// setCredentials((prevCredentials)=>({
// ...prevCredentials,
// [name]: value,


// }));
// };



// const onSubmits=async (event)=>{
// event.preventDefault();
// const url="https://www.melivecode.com/api/users/create";

// try{
// const response=await fetch(url,{
// method:"POST",
// headers:{
//   "Content-Type": "application/json",
// },
// body:JSON.stringify(credentials),
// });

// if (response.ok){
//   setData(response);
//   alert("Form Submission successfully");
// }else{
//   alert("Form Submision failed");
// }
// }catch (error){
//   console.error("Error:", error);
//   alert("An error occured while submitting the form");
// }
// };

// return(
// <>
// <div className="main_div">
// <form onSubmit={onSubmits}>
// <div>
// <input 
// type="text" 
// placeholder="fname"
// name="fname"
// onChange={inputEvent}
// />

// <br/>

// <input 
// type="text"
// placeholder="lname"
// name="lname"
// onChange={inputEvent}
// />

// <br/>

// <input 
// type="text"
// placeholder="username"
// name="username"
// onChange={inputEvent}
// />

// <br/>

// <input 
// type="text"
// placeholder="password"
// name="password"
// onChange={inputEvent}
// />


// <br/>

// <input 
// type="text"
// placeholder="email"
// name="email"
// onChange={inputEvent}
// />

// <br/>

// <input 
// type="text"
// placeholder="avatar"
// name="avatar"
// onChange={inputEvent}
// />


// <button type="submit">Submit Me 👍</button>


// </div>
// </form>

// </div>
// </>
// );
// };

// export default PostApi;
