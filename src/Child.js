import React, { useEffect, useState } from 'react'

export default function Child() {

    const [date,setDate]= useState(new Date())
   useEffect(()=>{
       console.log("componentDidMount")
       let interval= setInterval(()=>{
           console.log("Timer running")
        setDate(new Date())
       },1000)
       return ()=>{
           console.log("componentWillUnmount")
           clearInterval(interval)
       }

   },[])

    return (
        <div>
            <h1>Child Component</h1>
    <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}
