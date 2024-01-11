import LOGO from "../src/resources/netflixlogo.png";
function Netflix(){
    return(
        <div className="mainblock">
        <div className="grdient"></div>
        <nav>
            <div className="logoblock">
                <img src={LOGO} alt="" height="150px"/>
            </div>
            <div className="menublock">
               
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Nepali</option>
                    <option value="">Kannada</option>
                    
                </select>
                <button className="sighnin"><h1>Signin </h1></button>
            </div>
        </nav>
        <h1 className="text1">Enjoy big movies, hit series and more from.</h1>
        <h1 className="text2">₹149.</h1>
        <h1 className="text3">Join today. Cancel anytime.</h1>
       
       <h1 className="textblock">Ready to Watch? Enter your email to create or restart your membership.</h1> 
        <div className="emailblock">
        <input type="text" placeholder="  Email Address"/>
        <button className="getstarted"><h1>Getstarted  </h1></button>
        </div>

        </div>
        
    )
}
export default Netflix