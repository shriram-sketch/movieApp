import React, { useEffect, useRef, useState } from 'react'
import Data from '../../assets/Data/top5MoviesAssessement.json'
import FilteredMovies from './FilteredMovies';
function filter() {
  return (
    <>
   { Data.components.map((item,key)=>{
     const [obj, setObj] = useState([]);
      if(item.type==="filters"){

    return(
      <>
      {item.items.map((itemss)=>{
        if(itemss.label==="Release Date"){
          const inpRef=useRef("");
          const [selectedOption, setSelectedOption] = useState("");
         useEffect(()=>{
          let str=JSON.parse(sessionStorage.getItem("Year"));
          setSelectedOption(str)
         })
          function handleClick1() {
            console.log(inpRef.current.value);
            obj.push(inpRef.current.value);
           setSelectedOption(inpRef.current.value)
            sessionStorage.setItem("Year",JSON.stringify(inpRef.current.value));

          }
    return(

      <>
      
           
      <div className='Filter1' style={{backgroundColor:"black",display:"flex",flexDirection:"row",position:"fixed",height:"100vh",width:"40vh"}}>
        <nav style={{position:""}}>

            
            <div className="nav-brand" style={{display:"flex",justifyContent:"center",padding:"10px",marginLeft:"15px",color:'wheat'}}>
           Choose 
           year <select value={selectedOption} ref={inpRef} onChange={handleClick1} style={{padding:"5px"}}>
            <option value="">...</option>
               {itemss.valueToFilter.map((item1,index)=> (
        <option value={item1}  >{item1}</option>
      ))}
</select></div>
</nav>
</div>
          

      </>
    )
        }
        if(itemss.label==="Genres"){
          const [state,setState]=useState(false)
          const inpRef=useRef("");
          const [selectedOption, setSelectedOption] = useState("");
         useEffect(()=>{
          let str=JSON.parse(sessionStorage.getItem("Genres"));
          setSelectedOption(str)
         })
          function handleClick1() {
            console.log(inpRef.current.value);
            obj.push(inpRef.current.value);
           setSelectedOption(inpRef.current.value)
            sessionStorage.setItem("Genres",JSON.stringify(inpRef.current.value));
            setState(!state);
            sessionStorage.setItem("Genres_ascii",JSON.stringify(state))

          }
    return(

      <>



<div className='Filter1' >
        <nav style={{position:""}}>

      <div className="nav-brand" style={{display:"flex",position:"fixed",justifyContent:"center",color:'wheat',padding:"20px",marginTop:"3pc",marginLeft:"15px"}}>
     Generes <select value={selectedOption} ref={inpRef} onChange={handleClick1}style={{padding:"5px"}}>
            <option value="">...</option>
               {itemss.valueToFilter.map((item1,index)=> (
        <option value={item1}  >{item1}</option>
      ))}
</select>
      </div>
      <div className="nav-brand"style={{display:"flex",justifyContent:"center",padding:"20px"}}>
      </div>
      

    </nav>
    
    </div>









      
           
            <div className='year_box'>
        
            
</div>
          

      </>
    )
        }
        
       })}
       
      </>
    )
    }
    if(item.type==="movie-list"){
      return(
        <><FilteredMovies obj={obj} props={item.items} /></>
      )
      
              }
    })}
  
    </>
   

  )
}

export default filter