import React ,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data.js";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";

function App() {
  const[courses,setCourses]=useState({});    
  const[loading,setLoading]=useState(true);

    async function fetchData(){
      setLoading(true);
      try {
        let response=await fetch(apiUrl);
        let output=await response.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("error in network");
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])
  
  return(
    <div>
      <div> <Navbar /></div>
      
    <div> <Filter filterData={filterData} /></div> 
   <div>
    {
      loading ? (<Spinner/>): (<Cards courses={courses}/>)
    }
   </div>
    </div>
  );
};

export default App;
