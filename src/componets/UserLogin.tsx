import { useForm,FieldValues, SubmitHandler} from "react-hook-form";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type User = {
  email:string
  password:string
}

export default  function UserLogin(){
  
async function loginUser(user:User) {
  const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify(user);

const requestOptions:RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}

fetch("http://localhost:3000/api/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = (data:User)=>{loginUser(data) }

  return (
    <>
    <Link to="/" style={{ padding: 5 ,height:'100px'}}> <button >Home </button></Link>
    <div>
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
   <p> <input placeholder="email" {...register("email", { required: true })} /></p>
   <p> <input placeholder="password" {...register("password", { required: true })}/></p>
    <input type="submit" />
   </form>
    </div>
    </>
  )

}