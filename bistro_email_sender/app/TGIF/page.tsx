"use client"
import axios from 'axios';
import React, { useState } from 'react';
export default function TGIF() {
    
    const formData = new FormData();

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    function submitForm(event: any) {
        formData.append('name', form.name);
        formData.append('email', form.email);
    }

    function handleChange(event: any){
        const {name, value} = event.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    const [file, setFile] = useState(undefined);

    function handleFileChange(event: any){
      // Handling 1 resume passed
      const file = event.target.files[0];
      setFile(file);
      formData.append('file', file);
    }

    axios.post("apply@bistro.com.ph", formData, {
     headers: {
       'Content-Type': 'multipart/form-data'
     }
   })
     .then(function (response) {
       // Handle success
       console.log(response);
     })
     .catch(function (error) {
       // Handle error
       console.log(error);
     });

    return (
      <div>
        <form>
            <label>TGIF Sender</label>
           
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="Name"></input>
            
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="Email"></input>
            
            <label>Resume:</label>
            <input type="file" name="resume" onChange={handleFileChange} value={file} accept=".pdf,.doc,.docx" placeholder="Resume"></input>
            <button onClick={submitForm}>Send</button>
        </form>
        <h1>Form Test</h1>
      </div>
    
    )
  }