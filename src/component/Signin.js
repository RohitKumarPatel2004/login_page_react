import React from 'react'


function Signin() {
  return (
    <>
     <div className="main-1">
        <div className="container">
            <div className="body">
                <div className="h_1">
                    <header>
                        <h1 className="head">Create <br/>Account</h1>
                    </header>
                </div>
        
                <div className="main-containent">
                    <input type="text" placeholder="Your name "  className="i-1"/>
                    <hr/>
                    <input type="email" placeholder="Your email" className="i-1"/>
                    <hr/>
                    <input type="password" placeholder="Password" className="i-1"/>
                    <hr/>
                    <input type="password"placeholder="Confirm password" className="i-1"/>
                    <hr/>
                    <button className="btn i-1" >Sign up</button>
                </div>
        
                <footer>
                    <p className="ft-p">Back to <a href="home.html">Sign in</a></p>
        
        
                </footer>
            </div>
        </div>
    
    </div>

    
    
    
    
    </>
  )
}

export default Signin