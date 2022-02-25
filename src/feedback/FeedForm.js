










import React, { Component } from 'react'

export class FeedForm extends Component {
    state = {
        name: "",
        deptt: "",
        rating: "",
        employee: []
    }
    eventUp=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    ButtonSubmit=(e)=>{
        e.preventDefault()
        const fillObj = {
            name: this.state.name,
            deptt: this.state.deptt,
            rating: this.state.rating
        }
        const tempEmployee = this.state.employee
        tempEmployee.push(fillObj)
        this.setState({employee: tempEmployee})
    }
    render() {
        console.log(this.state.employee)
        return (
            <>
            <div className='body'>
               <div className='formDiv'>
                <h1>EmployeeFeedBack From</h1>
               <form>    
                     <span>Name:</span>
                     <input name='name' id='name' type="text" value={this.state.name}  onChange={this.eventUp}/> <br></br>
            
                     <span>Department:</span>
                     <input name='deptt' id='deptt' type="text" value={this.state.deptt} onChange={this.eventUp}/> <br></br>
            
                     <span>Rating:</span>
                     <input name='rating' id='rating' type="text" value={this.state.rating} onChange={this.eventUp}/> <br></br>
            
                     <button onClick={this.ButtonSubmit}>Submit</button> 
                 </form>
                </div>
                <div className='displyBlock'>
                {this.state.employee.map((val, index)=>{
                     return <div className='displayEmp'>Name: {val.name} <br></br> Department: {val.deptt} <br></br> Rating:{val.rating}</div>
                })}
                </div>
                </div>  
                
          </>   
        )
      }
}

export default FeedForm