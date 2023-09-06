import React,{useState,useContext} from 'react'
import Trips from './Trips'
import  {ContextComp,MyContext}  from "./ContextComp.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
<>
<h1>welcome to my website</h1>

<Link to="/Trips" style={{ padding: 5 }}>
<button >All Trips </button>
</Link>
<Link to="/UserReg" style={{ padding: 5 }}>         
 <button >regstreition </button>
 </Link>
<Link to="/UserLogin" style={{ padding: 5 }}>
  <button >log in </button>
</Link>

</>

  )}