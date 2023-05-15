import React, { useEffect, useRef, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Movie from '../Movie';

import { useDispatch,useSelector } from 'react-redux';
function Order({props}) {
  const dispatch=useDispatch();

  
  const movies1 = useSelector(state => state.movies.fav);
  console.log(movies1);
  let movies
  console.log(movies);
    const inpref=useRef("")
    const [movie,setmovie]=useState()
    let arr=[]
    let order = {};
    let data=[];
   
    const [state,setState]=useState()
    const [val,setval]=useState("")
    const [selectedOption, setSelectedOption] = useState("");
    
   
    function change(){
      if(inpref.current.value==="all"){
          sessionStorage.setItem("category",JSON.stringify(inpref.current.value))
          setSelectedOption(inpref.current.value)
        props.items.map((item)=>{
          arr.push(item.releaseDate)
        })
        

        let arr1=arr.sort((a, b) => a - b);
          arr1.forEach(function (a, i) { order[a] = i; });
        movies=props.items.sort(function (a, b) {
              return order[a.releaseDate] - order[b.releaseDate];
          });
          localStorage.setItem("current_obj",JSON.stringify(movies))
          setState(<><Movie head="All Movie List" props={movies}/></>)
      }
        console.log(inpref.current.value);
if(inpref.current.value==="ReleaseDate"){
  
  sessionStorage.setItem("category",JSON.stringify(inpref.current.value))
  setSelectedOption(inpref.current.value)
props.items.map((item)=>{
  arr.push(item.releaseDate)
})
let arr1=arr.sort((a, b) => a - b);
  arr1.forEach(function (a, i) { order[a] = i; });
movies=props.items.sort(function (a, b) {
      return order[a.releaseDate] - order[b.releaseDate];
  });

 

  setState(<Movie head="Top 5 Release Date Movies" props={movies.slice(0,5)}/>)
  localStorage.setItem("current_obj",JSON.stringify(movies.slice(0,5)))
}
if(inpref.current.value==="Rank"){
  sessionStorage.setItem("category",JSON.stringify(inpref.current.value))
  setSelectedOption(inpref.current.value)
  props.items.map((item)=>{
    arr.push(item.rank)
  })

  
  let ar=arr.sort((a, b) => a - b);
  if(ar.length!==0){
    ar.forEach(function (a, i) { order[a] = i; });
  movies=props.items.sort(function (a, b) {
        return order[a.rank] - order[b.rank];
    });
  }setState(<><Movie  props={movies.slice(0,5)}/></>)
  console.log(movies);
  localStorage.setItem("current_obj",JSON.stringify(movies.slice(0,5)))
  }
  let inp=[]
 
  
}

    const navigate = useNavigate();

  function handleClick() {
    navigate('/Filter_Movies');
  }
let inp=[]
 function handle(val){
setval(val);
console.log(val);
if(val.length!==0){
  props.items.map((ite)=>{
    if(String(ite.rank)===val){
      inp.push(ite)
      setState(<Movie props={inp}/>)
    }
    if(inp.length===0){
      setState(<>No results found</>)
    }
  })
  
    }
    console.log(movies);
    
 }
 let count;
 let [favcou,setfavcou]=useState()
 useEffect(()=>{
  setmovie(JSON.parse(sessionStorage.getItem("fav_Count")))
  let str=JSON.parse(sessionStorage.getItem("category"))||[];
  let count=JSON.parse(sessionStorage.getItem("fav_Count"))||[]
  setfavcou(count)
  setSelectedOption(str);
  
  let obj=JSON.parse(localStorage.getItem("current_obj"))||[]
  console.log(obj);
setState(<><Movie props={obj}/></>)
 },[])
  return (






    <div className='Filter'>

<>
        
       







<div className='Filter1' style={{backgroundColor:"black",display:"flex",flexDirection:"row",position:"fixed",height:"200vh"}}>
        <nav style={{position:""}}>
      <div className='Filter1' style={{color:'white'}} >
        TOP MOVIES WATCHOUT
      </div>

      <div className="nav-brand" style={{backgroundColor:"black",display:"flex",justifyContent:"center",padding:"20px"}}>
   <button onClick={handleClick} style={{padding:"10px"}}>Add Filter</button>



      </div>
      <div className="nav-brand" style={{display:"flex",justifyContent:"center",padding:"20px"}}>
      <select value={selectedOption}  ref={inpref} onChange={change} style={{padding:"10px"}}><option value="Please Select To watch Movie_List" style={{display:"flex",justifyContent:"center",padding:"20px"}}>Please Select To watch Movie_List</option><option value="all">All Movie List</option><option value="ReleaseDate">ReleaseDate</option><option value="Rank" >Rank</option></select>
      </div>
      <div className="nav-brand"style={{display:"flex",justifyContent:"center",padding:"10px"}}>
      <input onChange={(e)=>{handle(e.target.value)}} type="text" placeholder='Search by your rank'/>
      </div>
      <div className="nav-brand1"></div>

    </nav>
    
    </div>
        
        </>


      {state}
    </div>

  )
}

export default Order