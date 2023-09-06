import { useForm,FieldValues, SubmitHandler} from "react-hook-form";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface Trip1 {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: URL;
  activities: string
  id:string;
}

interface Trip2 {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: URL;
  activities: string | string[]
  id:string;
}



export default function NewTripForm() {
  
  async function  sendData(newTrip:Trip1 | Trip2) {
    const myHeaders = new Headers();
    myHeaders.append("authorization", "test-token");
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(newTrip);
    const requestOptions :RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }
     fetch("http://localhost:3000/api/trips?   authorization \n= test-token\n\n&=", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data:Trip1)=>{ 
    const activitiesArray:string[] = data.activities.split(',')    
    const newData: Trip2 = {
      ...data,
      activities: activitiesArray,
    };
    sendData(newData)
    console.log(newData)
  }
  return (
    <>
    <Link to="/Trips" > <button> All Trips</button></Link>
    <h2>New Trip Form</h2>
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
   <p> <input placeholder="name" {...register("name", { required: true })} /></p>
   <p> <input placeholder="destination" {...register("destination", { required: true })} /></p>
   <p> <input placeholder="startDate" {...register("startDate", { required: true })} /></p>
   <p><input placeholder="endDate" {...register("endDate", { required: true })} /></p>
   <p> <input placeholder="price" {...register("price", { required: true })} /></p>
   <p> <input placeholder="image" {...register("image", { required: true })} /></p>
   <p> <input placeholder="activities" {...register("activities", { required: true })} /></p>
    <input type="submit" />
  </form>
    </>
  )
}



