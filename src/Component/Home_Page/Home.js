import React, { useEffect } from 'react'
import Data from '../../assets/Data/top5MoviesAssessement.json';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Filter from './order-select';
import { useSelector,useDispatch } from 'react-redux';
import { addMovie } from '../../assets/Features/slice';
import Fav from '../FavouriteMovies/Fav';
function Home() {
  const dispatch=useDispatch()
  const movies = useSelector(state => state.movies.fav);
  let [fav,addfav]=useState(true);
  const [dis,sedis]=useState()

  useEffect(()=>{
    console.log("reply");
    // console.log(int);
    // props.filter((item)=>{
    //   // console.log(item);
    //  if(item.genres===genres && item.releaseDate===int){
    //         // console.log(item);
    //         arr.push(item);
    //         console.log(arr);
    //         setState(<Movie props={arr}/>)
    //         console.log(item.releaseDate);
    //       }
          
    // },)
    

   },[])
  useEffect(()=>{
        Data.components.map((item,key)=>{
      if(item.type==="movie-list"){
    sedis(<Filter props={item}/>)
      }})
addfav(<Fav movies={movies}/>)
  },[movies.length])
  return (
    <div className='Page'>
{dis}
    </div>
  )
}

export default Home