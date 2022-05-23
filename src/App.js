import "./App.css";
import {useState} from "react";

export default function App() {
// JS starts
const user=[
  {
    name:"MSD", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaLvXhOKUFHpKIhY_9f5B1WMAMTMYPS1Zhw&usqp=CAU"
  },
  {
    name:"RD", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN59EjXa1XXgAXWlHlx6NgBECmdBVDItiyHQ&usqp=CAU"
  },
  { 
    name:"SG",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRlRmEWz5Wd9-QTSllfE-YBhYrDvM0etFCQ&usqp=CAU" 
  }, 
  ];

  // const people =["MSD","RD","SG","ABD","SRT"]
  const [like,setLike]= useState(0);
  const [dislike,disLike]= useState(0);

  // JS ends
  // JSX starts

  return (
    <div className="App">      
    
   {user.map((user) =>(<Msg name={user.name} img={user.img} />))}
     
    </div>


  );
}
// JSX ends

// function Welcome(props) {
//   console.log(props);
//   return (
//       <div>
//         <h1> {props.name} 😉🤩</h1>      
//       </div>
//   );
// }

function Msg({name, img}) {
  
  return (
      <div ClassName="user-container">
        <img className="photo" src={img}  alt={name}/>
        <h1> {name} 😉🤩</h1> 
        <Counter />     
      </div>
  );
}

function Counter(){
  const [like,setLike]= useState(0);
  const [dislike,setDislike]= useState(0);
  return(
    <div>
       <button className="btn-like" onClick={()=>setLike(like+1)}>👍{like}</button>
       <button className="btn-dislike" onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}