import React,{useState,useContext} from 'react'
import Trips from './Trips'
import  {ContextComp,MyContext}  from "./ContextComp.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Home.css'
export default function Home() {
  return (
<>
<div id='containerHome'>
<h1 style={{color:'white'}}>welcome to my website</h1>

<Link to="/Trips" >
<button style={{ margin: 5  ,backgroundColor:'lightgreen' }}>All Trips </button>
</Link>
<Link to="/UserReg" style={{ padding: 5 }}>         
 <button style={{ margin: 5  ,backgroundColor:'lightgreen'}}>regstreition </button>
 </Link>
<Link to="/UserLogin" style={{ padding: 5 }}>
  <button style={{ margin: 5  ,backgroundColor:'lightgreen'}}>log in </button>
</Link>
</div>

</>

  )}