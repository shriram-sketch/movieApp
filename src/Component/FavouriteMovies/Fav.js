import React from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import swal from 'sweetalert';
import {Remove} from '../../assets/Features/slice'
function Fav({movies}) {
    let dispatch=useDispatch()

  return (
    <div className='movie-item1'>
{movies.map((item)=>{
          return(
            <>
     
    <div className="movie-item br-rd">
      <div className="coba">
        <div className="real_content">
          <div className="img_box">
          <Link to={"/detail/"+item.id}>
            <img className="br-rd" src={item.imageUrl} width=""/>
            </Link>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.releaseDate}</p>
            <h3>Rank{item.rank}</h3>
            <button onClick={()=>{console.log(dispatch(Remove(item.id)));}}>Remove from favourite</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
          )
          }) }
    </div>
  )
}

export default Fav