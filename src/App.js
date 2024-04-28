import React, { useState } from 'react';
import './styles.css';

const SignUpForm = () => {
  // States for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for input validation
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted');
    }
  };

  return (
    <div className='one'>
    <div className="signup-form">
      <h2>Create an Account</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
        />
        {!emailValid && <p className="error">Invalid email format</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordValid ? '1px solid green' : '1px solid red' }}
        />
        {!passwordValid && <p className="error">Password must be at least 8 characters</p>}
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
        />
        {!confirmPasswordValid && <p className="error">Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default SignUpForm;
