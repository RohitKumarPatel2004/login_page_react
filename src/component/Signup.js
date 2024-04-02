import React from 'react'

function Signup() {
  return (
<>
    <div className="main-1">
  <div className="container">
    <div className="body">
      <div className="h_1"> 
        <header>
          <h1 className="head">
            Welcome <br /> 
            Back
          </h1>
        </header>
      </div>
      <div className="main-containent">
        <input type="email" placeholder="Your email" className="i-1" />
        <hr />
        <input type="password" placeholder="Password" className="i-1" />
        <hr />
        <div className="btn1">
          <button className="btn i-2">Sign in</button>
          <p>or</p>
          <button className="btn i-3">Sign in with Google</button>
        </div>
      </div>
      <footer>
        <p className="ft-p">
          Create account? <a href="index.html">Sign up</a>
        </p>
      </footer>
    </div>
  </div>
</div>

    </>
  )
}

export default Signup