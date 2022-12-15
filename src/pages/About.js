import React, { useState, useEffect } from 'react'
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  useEffect(() => { getData() }, [])


  const [data, setData] = useState([])
  const MY_SERVER = 'http://localhost:3005/team'


  const getData = async ()=>{
    const res = await axios.get(MY_SERVER)
    console.log(res.data)
    setData(res.data)
  }
  const notify = () => toast("Wow so easy!");
  return (
    <div>
     <h1> hello about page</h1>
     <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default About