import React, { useEffect,useState,useMemo } from 'react'
import Movie from '../Movie';
import { useSelector } from 'react-redux';
function FilteredMovies({props,title}) {
    const arr=[];
    const year=JSON.parse(sessionStorage.getItem("Year"));
    const genres = JSON.parse(sessionStorage.getItem("Genres"))||[];
    const Genres_ascii=JSON.parse(sessionStorage.getItem("Genres_ascii"));
    const [state,setState]=useState()
    const int=parseInt(year);
   useEffect(()=>{
    console.log("reply");
    console.log(int);
    props.filter((item)=>{
      // console.log(item);
     if(item.genres===genres && item.releaseDate===int){
            // console.log(item);
            arr.push(item);
            console.log(arr);
            setState(<Movie props={arr}/>)
            console.log(item.releaseDate);
          }
          
    },)
    if(arr.length===0){
      setState(<div className='margin' style={{display:"flex",justifyContent:"center",marginLeft:"100vh",marginTop:"10vh",width:"10pc"}}>No Results Found</div>)
    }
   },[int,Genres_ascii])
   
  //  useEffect(()=>{

  //   console.log("hi")
  //  },[asci])
        // arr.push({Year:year,Genres:genres})
        // console.log(arr);
      
     
    
 

  return (
    <div className='filter3'>
      {state}</div>
  )
}

export default FilteredMovies