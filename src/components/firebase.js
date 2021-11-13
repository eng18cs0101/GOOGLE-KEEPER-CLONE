// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import {useEffect,useState} from "react";
import {initializeApp} from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCsGSOK6CgQw4CfECT-BiLv6vJDWI5mRw",
  authDomain: "keeper-app-970b6.firebaseapp.com",
  projectId: "keeper-app-970b6",
  storageBucket: "keeper-app-970b6.appspot.com",
  messagingSenderId: "364397310082",
  appId: "1:364397310082:web:9cf03fa418c3020bd9c49b",
  measurementId: "G-1X30KRJN08"
};
//initializeApp
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
}

export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}

export function logout(){
  return signOut(auth);
}


//Custom hook
export function useAuth(){
 const [currentUser,setCurrentUser] = useState();
 // useEffect(()=>{
 //   const unsub = onAuthStateChanged(auth,use=>{setCurrentUser(user));
 //   return unsub;
 // },[])

 useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
 return currentUser;
}
