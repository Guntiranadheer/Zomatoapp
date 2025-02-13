import './Footer.css';
function Footer() {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <img className='footer-img' src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt=" correct" />
                    </div>
                    <div className="col-6 total-card">
                        <h1> Get the zomato app</h1>
                        <p> we will send you a link open it on your phone to download the app</p>
                        <label className=''>Email</label>
                        <input type="radio" name="btn1"></input>
                        <label> Phone</label>
                        <input type="radio" name="btn1"></input> <br></br> <br></br>
                        <input className="footer-input" type="text" placeholder='email'></input>
                        <button className='btn2'> Share app link</button>
                        <p> download app from</p>
                        <button className='footer-google-btn'> Get it on google play</button>
                        <button className='footer-google-btn' > Download on the app store</button>
                    </div>
                </div>

            </div>
            <div className=' container-fluid row footers-links'>
                    <div className='col-2 links '>
                        <h5> <a href='hha'> About Zomato</a></h5>
                        <a href='hha'> Who we are</a> <br></br>
                        <a href='hha'> Blog</a>  <br></br>
                        <a href='hha'> Work with us</a>  <br></br>
                        <a href='hha'> investor realtions</a>  <br></br>
                        <a href='hha'> Report ford</a>  <br></br>
                        <a href='hha'> Free kit</a>  <br></br>
                        <a href='hha'> Contact us</a>  <br></br>

                    </div>
                    <div className='col-2 links'>
                    <h5> <a href='hha'> About Zomato</a></h5>
                        
                        <a href='hha'> Who we are</a> <br></br>
                        <a href='hha'> Blog</a>  <br></br>
                        <a href='hha'> Work with us</a>  <br></br>
                        <a href='hha'> investor realtions</a>  <br></br>
                        <a href='hha'> Report ford</a>  <br></br>
                        <a href='hha'> Free kit</a>  <br></br>
                        <a href='hha'> Contact us</a>  <br></br>
                        <a href=' haha'> weather union</a>


                    </div>
                    <div className='col-2 links'>
                    <h5> <a href='hha'> About Zomato</a></h5>
                        
                        <a href='hha'> Who we are</a> <br></br>
                        <a href='hha'> Blog</a>  <br></br>
                        <a href='hha'> Work with us</a>  <br></br>


                    </div>
                    <div className='col-2 links'>
                    <h5> <a href='hha'> About Zomato</a></h5>
                        
                        <a href='hha'> Who we are</a> <br></br>
                        <a href='hha'> Blog</a>  <br></br>
                        <a href='hha'> Work with us</a>  <br></br>


                    </div>
                    <div className='col-2 social-links '>
                        <p className=''> social links </p>
                        <button className='nice-btn'> Get it on google play</button>
                        <button  className=' nice-btn'> Download on the app store</button>
                    </div>

                </div>

        </div>
    )
}
export default Footer;