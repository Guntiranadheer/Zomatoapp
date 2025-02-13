import "./Loginpage.css"
function Login(){
    return(
        <div>
            <div className="moves">
        <div className='card login-card'>
            <h1> Login</h1>
            <input  className=" phone" type="number" placeholder="enter your number"></input> <br></br>
            <button className="btn btn-primary password-btn"> Send one time password</button> <br></br>
            <h4 className=" text-center"> OR</h4>
            <button className="btn btn-primary  email-btn"> Continue with email</button> <br></br>
            <button className="btn btn-primary email-btn">sign in with Google</button> <br></br>
            <div className="d-flex flex-row gap-2">
            <span> new to Zomato?</span><span className="create-page"> Create account</span> 
            </div>
        </div>
        </div>
        </div>
    )
}
export default Login;