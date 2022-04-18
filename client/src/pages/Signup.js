import React, {useRef, useState} from 'react'
import './../css/signup.css'
import { Form, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
    <div className='signup-body'>
      <div className='blackline'></div>
      <p className='signupTitle'>Sing Up</p>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <div>
          <input type="email" id="signup-email"
            className="signup-email" placeholder='Email' ref={emailRef} required/>
        </div>
        <div>
          <input type="password" id="signup-password"
            className="signup-password" placeholder='Password'
            ref={passwordRef} required/>
        </div>
        <div>
          <input type="password" id="signup-password-confirm"
            className="signup-password-confirm" placeholder='Confirm Password'
            ref={passwordConfirmRef} required/>
        </div>
        <div className='signup-button-div'>
          <button type="submit" disabled={loading} className="btn btn-primary singup-button">SIGN UP</button>
        </div>
      </Form>
      <Link to='/signin' className='forgot-password'>
        Already Have An Account?</Link>
    </div>
    <div className='signup-footer'>
      <p className='intouch-text'>LET'S STAY IN TOUCH</p>
      <input type="email" id="intouch-email" name="intouch-email"
          className="intouch-email" placeholder='EMAIL ADDRESS' />
    </div>
    </>
  )
}

export default Signup