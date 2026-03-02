import { useEffect, useState } from "react";

// useState → data store karne ke liye
// useEffect → side effect ke liye (API call, fetch, etc.)



  function useCurrencyinfo(currency){ // custom hook
    const [data,setData] = useState({})
  useEffect(() => {
  
 // fetching data 
 fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
    `)




    .then((res) => res.json()) //usko js object bana deta hai  kyuki server se raw response  ata h 
    .then((res) => setData(res[currency]))
    console.log(data);
}, [currency])
   console.log(data);
   return data;
  }
export default useCurrencyinfo;



// Why console.log shows empty object first?
// Answer:
// Because state updates in React are asynchronous, so logging immediately after setState gives old state.


