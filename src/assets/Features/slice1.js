import { createSlice } from '@reduxjs/toolkit';
export const initialState={
    notes:[]
  }
  
  const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      addNote: (state, action) => {
        state.notes.push(action.payload)
      }
    }
  })
  export const { addNote} = notesSlice.actions;
  export default notesSlice.reducer;