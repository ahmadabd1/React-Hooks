import React from 'react'
import { useState,useEffect } from 'react';

export default function Ex1() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(()=>{
    setInterval(()=>{
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate( hours + ' : '+ min + ' : '+ sec);
    },1000)
  }, []);
  return (
    <div>{currentDate}</div>
  )
}
