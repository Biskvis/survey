import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'

import BasicDetails from './components/BasicDetails.jsx'
import Questions from './components/Questions.jsx'
import Details from './components/Details.jsx'
import Submitted from './components/Submitted.jsx';


function App() {

  const [basicData, setBasicData] = useState({}); 
  const [questionData, setQuestionData] = useState({}); 

  function addBasicData(name, email, contact) {
    localStorage.setItem("basic", JSON.stringify({ name, email, contact }));
    setBasicData(JSON.parse(localStorage.getItem('basic')))
  }

  function addQuestionData(proffesion, interest, reference) {
    localStorage.setItem("questions", JSON.stringify({ proffesion, interest, reference }));
    setQuestionData(JSON.parse(localStorage.getItem('questions')))
  }
  

  return (
    <>
      <main className='flex justify-center items-center mt-20'>
      <Router>
        <Routes>
          <Route path='/'
          element={<BasicDetails addBasicData={addBasicData} />}
          />
          <Route path='/questions'
          element={<Questions addQuestionData={addQuestionData} />}
          />
          <Route path='/details'
          element={<Details basic={basicData} questionData={questionData} /> }
          />
          <Route path='/submitted'
          element={<Submitted name={basicData.name} />}
          />
        </Routes>
        
        </Router> 
      </main>
      
    </>
  )
}

export default App
