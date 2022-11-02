import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Store_context from "./UseContext";

export default function Signin() {
  const navigate = useNavigate();
  const { login } = React.useContext(Store_context);

  const emailRef = useRef(); //vlaue email
  const passwordRef = useRef(); //vlaue password
  const [error, setError] = useState(""); //hande error
  const [loading, setLoading] = useState(false);
  //login by firebase
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value); //pass values in fun login
      console.log("tri");
      navigate('/');
    } catch {
      setError("Failed to log in");
      console.log("fal");
    }
  }

  return (
    <>
      <section class="vh-100 bg-blue-300">
        {error && <Alert variant="danger">{error}</Alert>}

        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone image"
              />
              <br />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                  <input
                    placeholder="Email"
                    ref={emailRef}
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    placeholder="password"
                    ref={passwordRef}
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form1Example23">
                    Password
                  </label>
                </div>
                <div className="flex mt-[-10px]">
                <Link className="text-red-500 bg-white p-1 rounded" to="/Signup">Register</Link>
                <input
                  type="submit"
                  name="Sign in"
                  className="btn btn-danger m-auto"
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
