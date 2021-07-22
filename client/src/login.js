import React, { Component } from 'react';
import './login.css';

import axios from "axios"



class login extends Component {
    state = {
        username : "",
        password : "",
        chklogin : false
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/admin/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('username',response.data.data)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            // <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat'   }}>
            //  <div class="container" id="container">
            // <div class="form-container log-in-container">
            //     <form>
            //         <h1>Login</h1>
                    
            //             <h5 for="email"><label className="regstyle">Username</label>
            //                 <input type="text" placeholder="Username" name="username" id="username" value={this.state.username} onChange={this.changeHandler}required />
            //             </h5>
            //             <h5 for="password"><label className="regstyle">Password</label>
            //                 <input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.changeHandler}required />
            //             </h5>
            //             <button type="submit" className='Login_btn' onClick={this.submitLogin}>Login</button>
            //         </form>

            //     </div>
            //     <div class="overlay-container log-in-container">
            //         <div class="overlay">
            //             <div class="overlay-panel overlay-right">
            //                 <h1>HTML CSS Login Form</h1>
            //                 <p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
            //             </div>
            //         </div>
            //     </div>
            // </div> 
            // </div>
            

        <div className="container" id="container">
            
            <div className="Admin-log row">
                <div className="col-md-2"></div>
                <div className="Admin col-md-8">
                    <div className="form-container log-in-container">
                        <form >
                            <h1>Admin Login</h1>
                                
                            <input type="text" placeholder="Username" name="username" id="username" value={this.state.username} onChange={this.changeHandler}required />
                            
                            <input type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.changeHandler}required />
                            
                            <button type="submit" className='button' onClick={this.submitLogin}>Login</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            </div>
        
        )
    }
}
export default login
