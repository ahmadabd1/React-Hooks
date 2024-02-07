import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css'
export default function EX2() {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        });
    }, []);

//small - Screen .
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600)
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);



  return (
    <div className='cards' style={{ display: 'flex' , flexWrap: isSmallScreen ? 'wrap' : 'nowrap' }}>
        {posts
        .map((post) => (
        <div key={post.id} className='card'>
            <h2>{post.title}</h2> 
            <p>{post.body}</p> 
        </div>
      ))}</div>
  )
}
