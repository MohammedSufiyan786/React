
import React, { useState } from "react";
import { useEffect } from "react";


const GetApi = () => {

  const [data,setData]=useState("");

  useEffect ( () => {
    Test();
  },[]) 
  
   console.log(data);
  const Test = async (event) => {
    console.log("called")
    const url = "https://reqres.in/api/users?page=2";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

        },
      });
console.log(response);
      if (response) {
        setData(response)
        // alert("Form submitted successfully");
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("An error occurred while submitting the form");
    }
  };

  return (
    <>
      {/* <div className="main_div">
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

            <button type="submit">Submit Me 👍</button>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default GetApi;




