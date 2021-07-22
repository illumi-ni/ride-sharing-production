import React, { Component } from 'react';
import './test.css';





class test extends Component {
   
    render() {
        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-4"></div>
                    <div className="customer col-md-4">
                        <form>
                            <h1>Customer Login</h1>
                            <h5 for="email"><label className="regstyle">Email</label>
                            <input type="text" placeholder="Please enter your email" 
                          value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                          name="username" id="username" required />
                    </h5>
                        
                    <button type="submit" className='Login_btn' onClick={this.sendEmail}>Next</button>
                    </form>
                    </div>

                    <div className="col-md-4"></div>
                    </div>
            
            
            
            </div>
/* //             <div class="container">
//     <div class="row">
//         <div class="col-md-6">
//             <div class="card">
//                 <form onsubmit="event.preventDefault()" class="box">
//                     <h1>Login</h1>
//                     <p class="text-muted"> Please enter your login and password!</p> <input type="text" name="" placeholder="Username"> <input type="password" name="" placeholder="Password"> <a class="forgot text-muted" href="#">Forgot password?</a> <input type="submit" name="" value="Login" href="#">
//                     <div class="col-md-12">
//                         <ul class="social-network social-circle">
//                             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
//                             <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
//                             <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
//                         </ul>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//   </div> */
       
        )
    }
}
export default test
