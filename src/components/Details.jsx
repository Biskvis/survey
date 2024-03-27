import { useNavigate } from 'react-router-dom'; 


export default function Details(props) {
    
    const nextPage = useNavigate();

    function navigate() {
        nextPage('/')

    }

    function submit() {
        nextPage('/submitted')
    }

    return(
        <div className='bg-white w-9/12 p-4 shadow-xl border'>
        <form onSubmit={submit}>
          <h1 className='font-bold text-3xl p-8'>Entered Details</h1>
            <div className='text-lg p-4'>
                <p><b className='text-xl'>Name: </b> {props.basic.name}</p>
                <p><b className='text-xl'> Email: </b>{props.basic.email}</p>
                <p><b className='text-xl'>Contact: </b>{props.basic.contact}</p>
            </div>
            <div className='text-lg p-4'>
                <p><b className='text-xl'>Profession: </b> {props.questionData.proffesion}</p>
                <p><b className='text-xl'> Interests: </b>{props.questionData.interest}</p>
                <p><b className='text-xl'>Reference: </b>{props.questionData.reference}</p>
                
            </div>
                <hr />
            <div className='flex justify-center items-center p-4'>

                <button type='submit' className='m-2 bg-green-600 p-2 rounded-lg text-xl text-white w-20'>Submit</button>
            </div>
        </form>
        <center> 
            <span className="p-2 disabled">1</span> 
            <span className="p-2 disabled">2</span> 
            <span className="bg-green-500 p-2 text-white"><b>3</b></span> 
        </center>
         
            <button className="m-2 bg-blue-600 p-2 rounded-lg text-xl text-white w-20 float-right"
                onClick={navigate}
            >Reset</button>
    </div>
    )
}