import { useState } from 'react'
import './App.css';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
import SearchBox from './SearchBox.jsx';

function App() {
  
  let handleClick = ()=>{
    console.log("Button was clicked");
  };

  return (
    <>
      {/* <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>Click me delete button !</Button>
      <Alert severity="error">This is an error alert</Alert> 
      <Button variant="contained" onClick={handleClick} color="success" size="small">Click me 2 !</Button> */}

      <SearchBox/>
    </>
  )
}

export default App
