import React, { useEffect } from 'react'
import Data from '../../assets/Data/top5MoviesAssessement.json';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Filter from '../Home_Page/order-select';
import { useSelector,useDispatch } from 'react-redux';
import { addMovie } from '../../assets/Features/slice';
import Fav from './Fav';
function Home() {
  const dispatch=useDispatch()
  const movies = useSelector(state => state.movies.fav);
  const [movie,setMovie]=useState()
  let movie1=[];
  useEffect(()=>{
setMovie(movies);
console.log(movie);
  },[movies.length])
  let [fav,addfav]=useState(true);
  let arr=[];
  let order={}
  movies.map((item)=>{
    arr.push(item.rank)
  })

  
  let ar=arr.sort((a, b) => a - b);

    ar.forEach(function (a, i) { order[a] = i; });
    console.log(movies);
   movie1=[...movies];

    console.log(movie1);
    movie1=movie1.sort(function (a, b) {
          return order[a.rank] - order[b.rank];
      });
  
 
  console.log(ar);
  useEffect(()=>{
    
addfav(<Fav movies={movie1}/>)
  },[movies.length])
  return (
<div> Your's  Favorite Movies{fav}
    </div>
  )
}

export default Home