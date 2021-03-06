import React from 'react'

export default function Child({data}) {

 /*    const [date,setDate]= useState(new Date()) */
   /* useEffect(()=>{
       console.log("componentDidMount")
       let interval= setInterval(()=>{
           console.log("Timer running")
        setDate(new Date())
       },1000)
       return ()=>{
           console.log("componentWillUnmount")
           clearInterval(interval)
       }

   },[]) */

    return (
        <div>
            <h1>Child Component</h1>
            <ul>
                {data.map(post=>{
                    return (
                    <li key={post.id}> {post.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}
