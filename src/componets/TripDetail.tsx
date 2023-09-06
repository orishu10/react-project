import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './TripDetail.css'
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


export default function TripDetail() {
  const [tripsDeatail , setTripDeatail] = useState<Trip|null>(null)

  let { id } = useParams();
  const fetchDataByid = async () => {
    const res = await fetch("http://localhost:3000/api/trips/"+id)
    const data:Trip = await res.json()
    return data
  }

  useEffect(() => {
    fetchDataByid().then(data=>setTripDeatail(data))
})
  return (
    <>
    <div>
        <Link to="/Trips" >
          <button style={{margin: 5  ,backgroundColor:'lightgray'}} >All Trips </button>
          </Link>
        <h2>{tripsDeatail?.name}</h2>
        <img src={tripsDeatail?.image} alt="img" width={"400px"} height={"350px"} />
        <div>{tripsDeatail?.destination}</div>
        <div>{tripsDeatail?.startDate} - {tripsDeatail?.endDate}</div>
        <div>{tripsDeatail?.description}</div>
        <div>{tripsDeatail?.price}</div>
        <div>{tripsDeatail?.activities}</div>
    </div>
</>
  )
}