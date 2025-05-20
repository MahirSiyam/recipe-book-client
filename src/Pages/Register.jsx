import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser , setUser} = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log({ name, email, photoURL, password });

    createUser(email , password)
    .then(result => {
        const user = result.user;
        setUser(user);
    })
    .catch(error => {
        console.log(error);
    })
  };

  return (
    <div className="flex mb-5 flex-col md:flex-row justify-center items-center mt-3 md:mt-20 px-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-2xl text-center">
          Register your account!
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              required
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Enter your photo URL"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter your password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center font-bold pt-5">
              Don't have an account? Click{" "}
              <Link to={`/auth/login`} className="text-orange-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
