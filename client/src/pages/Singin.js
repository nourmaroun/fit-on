import { React, useRef, useState, useContext } from 'react'
import './../css/signin.css'
import { Container, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserContext } from "../App";
import firebase from "firebase/compat/app";


const Signin = () => {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  // navigate to another component after sign in

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/edit-profile")
    } catch {
      setError("Failed to sign in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className='signin-body'>
        <div className='blackline'></div>
        <p className='signinTitle'>Sing In</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <div className="">
            <input type="email" id="signin-email" className="signin-email"
              placeholder='Email' ref={emailRef} required/>
          </div>
          <div className="">
            <input type="password" id="signin-password" className="signin-password"
              placeholder='Password' ref={passwordRef} required/>
          </div>
          <Link to='/password-recovery' className='forgot-password'>Forgot your password?</Link>
          <div className='signin-button-div'>
            <button type="submit" disabled={loading} className="btn btn-primary singin-button">SIGN IN</button>
          </div>
        </Form>
        <Link to='/signup' className='forgot-password'>
          Don't Have An Account Yet? Create Account</Link>
      </div>
      
      <div className='signin-footer'>
        <p className='intouch-text'>LET'S STAY IN TOUCH</p>
        <input type="email" id="intouch-email" name="intouch-email"
            className="intouch-email" placeholder='EMAIL ADDRESS' />
      </div>
    </>
    
  )
}
export default Signin