import React, { useState, useEffect } from 'react'
import Child from './Child'

export default function Main() {
/*     const [count,setCount] = useState(0)
    const [age,setAge] = useState(20)*/
    const [mount,setMount]= useState(true) 

    const [data,setData]= useState([])
    useEffect(()=>{
      fetchData()
    },[])

   /*  function to fetch data from server */
    const fetchData=async()=>{
        console.log("fetching data")
    let serverData= await fetch("https://jsonplaceholder.typicode.com/posts")
    let convertedData= await serverData.json()
    setData(convertedData)
    }
    
/* useEffect(()=>{
     console.log("render...")
    return ()=>{
        console.log("unmounting")
    }

 },[])  */

   
    return (
        <div>
          <h1>Use Effect</h1> 
          {/*   <Child data={data}/> */}





    {/* <p>Count :{count}</p> 
    <button onClick={()=>setCount(count+1)}>click</button>
    <p>Age :{age}</p>
    <button onClick={()=>setAge(age+1)}>click</button>
*/}
{mount? <Child data={data}/>: null}
<button onClick={()=>setMount(!mount)}>Mount/Unmount</button> 
        </div>
    )
}
