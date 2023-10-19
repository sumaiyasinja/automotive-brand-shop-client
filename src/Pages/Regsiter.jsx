import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Regsiter = () => {

    const {createUserWithEmail} = useContext(AuthContext)
    const navigate = useNavigate()
    const location =useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const name= form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        console.log(name,email, password)


            // Validate the password
            if (password.length < 6) {

                return toast.error("Password must be at least 6 characters")

            } else if (!/[A-Z]/.test(password)) {
                 return toast.error("Password must contain at least one uppercase letter")

            } else if (!/[!@#$%^&*]/.test(password)) {
                return toast.error("Password must contain at least one special character")
            } 
            

            createUserWithEmail(email, password)
            .then(() => {
              toast.success("Registration Successful!");
              // Update user profile here
              updateProfile(auth.currentUser, {
                displayName: name, 
                photoURL: photoUrl, 
              })
                .then(() => {
                  console.log("Profile data updated!");
                  navigate(location.state ? location.state :'/')
                })
                .catch((error) => {
                  toast.error(error.message);
                });
            })
            .catch((error) => {
              toast.error(error.message);
            });
         
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
                <form onSubmit={handleLogin}>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="name" name="name" required placeholder="User name" />
                    </div>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="email" name="email" required placeholder="User Email" />
                    </div>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="password" name="password" required placeholder="Password" />
                    </div>
                    <div className="user-box">
                        <input className="px-5 bg-slate-500 rounded-lg" type="text" name="photoUrl" required placeholder="photoUrl" />
                    </div>
                    <center>
                        <input className="sub-me" type="submit" value="Regsiter" />
                    </center>
                    <p className="mt-2 text-white text-base text-center">Do not have an account?  
                    <Link to="/signin" className="text-blue-500"> Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};


export default Regsiter;