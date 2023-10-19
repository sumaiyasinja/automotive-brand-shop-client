import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
    const {loginWithEmailAndPasword,loginWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location =useLocation()
    console.log('location object in loginpage: ',location)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginWithEmailAndPasword(email, password)
        .then(()=> {
            
            toast.success("Succefully logged in")
            
            navigate(location?.state ? location?.state :'/')
        })
          .catch(e=> toast.error(e.message))
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(()=> {
            toast.success("Succefully logged in with google.")
            navigate(location.state ? location.state :'/')
        })
          .catch(e=> toast.error(e.message))
        
    }

    return (
        <div>
                        <Toaster
              position="top-right"
              toastOptions={{   
                success: {
                  style: {
                  background: 'green',
                  color: '#fff',

                },
              },
              error: {
                style: {
                  background: 'red',
                  color: '#fff',
                  
                },
              },
            }}
            /> 
            <div className="login-box">
                <h2 className="text-2xl text-white mb-3 text-center">Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="email" name="email" required placeholder="User Email" />
                    </div>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="password" name="password" required placeholder="Password" />
                    </div>
                    <center>
                        <input className="custom-btn w-full mb-5" type="submit" value="Log In" />
                    </center>
                    <div onClick={handleGoogleLogin} className="flex justify-center items-center gap-4 custom-btn text-black ">
                            <p className="text-white font-medium text-lg hover:text-red-500">Sign in with</p>
                            <FcGoogle></FcGoogle>
                    </div>
                    <p className="mt-2 text-white text-base text-center">Do not have an account?  
                    <Link to="/signup" className="text-blue-500"> Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
