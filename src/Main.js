import React, { useState } from 'react'
import Child from './Child'

export default function Main() {
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(20)
    const [mount,setMount]= useState(true)

    
/* useEffect(()=>{
     console.log("render...")
    return ()=>{
        console.log("unmounting")
    }

 },[])  */

   
    return (
        <div>
          <h1>Use Effect</h1> 
    <p>Count :{count}</p> 
    <button onClick={()=>setCount(count+1)}>click</button>
    <p>Age :{age}</p>
    <button onClick={()=>setAge(age+1)}>click</button>

{mount? <Child />: null}
<button onClick={()=>setMount(!mount)}>Mount/Unmount</button>
        </div>
    )
}
