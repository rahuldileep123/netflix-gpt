import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  // const [userInfo,setUserInfo]=useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const fullName=useRef(null)
  const dispatch =useDispatch()
  const navigate = useNavigate()


  const handileButtonClick = (e) => {
    //validate form
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName}=auth.currentUser
            dispatch(setUser({uid:uid,email:email,displayName:displayName}))
            navigate("/Browse")
          }).catch((error) => {
            // An error occurred
            // ...
          });
          console.log(user);
          
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errorCode,errMessage)
        });
    } else {
      //login
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    navigate("/Browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errMessage = error.message;
    setErrorMessage(errorCode,errMessage)
  });
    }
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen relative">
      <Header />
      <div>
        {" "}
        <img
          className="h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          alt=""
        />
      </div>
      <div className="">
        <form
          action=""
          className="bg-black bg-opacity-80 rounded p-10 w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 text-white "
        >
          <h1 className="text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
            ref={fullName}
              type="text"
              placeholder="Fullname"
              className="w-full my-3 p-3  bg-slate-700 rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full p-3  bg-slate-700 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="w-full  bg-slate-700  p-3 my-4 rounded"
          />
          {errorMessage && (
            <p className="text-red-500 font-bold py-1">{errorMessage}</p>
          )}
          <button
            onClick={(e) => handileButtonClick(e)}
            className="py-2 my-4 bg-red-700 rounded w-full"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already Registered? Sign In now "}
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
