import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import logoImage from "../../src/images/Logo.png";
import { useNavigate } from "react-router-dom";


const Login = ({ updateCustomer }) => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/login", loginData);
            navigate("/accountdetails")
            updateCustomer(response.data.customer)
        }
        catch (error) {
            setLoginError("Invalid username or password. Please try again.");
        }
    };
    const handleClear = () => {
        setLoginData({
            username: "",
            password: "",
        });
    };
    return (
        <div className='login'>
            <div className='login-img'></div>
            <div className='login-text'>
                <img src={logoImage} alt='sateesh bank' />
                <form onSubmit={handlelogin}>
                    <label>Username: </label>
                    <input type='text' placeholder='User Name'
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        required
                    />

                    <label>Password:</label>
                    <input type='password' placeholder='password'
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        maxLength={10}
                    />

                    <h3 className='error-msg'>{loginError}</h3>
                    <button type='submit'>Login</button>
                    <button type='submit' onClick={handleClear}>Clear</button>
                </form>
                <p>Welcome back! Log in to manage your finances securely. </p>
                <p> If you're new here, sign up for an account to get started. </p>
                <p>Explore our features to make the most of your banking experience.</p>
                <p>We prioritize your security.</p>
                <p>Rest assured, your data is safe with us.</p>
                <p>24/7 customer support is available. Contact us for assistance.</p>
            </div>
        </div>
    );
};

export default Login;
