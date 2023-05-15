
import React from 'react';
import Home from './Component/Home_Page/Home';
import Filter from './Component/AddFilter_Page/Filter';
import Fav from './Component/FavouriteMovies/Favourite';
import { Route, BrowserRouter,Routes} from 'react-router-dom';
import Detail from './Component/DetailsPage/Details'

function App() {
  return (
    
    <div className="App"> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/detail/:id" element={<Detail />}></Route>
      <Route path="/Filter_Movies" element={<Filter />}></Route>
      <Route path="/Favourite_Movie" element={<Fav />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );

  }
export default App;
