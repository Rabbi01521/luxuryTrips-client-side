import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const SignUp = () => {
  const {
    signInUsingGoogle,
    setIsLoading,
    signInUsingGithub,
    registerNewUser,
    setUserName,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleGithubSignIn = () => {
    signInUsingGithub()
      .then((result) => {
        console.log(result);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFastName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError("Email is Not Valid");
      return;
    }
    if (password.length < 6) {
      setError("Password Must be 6 Characters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must be 2 letters in Upper Case");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Password Must be one special case letter");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Ensure string has two digits");
      return;
    }
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError("Ensure string has three lowercase letters");
      return;
    }
    console.log(email, password);
    registerNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUserName(firstName, lastName);
        // verfiyEmail();
        history.push(redirect_uri);
        setError("");
        window.location.reload();
        // const userLocal = localStorage.setItem("user", JSON.stringify(user));
        // console.log(userLocal);
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(firstName, lastName, email, password);
  return (
    <div>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there 👋,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form onSubmit={handleRegistration}>
            <div className="mt-6">
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Firstname
                  </label>
                  <input
                    onBlur={handleFastName}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autoComplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span className="w-1/2">
                  <label
                    htmlFor="lastname"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Lastname
                  </label>
                  <input
                    onBlur={handleLastName}
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    autoComplete="family-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
              </div>
              <label
                htmlFor="email"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                onBlur={handleEmail}
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autoComplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                onBlur={handlePassword}
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autoComplete="new-password"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <p className="text-red-500">{error}</p>
              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Sign up
              </button>
              <div className="my-4">
                <div>
                  <div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {/* <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <svg
                          className="w-5 h-5 fill-current"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button> */}
                      <button
                        onClick={handleGithubSignIn}
                        className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>

                      <button
                        onClick={handleGoogleSignIn}
                        className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          className="w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/signin"
                className="justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
              >
                Already registered?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
