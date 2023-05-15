import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../assets/Features/slice';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';
import swal from 'sweetalert'
function Movie({props,head}) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.fav);
  const [highlightedItemId, setHighlightedItemId] = useState(false);
  const [color, setColor] = useState("gray");
console.log(movies);
const [movie,setmovie]=useState()
const [IsShown,setIsShown]=useState()
useEffect(()=>{
setmovie(movies.length);
},[movies.length])
const [fav,addfav]=useState()
const [hoveredItemId, setHoveredItemId] = useState(false);

  return (
    <>
    <div className='movie_length'>      <Link to="/Favourite_Movie" style={{textDecoration:"none",color:"black"}}>
     <img width="40px"  src={"https://purepng.com/public/uploads/large/heart-icon-jst.png"}/>Favourite List:{movie}</Link></div>
    <div className='movie-item'>
       
      {
        
props.map((item)=>{
  const itemStyle = {
    backgroundColor: item.id === hoveredItemId ? 'red' : 'gray',
  };
  const handleClick = (des) => {
   

  };
  const handleItemMouseOver = (itemId,des) => {
    setHoveredItemId(itemId);
    swal({
      text: des,
      onOutsideClick: swal.close,
      
    })
  };
  const handleMouseLeave = () => {
    if (highlightedItemId) {
      swal.close();
      setHighlightedItemId(false);
    }
  };
return(
    <>
    <div className=''>
    
    <div className="movie-item br-rd">
    
      <div className="coba">
      
        <div className="real_content">
      
          <div className="img_box">
         
          <Link to={"/detail/"+item.id}>
            <img className="br-rd"  src={item.imageUrl} width=""   key={item.id}
        />
         </Link>
          </div>
        
          <div>
            <h3>{item.title}</h3>
            <div className='flex' style={{display:"flex",justifyContent:"center",flexDirection:"column",position:"relative",left:"100%",top:"-300px",width:"200px"}} > <button  onClick={() => handleItemMouseOver(item.id,item.synopsis)}style={{padding:"10px",margin:"10px"}}> See Description</button>
            <button id="" onClick={(e)=>{
              
              const movieExists = movies.some((movie1) => movie1.id === item.id);
              if (movieExists) {
                swal("This Movie Already in your Favourite List","", "error");
            }else{
              e.preventDefault(); 
              swal({
        
                title: "Are you sure?",
                text: "Add Movie to Your Favourite List",
                icon: "",
                buttons: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Movie added to your favourite List", {
                    icon: "success",
                  });
                
                  dispatch(addMovie(item));
                } 
              });
             
             
            }
          }}style={{padding:"10px"}}>Add to Favourite<FontAwesomeIcon icon={faHeart} 
          style={{ color: "red" }}/></button>
        <div className='flex' style={{display:"flex",flexDirection:"row"}}><p style={{padding:"25px"}}>Year:{item.releaseDate}</p>
        <h3 style={{padding:"20px"}}>Rank{item.rank}</h3></div></div>
       
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
)
}) 

      } 







{/* 
<>
        {
  //         props.map((movie, idx) => (
  //           <Container>
  //             <Row>
  //           <Col md="4" key={idx}>
  //             <Link to={"/detail/"+movie.id}><Card >
  //               <CardHeader>{movie.title}</CardHeader>
  //               <CardBody>
  //                 <p>Released Year : {movie.releaseDate}</p>
  //                 <p>IMDB ID : {movie.rank}</p>
  //                 <img src={movie.imageUrl}  width="40px" alt="Movie Poster" />
                  
  //               </CardBody>
  //             </Card>
  //             </Link>
  //             <button id="button" onClick={()=>{
  //     const movieExists = movies.some((movie1) => movie1.id === movie.id);
  //     if (movieExists) {
  //       console.log("err");
  //   }else{
  //     dispatch(addMovie(movie));
  //   }
  // }}>Add to Favourite</button>
  //           </Col>
  //           </Row>
  //           </Container>
  //         ))
  //         }
      </> */}


    </div>
</>
  )
}

export default Movie
