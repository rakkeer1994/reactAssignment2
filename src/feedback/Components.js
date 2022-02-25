import React, { useState } from 'react'



 const Components = () => {
    const [name, setName] = useState("")
    const [displayname, setDisplayname] = useState("")
    const eventUp = (eve) =>{
        setName(eve.target.value)
    }

    const [deptt, setDeptt] = useState("")
    const [displaydeptt, setDisplaydeptt] = useState("")
    const eventUp2 = (eve)=>{
        setDeptt(eve.target.value)
    }
    const onSubmits = (e) =>{
        e.preventDefault()
        setDisplayname(name)
        setDisplaydeptt(deptt)
    };
    const [show, setShow] = useState(false) 
  return (
    <div className='body'>
       <div className='formDiv'>
       <h1>EmployeeFeedBack From</h1>
        <form onSubmit={onSubmits}>
            <span>Name:</span>
            <input name='name' type="text"  onChange={eventUp}/> <br></br>

            <span>Department:</span>
            <input name='deptt' type="text" onChange={eventUp2}/> <br></br>

            <span>Rating:</span>
            <input name='rating' type="text" onChange={eventUp} /> <br></br>

            <button type='submit' onClick={()=>setShow(true)}>Submit</button> 
        </form>
       </div>
       {
           show?<><div className='showDiv'>
            <p className="p2tag"> {displayname}</p>
            <p className="p3tag">{displaydeptt}</p>
             </div> </>: null
             
        }  
    </div>
  )
}



export default Components
