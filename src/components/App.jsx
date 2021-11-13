// // import React, { useState } from "react";
// // import Header from "./Header";
// // import Footer from "./Footer";
// // import Note from "./Note";
// // import CreateArea from "./CreateArea";
// //
// // function App() {
// //   const [notes, setNotes] = useState([]);
// //
// //   function addNote(newNote) {
// //     setNotes(prevNotes => {
// //       return [...prevNotes, newNote];
// //     });
// //   }
// //
// //   function deleteNote(id) {
// //     setNotes(prevNotes => {
// //       return prevNotes.filter((noteItem, index) => {
// //         return index !== id;
// //       });
// //     });
// //   }
// //
// //   return (
// //     <div>
// //       <Header />
// //       <CreateArea onAdd={addNote} />
// //       {notes.map((noteItem, index) => {
// //         return (
// //           <Note
// //             key={index}
// //             id={index}
// //             title={noteItem.title}
// //             content={noteItem.content}
// //             onDelete={deleteNote}
// //           />
// //         );
// //       })}
// //       <Footer />
// //     </div>
// //   );
// // }
// //
// // export default App;
// //import './App.css';
//
// //*********************2nd*******************
// // import React,{ useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// // } from "react-router-dom";
// // import SignIn from "./Signin";
// // import Home from "./Home";
// // import firebase from "./firebase.js";
// // function App(){
// //   const [isUserSignedIn,setIsUserSignedIn] = useState(true);
// //   firebase.auth().onAuthStateChanged((user)=>{
// //     if(user){
// //       return setIsUserSignedIn(true);
// //     }
// //     setIsUserSignedIn(false);
// //   })
// //
// //   if (isUserSignedIn === true){
// //     return (
// //       <Router>
// //       <Routes>
// //       <Route path="./src/components/Home" component={<Home/>}/>
// //       </Routes>
// //       </Router>
// //     );
// //   }else {
// //     return (
// //       <Router>
// //       <Routes>
// //       <Route path="./src/components/SignIn" component={<SignIn/>}/>
// //       </Routes>
// //       </Router>
// //     )
// //   }
// //
// // }
// //
// // export default App;
//
// //*************************3rd***************************
//
// import {signup,login,useAuth,logout} from "./firebase";
// import React from 'react';
// import {useRef,useState} from "react";
//
// export default function App(){
//   const [loading,setLoading] = useState(false);
//   const currentUser = useAuth();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//
//   async function handleSignup(){
//     setLoading(true);
//     try {
//       await signup(emailRef.current.value,passwordRef.current.value);
//     }
//     catch {
//       alert("Error!");
//     }
//     setLoading(false);
//   }
//
//   async function handleLogout() {
//    setLoading(true);
//    try {
//      await logout();
//    } catch {
//      alert("Error!");
//    }
//    setLoading(false);
//  }
//
//
//  async function handleLogin() {
//    setLoading(true);
//    try {
//      await login(emailRef.current.value, passwordRef.current.value);
//
//    } catch {
//      alert("Error!");
//    }
//    setLoading(false);
//  }
//
//   return (
//     <div id="main">
//     <div>Currently logged in as :{currentUser?.email}</div>
//       <div id ="fields">
//       <h1>Please Sign Up</h1>
//         <input ref={emailRef} placeholder="Email"/>
//         <input ref={passwordRef} type="password" placeholder="Password"/>
//       </div>
// <button disabled={loading || currentUser } onClick={handleSignup}>Sign  up </button>
// <button disabled={loading || currentUser } onClick={handleLogin}>Login </button>
// <button disabled={loading || !currentUser} onClick={handleLogout}>Logout</button>
//
//
// </div>
//
//   );
// }
//*************************************************************
import React, { useState } from "react";    //Importing react and useStates from react dependency
import Header from "./Header";              //Importing Header function  from Header file
import Footer from "./Footer";              //Importing Footer function  from Footer file
import Note from "./Note";                  //Importing Note function  from Note file
import CreateArea from "./CreateArea";      //Importing CreateArea  function  from CreateArea file

function App() {                                  //Naming a function App
  const [notes, setNotes] = useState([]);         //Creating the use states named notes and setNotes

  function addNote(newNote) {//Now having a function named addNote which will add notes in App fucntion and passing
    setNotes(prevNotes => { //parameter newNote to it and returning(changing) the useState Value of setNotes
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) { //This is the deleteNote function where we will be deleting the added items
    setNotes(prevNotes => {//Changing the useState value of setNotes by returning all items except the deleted one
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
