import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

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
        <h2>{tripsDeatail?.name}</h2>
        <img src={tripsDeatail?.image} alt="img" width={"650px"} height={"400px"} />
        <div>{tripsDeatail?.destination}</div>
        <div>{tripsDeatail?.startDate} - {tripsDeatail?.endDate}</div>
        <div>{tripsDeatail?.description}</div>
        <div>{tripsDeatail?.price}</div>
        <div>{tripsDeatail?.activities}</div>
    </div>
        <Link to="/Trips" >
          <button >All Trips </button>
          </Link>
</>
  )
}