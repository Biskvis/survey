import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Questions(props) {

  const [proffesion, setProffesion] = useState(""); 
  const [interest, setInterest] = useState(""); 
  const [reference, setReference] = useState(""); 

  const nextPage = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.addQuestionData(proffesion, interest, reference)
    nextPage('/details');
    
  }

  function handleProfessionChange(e) {
    setProffesion(e.target.value)

  }

  function handleInterestChange(e) {
    setInterest(e.target.value)
  }

  function handleReferenceChange(e) {
    setReference(e.target.value)
  }

  function prevPage() {
    nextPage('/');
  }

  return(
        <div className='bg-white w-9/12 p-4 shadow-xl border'>
          <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl p-8'>Questions</h1>
            <div className="form-group m-2" onChange={handleProfessionChange}> 
                  <label htmlFor="q1" className='text-xl'> 
                    <b>1.</b> What is your profession? 
                  </label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="ProfessionRadio"
                    id="student"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Student"
                  /> 
                  <label htmlFor="student"> Student</label> 
                  <br /> 
                
                  <input 
                    type="radio"
                    name="ProfessionRadio"
                    id="sde"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Software Engineer"
                  /> 
                  <label htmlFor="sde"> Software Engineer</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="ProfessionRadio"
                    id="teacher"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Teacher"
                  /> 
                  <label htmlFor="teacher"> Teacher</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="ProfessionRadio"
                    id="other"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Other"
                  /> 
                  <label htmlFor="other">  Other</label> 
                  <hr /> 
                </div>
                <div className="form-group m-2" onChange={handleInterestChange}> 
                  <label htmlFor="q2" className='text-xl'> 
                    <b>2.</b> What are your interests? 
                  </label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="interestRadio"
                    id="dsa"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="DSA"
                  /> 
                  <label htmlFor="dsa"> DSA</label> 
                  <br /> 
                
                  <input 
                    type="radio"
                    name="interestRadio"
                    id="fullstack"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Full Stack Development"
                  /> 
                  <label htmlFor="fullstack"> Full Stack Development</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="interestRadio"
                    id="dataScience"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Data Science"
                  /> 
                  <label htmlFor="dataScience"> Data Science</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="interestRadio"
                    id="compeProgramming"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Competitive Programming"
                  /> 
                  <label htmlFor="compeProgramming"> Competitive Programming</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="interestRadio"
                    id="others"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Other"
                  /> 
                  <label htmlFor="other"> Other</label> 
                
                  <hr /> 
                </div> 
  
                
                <div className="form-group m-2" onChange={handleReferenceChange}> 
                  <label htmlFor="q3" className='text-xl'> 
                    <b>3.</b> Where did you hear about us? 
                  </label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="referenceRadio"
                    id="news"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="News Paper"
                  /> 
                  <label htmlFor="news"> News Paper</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="referenceRadio"
                    id="LinkedIn"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="LinkedIn"
                  /> 
                  <label htmlFor="LinkedIn"> LinkedIn</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="referenceRadio"
                    id="Instagram"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Instagram"
                  /> 
                  <label htmlFor="Instagram"> Instagram</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="referenceRadio"
                    id="other"
                    autoComplete="off"
                    className="m-2 w-4 h-4"
                    value="Other"
                  /> 
                  <label htmlFor="other"> Other</label> 
                  
                  <br /> 
                </div>  
              <button type='submit' className='m-2 bg-green-600 p-2 rounded-lg text-xl text-white w-20'>Next</button>
          <button className='m-2 bg-green-600 p-2 rounded-lg text-xl text-white w-20 float-right'
            onClick={prevPage}
          >Back</button>
              
          </form>
          <center className='m-2 -mt-10'> 
              <span className="p-2 disabled">1</span> 
              <span className="bg-green-500 p-2 text-white"><b>2</b></span> 
              <span className="p-2 disabled">3</span> 
          </center> 
      </div>
    )
}