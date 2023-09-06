import React,{useState,useEffect, ReactElement} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Trips.css"

interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
 id:string;
}

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/trips")
  const data:Trip[] = await res.json()
  return data
}

export default function CreatTrips() {


 async function deleteTrip(id:string) {

  const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");

const raw = "";

const requestOptions:RequestInit = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:3000/api/trips/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  

  }

  const [trips , setTrip] = useState<Trip[]|null>(null)
  useEffect(() => {
    fetchData().then(data=>setTrip(data))
})
  return (
    <>
    <div id='container'>
    <span>
    <Link to="/NewTripForm" style={{ padding: 5 ,height:'100px'}}> <button  style={{margin:'5px' ,backgroundColor:'lightgray'}}>New Form </button>
 </Link>
    <Link to="/" style={{ padding: 5 ,height:'100px'}}> <button  style={{margin:'5px'
     ,backgroundColor:'lightgray'}} >Home </button></Link>
    </span>
    <h1>All Trips</h1>
    <div id='tripCards'>
    {trips? 
   trips.map(trip =>
      <div key={trip.id} >
        <div id='card' style={{border:'1px solid rgba(0, 0, 5,20)',margin:'10px'}}>
        <h2>{trip.name}</h2>
        <div>{trip.destination}</div>
        <div>{trip.startDate} - {trip.endDate}</div>
          <img src={trip.image} alt="img" width={"300px"} height={"200px"} />
          <div>
          <Link to={`/TripDetail/${trip.id}`} >
          <button style={{margin:'5px' ,backgroundColor:'lightgray'}}>Trip Deatils</button>
          </Link>
          <button style={{margin:'5px',backgroundColor:'lightgray'}} onClick={()=>
          // if (window.localStorage){

          // }
            deleteTrip(trip.id)}>Delete Trip</button>
          </div>

          </div>
      </div>    )
      : "no data found"}
    </div>
    </div>
    </>
  )
}