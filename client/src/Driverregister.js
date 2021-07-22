import React, { Component } from 'react';
import './Driverregister.css';
import hire from './hire.jpg';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


class Driverregister extends Component{
        state = {
            fullname : "",
            email : "",
            username:"",
            phone:"",
            citizenship:"",
            licence:"",
            dob:"",
            vechileNo:"",
            model:"",
        }
        
    ChangeItems=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    //img handler
    
    fileHandler = (e)=>{
        this.setState({
            licence : e.target.files[0]
        })
    }
    
    SendItems=(e)=>{
        //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
        e.preventDefault();
        const data = new FormData();
        data.append('fullname',this.state.fullname)
        data.append('email',this.state.email)
        data.append('username',this.state.username)
        data.append('phone',this.state.phone)
        data.append('citizenship',this.state.citizenship)
        data.append('licence',this.state.licence)
        data.append('dob',this.state.dob)
        data.append('vechileNo',this.state.vechileNo)
        data.append('model',this.state.model)
    
        console.log(data)
    
        axios.post("http://localhost:90/admin/register",data)
    
        
        .then((response)=>{
            console.log(response)
            window.location.reload(true);
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    
    render(){  
    return(
        <div style={{ backgroundImage: `url(${hire})`,backgroundRepeat: 'no-repeat'   }}>
        <div className="drivRegister">
          
          
            <div className ='drivRegister_container'>
               
                <h1>Driver Register</h1>
                <form>
                    
                    <h5 for ="fullname"><label className="regstyle">Fullname</label>
                    <input type="text" placeholder="Fullname...... " name="fullname" id="fullname"value={this.state.fullname} onChange={this.ChangeItems}required/>
                    </h5>
                    <h5 for="email"><label className="regstyle">Email</label>
                    <input type="text" placeholder="Email........" name="email" id="email" value={this.state.email} onChange={this.ChangeItems}required/>
                    </h5>
                    <h5 for="username"><label className="regstyle">Username</label>
                    <input type="text" placeholder="username........" name="username" id="username" value={this.state.username} onChange={this.ChangeItems}required/>
                    </h5>
                    <h5 for="context"><label className="regstyle">Contact</label>
                    <input type="text" placeholder="Contact......." name="phone" id="phone" value={this.state.phone} onChange={this.ChangeItems}required/>
                    </h5>
                    <h5 for="citizenship"><label className="regstyle">Citizenship</label>
                    <input type="text" placeholder="Citizenship........" name="citizenship" id="citizenship" value={this.state.citizenship} onChange={this.ChangeItems}required/>
                    </h5>

                    <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                            <p> <b><u>Licence</u></b></p>
                            <input type ="file" name="licence"  onChange={this.fileHandler}/> 
                            </Form.File>
                    </div>

                    <h5 for="dob"><label className="regstyle">DOB</label>
                    <input type="date" placeholder="DOB........" name="dob" id="dob" value={this.state.dob} onChange={this.ChangeItems}required/>
                    </h5>
                    
                     
                    <h5 for="vechileNo"><label className="regstyle">Vechicle Number</label>
                    <input type="text" placeholder="vechileNo......." name="vechileNo" id="vechileNo" value={this.state.vechileNo} onChange={this.ChangeItems}required/>
                    </h5>

                    <h5 for="model"><label className="regstyle"> Model</label>
                    <input type="text" placeholder="Model......." name="model" id="model" value={this.state.model} onChange={this.ChangeItems}required/>
                    </h5>
                    
                    
                    <button type="submit" className='drivRegister_btn'onClick={this.SendItems}>Register</button>
                    
                    

                </form>

                
            </div>
        </div>
        </div>
        
    
    )
    }
}

export default Driverregister;