import React, { useState, useEffect } from 'react'
import './App.css';
import { NewsContextProvider } from "./NewsContext";

import Main from './Main';



function App() {

   
  
  
  return (
    <NewsContextProvider>
      <Main/>
    </NewsContextProvider>
  );
}

export default App;
