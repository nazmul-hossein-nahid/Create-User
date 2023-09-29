import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import swal from 'sweetalert';

import { Link } from "react-router-dom";
import auth from "../../../firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateUser = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const terms = e.target.check.checked;
    if (!terms) {
      alert("Accept the Terms And Condition");
      return;
    }
    if (password !== confirmPassword) {
      alert("Confirm Password Not Match");
      return;
    }



    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((rasult) => {
        const user = rasult.user;
        console.log(user)
        sendEmailVerification(user)
        .then(()=>{
          swal("Check Your Email")
        })
        swal("successfully Create User")
      })
      .catch((error) => {
        // console.error(error);
        swal(error.code)
      });
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordShowHidden = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                onSubmit={handleCreateUser}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="relative">
                  <div>
                    <label htmlFor="Password">Password</label>
                    <input
                      onChange={handlepassword}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div
                    className={`absolute  top-9 right-4 ${
                      password ? "" : "hidden"
                    }`}
                  >
                    <div onClick={handlePasswordShowHidden}>
                      {showPassword ? (
                        <AiFillEyeInvisible className="text-xl text-gray-500"></AiFillEyeInvisible>
                      ) : (
                        <AiFillEye className="text-xl text-gray-500"></AiFillEye>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                      onChange={handlepassword}
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="password1"
                      placeholder="••••••••"
                      className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div
                    className={`absolute  top-9 right-4 ${
                      password ? "" : "hidden"
                    }`}
                  >
                    <div onClick={handlePasswordShowHidden}>
                      {showPassword ? (
                        <AiFillEyeInvisible className="text-xl text-gray-500"></AiFillEyeInvisible>
                      ) : (
                        <AiFillEye className="text-xl text-gray-500"></AiFillEye>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      name="check"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      // required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
