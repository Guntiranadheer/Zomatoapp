function Signup(){
    return(
        <div>
      
        <div className='card login-card moves'>
            <div className="card signup-card">
            <h1 className=""> Signup </h1>
            <input  className=" phone" type="text" placeholder="FullName"></input> <br></br>
            <input  className=" phone" type="Email" placeholder="email"></input> <br></br>
            <button className="btn btn-primary  email-btn"> Continue with email</button> <br></br>
            <h4 className=" text-center">  OR</h4>
            <button className="btn btn-primary email-btn">sign in with Google</button> <br></br>
            <div className="d-flex flex-row gap-2">
            <span> new to Zomato?</span><span className="create-page"> Create account</span> 
            </div>
        </div>
        </div>
        </div>
    )
}
export default Signup;