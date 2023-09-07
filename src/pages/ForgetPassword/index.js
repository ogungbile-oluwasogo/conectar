import React, { useContext, useState } from 'react'
import { AuthContext } from '../../components/AuthContext';
import { Link } from 'react-router-dom';
import OAuth from '../../components/OAuth';


export default function ForgetPassword() {
  const { openAuthModal } = useContext(AuthContext);

  // const [email, setEmail] = useState("");
  

  // function onChange(e) {
  //   setEmail(e.target.value);
  // }

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   try {

  //     const auth = getAuth();
  //     await sendPasswordResetEmail(auth, email);
      
  //     toast.success("Email sent successfully")
  //   } catch (error) {
  //     toast.error("Could not send reset email");
  //   }
  // }

  return (
    <section>
      <h1 className=" ">
        Forgot Password
      </h1>
      <div className="">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Key"
            className=""
          />
        </div>
        <div className="">
          <form >
            <input
              type="email"
              id="email"
              placeholder="Email-address"
              aria-required
              className=""
            />
            {/*onChange is an eventListener that listens when something changes like typing something in a form field */}
            <div className="">
              <p>
                {`Don't have an account?`}
                <Link
                  to={"/sign-up"}
                  className=""
                >
                  Sign Up
                </Link>
              </p>
              <p>
                <Link
                  to={"/sign-in"}
                  className=""
                >
                  Sign In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className=""
            >
              Reset password
            </button>
            <div className="">
              <p className="">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
