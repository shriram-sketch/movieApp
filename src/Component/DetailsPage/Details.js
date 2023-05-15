import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../assets/Data/top5MoviesAssessement.json';
import  Swal from 'sweetalert2'
import  swal from 'sweetalert'
import { useSelector,useDispatch } from "react-redux";
import {addNote} from '../../assets/Features/slice1'
import {fav1} from '../../assets/Features/slice'
function Details() {
  const { id } = useParams();
  const [obj, setObj] = useState([]);
  const dispatch=useDispatch()
  // let comments=useSelector(state=>state.notes.notes);
  const notes = useSelector(state => state.notes.notes)
  // console.log(comments);
  
  function button1(){
    if(notes.length!==0){
      let prev=""
      Object.values(notes).filter((item,index)=>{
        
        console.log(parseInt(item.id)===parseInt(id));
    if(parseInt(item.id)===parseInt(id) && item.comments!==null){
      console.log(item);
      prev+=`${(item.comments)}<br>`;
      // const comm= `<li>${(item.comments).charAt(0).toUpperCase() + item.comments.slice(1)}</li>`.join("");
    }
      })
      Swal.fire({
        html:`${prev}`,
    })
    }
  }
 function button(){
  swal("Write your Comments:", {
    content: "input",
    closeOnClickOutside: true,
  })
  .then((value) => {
    dispatch(addNote({"id":id,"comments":value}));
    // setstate(!state);
    // userDetails.filter((users)=>{
    //   if(users.Email===Email){
    //   users.Phone=value;
    //   localStorage.setItem("Current_user",JSON.stringify({Username:name,Email:Email,Phone:value}));
    //   }
    
    //     }
    //     )   
  });
  

  console.log(notes);
    // setstate(!state);
    // userDetails.filter((users)=>{
    //   if(users.Email===Email){
    //   users.Phone=value;
    //   localStorage.setItem("Current_user",JSON.stringify({Username:name,Email:Email,Phone:value}));
    //   }
    
        // }
        // )   
 
 }
  console.log(obj);
    return (
    <>
{
     data.components.map((item,key)=>{
      if(item.type==="movie-list"){
return(<>
   {item.items.map((mov)=>{
   
  // return(<>
     {
      if(parseInt(mov.id)===parseInt(id)){
        return(
          <>
          <div>
    <div>
    <div className="de">
      <div className="ce">
        <h1 className="title">{mov.title}</h1>
        <img className="imge" src={mov.imageUrl}  width="30%" />
        
      </div>
      <div className="re">
        {" "}
        <button onClick={button} style={{padding:"10px",margin:"10px"}}>Add Comment</button><button onClick={button1} style={{padding:"10px",margin:"10px"}}>View Comments</button>
        <p>Rank:{mov.rank}</p>
        <p>{mov.synopsis}</p>
        <p>ReleaseDate:{mov.releaseDate}</p>
       
      </div>
    </div>
  </div>
    </div>{" "}
          </>
        )
         }
     }   

           
         }
         )}</>)
         
 }})
}




      
    </>
  );
}
export default Details;
