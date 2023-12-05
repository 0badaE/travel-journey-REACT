import React from 'react';
import ReactDOM from 'react-dom/client';
import data from "./data"
import Navbar from "./components/navbar"
import Cards from "./components/cards"
     
function App() {
  const cards = data.map((item) => {
   return ( 
     <Cards 
      key = {item.id}
      {...item}
      />
    )
  })
   
  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 