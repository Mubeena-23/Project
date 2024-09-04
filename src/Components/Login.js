import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [button, setButton] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      };

      const handleButtonChange = (event) => {
        event.preventDefault();
        setButton(event.target.value);
      };
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pass} onChange={handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" value={button} onClick={handleButtonChange}>
                    Submit
                </Button>
            </Form>
            {button && <div className="details">
                <h2>Details</h2>
                <p><b>Email :{email}</b></p>
                <p><b>Password :{pass}</b></p>
            </div>}
        </div>
    );
}

export default Login;