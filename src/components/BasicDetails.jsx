import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function BasicDetails(props) {

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [contact, setContact] = useState(""); 

  const nextPage = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.addBasicData(name, email, contact)
    nextPage('/questions');
  }

  return(
        <div className='bg-white w-9/12 p-4 shadow-xl border'>
          <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl p-8'>Basic Details</h1>
              <label className="p-4">
                <strong className="text-xl">1</strong><span className="text-xl">. Name</span>
                <br />
                <input 
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-2 border rounded-lg m-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="p-4 ">
                <strong className="text-xl">2</strong><span className="text-xl">. Email</span>
                <br />
                <input 
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-2  border rounded-lg m-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="p-4">
                <strong className="text-xl">3</strong><span className="text-xl">. Contact No.</span>
                <br />
                <input 
                  type="text"
                  placeholder="Enter your Contact No."
                  className="w-full p-2 border rounded-lg m-2"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </label>
              <button type='submit' className='m-2 bg-green-600 p-2 rounded-lg text-xl text-white w-20'>Next</button>
          </form>
          <center> 
              <span className="bg-green-500 p-2 text-white"><b>1</b></span> 
              <span className="p-2 disabled">2</span> 
              <span className="p-2 disabled">3</span> 
          </center> 
      </div>
    )
}