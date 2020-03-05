
import React,{useState} from 'react';

function App() {
  /* const [obj, setObj]=useState({name:"naqvi",age:34}) */
  const [items,addItem]= useState(["item1","item2","items"])
  const [name,setName]= useState("naqvi")
  const [age,setAge]=useState(34)
  const [userInput,setInput] = useState("")

 /*  const changename=()=>{
    setObj((prevState)=>{
      return {...prevState, name:"ali"}
    })
  } */

  const addnewItem=(value)=>{
    addItem((prevState)=>{
      return ( 
        [...prevState,value ]
      )
    })
      setInput("")
  }
  const gettingInput=(e)=>{
    setInput(e.target.value)
  }


  return (
    <div className="App">
      <h1>React Hooks</h1>
  <h2>{name}</h2>
  <h2>{age}</h2>
  <ul>
    {items.map(item=>{
      return( <li key={item}> {item}</li>)
    })
  }
  </ul>
  <input type="text" value={userInput} onChange={gettingInput}/>
{/*   <button onClick={changename}>Change obj</button> */}
  <button onClick={()=>setName("Ali")}>change name only</button>
  <button onClick={()=>setAge(age+1)}>change age only</button>
  <button onClick={()=>addnewItem(userInput)} >Add item</button>
    </div>
  );
}


export default App;