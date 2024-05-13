import {useState} from 'react'

function InputCheckbox() {
    const [name,setname]= useState("");
    const [tnc, settnc]= useState(false)
    const [interest, setinterest]=useState("")
    function getFormData(e){
        e.preventDefault()
        console.log(name,tnc,interest);

    }
  return (
    <div>
        <h1>Handle for in react</h1>
        <form onSubmit={getFormData}>
            <input type='text' placeholder='Enter name' onChange={(e)=>setname(e.target.value)}/><br/><br/>
            <select  onChange={(e)=>setinterest(e.target.value)}>
                <option>select options</option>
                <option>marvel</option>
                <option>dc</option>
            </select><br/><br/>
            <input type='checkbox' onChange={(e)=>settnc(e.target.checked)} /><span>Accept terms and condition</span><br/> <br/>
            <button className='bg-black text-white' type="submit">submit </button>
        </form>
    </div>
  )
}

export default InputCheckbox
