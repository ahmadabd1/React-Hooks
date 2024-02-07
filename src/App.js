import { useState, useEffect } from 'react';
import './App.css';
import Ex1 from './components/Ex1';
import EX2 from './components/EX2';
// import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

// import Red from './Red';
// import Blue from './Blue';
// async function getColors(){
//   return( await ["green","blue","red", "pink"])
// }

function App() {

  // const [color, setColor] = useState("blue")
  // const toggleColor = () => {setColor(color === "blue" ? "red" : "blue")}

  // return (
  //   <div className="App">
  //     <div> Current Color {color} </div>
  //     <button onClick={toggleColor}> Toggle color </button>
  //     {color === "blue" ? <Blue /> : <Red />}
  //   </div>
  // );

  // const [titleIndex, setTitleIndex] = useState(0)
  // const [titles, setTitles] = useState([])
  // const updateTitle = () => {
  //   // setTitleIndex(titleIndex + 1);
  // }
  // useEffect(()=>{
  //   getColors().then((colors)=>{
  //     setTitles(colors)
  //   })
  // }, [])

  // useEffect(() => {
  //   setTimeout(updateTitle, 1000)
  // }, [titleIndex])

  // return (
  //   <div>
  //     <div className="box">{titles[titleIndex]}</div>
  //   </div>
  // );


  //EX-1 ----------------------------------------------------

// const [stop,setStop] = useState(true) 
// const handelBtn = function(){
//   setStop(!stop)
// }

//   return (
//     <div className='App'>
//       <button onClick={handelBtn}>Start/Pause</button>
//       <div>
//         Time is :{stop ? <Ex1 /> :null} 
//       </div>
//     </div>
//   );
//------------------------------------------------------------
//Ex - 2




  return (
    <>
    <div className='App'>
      <h1>Top Posts</h1>
    </div>

    <EX2 />

    </>
  );
}

export default App;
