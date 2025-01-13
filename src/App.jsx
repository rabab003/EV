import React, { useEffect, useState } from 'react';
import Background from './Components/Background/Background';
import Nav from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let herDate = [
    {text1: "Dive into", text2 :"what you love"},
    {text1: "indulge", text2 :"your passions"},
    {text1: "give it in ", text2 :"  your passions"},

  ]
  const [heroCount, setHeroCount]= useState(0);
  const [playStatus, setPlayStatus]= useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count ===2?0:count+1})
    }, 3000);
  },[])



  return (
    <div>
      <Background playState={playStatus} heroCount={heroCount}/>
      <Nav/>
      <Hero setPlayStatus={setPlayStatus} 
      herDate={herDate[heroCount]} 
      heroCount={heroCount} 
      setHeroCount={setHeroCount} 
      playStatus={playStatus} />

      
    </div>
  )
}

export default App
