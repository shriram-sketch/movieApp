import { createSlice } from '@reduxjs/toolkit';
export const fav1=[]
export const initialState={
    fav:[]
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.fav.push(action.payload);
    },
    displ: (state, action) => {
      state.fav.push(action.payload);
    },
    Remove:(state,action)=>{
      const updatedItems = state.fav.filter(
        (item) => item.id !== action.payload
      );
      return { ...state.fav, fav: updatedItems };
    },
   
  },
});

export const { addMovie, displ,Remove} = moviesSlice.actions;


export default moviesSlice.reducer;

