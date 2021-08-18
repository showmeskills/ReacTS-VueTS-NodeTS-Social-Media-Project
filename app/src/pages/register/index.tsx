import {RegisterContainer} from "./style/register";


const Register =()=>{

    return (
        <RegisterContainer>
               <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="Username" className="loginInput"/>
                        <input type="email" placeholder="Email" className="loginInput"/>
                        <input type="password" placeholder="password" className="loginInput"/>
                        <input type="password" placeholder="Password Again" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </RegisterContainer>
    )
}

export default Register;