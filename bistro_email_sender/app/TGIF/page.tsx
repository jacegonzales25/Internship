"use client"
import axios from 'axios';
import React, { useState } from 'react';
export default function TGIF() {
    const formData = new FormData();

    const [form, setForm] = useState({
        name: "",
        email: "",
        resume: ""
    });



    function submitForm(event: any) {
        
    }

    function handleChange(event: any){
        setForm({
            ...form,
            [event.target.name]: event})
    }
    

    

    return (
      <div>
        <form>
            <label>TGIF Sender</label>
            <input name="name" value={form.name} placeholder="Name"></input>
            <input name="email" value={form.email} placeholder="Email"></input>
            <button onClick={submitForm}>Send</button>
        </form>
        <h1>Form Test</h1>
      </div>
    
    )
  }