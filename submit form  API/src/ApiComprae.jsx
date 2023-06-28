1.const Test = async (event) => {                                 
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
  };                                                                          };






















 2. const fetchData = async () => {
    try {
      const response = await fetch("https://www.melivecode.com/api/users");

      // https://melivecode.com/
      // USERS  ki 1st API use ki

      if (response.ok) {
        const data = await response.json();
        setUsers(data); // Update the state with the received data
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



const onSubmit=async(event)=>{
const url="";

try{
const response=await fetch(url,{
method:"POST",
headers:{
  "Content-type":"application/json",
},
body:JSON.stringify(Credential),

});
if (response.ok){
  setdata(response),
  alert("form submitted")
}
else {
 alert("form submittion failed");
}


}

catch (error){
console.log("Error:",error);
alert("form submission failed")
}

};
