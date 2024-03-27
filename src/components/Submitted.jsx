
export default function Submitted(props) {

    return(
    <div className='bg-white w-9/12 p-4 shadow-xl border-4 border-green-500'>
        <h1 className="text-center text-xl">Thank you for your submission, <b>{props.name}</b>!</h1>
        <h1 className="text-center text-lg">Have a nice day!</h1>
    </div>
)
}