import React from 'react';
import './Registration.css';
import axios from 'axios';
import logoImage from "../../src/images/Logo.png";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        username: "",
        password: "",
        accountNumber: "",
        branch: "",
        phoneNumber: "",
    });
    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/api/signup",signupData);
            navigate("/login")
        }
        catch (error){
        }
       
    };
    const handleClear = () => {
        setSignupData({
            username: "",
            password: "",
            accountNumber: "",
            branch: "",
            phoneNumber: "",
        });
    };
    return (
        <div className='signup'>
            <div className='img-signup'></div>
            <div className='signup-text'>
            <img src={logoImage}  alt='sateesh bank'/>
                <form onSubmit={handleSignup}>
                    <div>
                        <label>Username: </label>
                        <input type='text' placeholder='user Name'
                            value={signupData.username}
                            onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} required />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password'placeholder='password'
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            maxLength={10}
                            required />
                    </div>
                    <div>
                        <label>Account Number: </label>
                        <input type='number'placeholder='account Number'
                            value={signupData.accountNumber}
                            onChange={(e) => {
                                if (e.target.value.length <= 14) {
                                    setSignupData({ ...signupData, accountNumber: e.target.value });
                                }
                            }}
                            required />
                    </div>
                    <div>
                        <label>Branch: </label>
                        <input type='text' placeholder='branch'
                            value={signupData.branch}
                            onChange={(e) => setSignupData({ ...signupData, branch: e.target.value })}
                            required />
                    </div>
                    <div>
                        <label>Registered Phone Number: </label>
                        <input type='number'placeholder='phone Number'
                            value={signupData.phoneNumber}
                            onChange={(e) => {
                                if (e.target.value.length <= 10) {
                                    setSignupData({ ...signupData, phoneNumber:e.target.value });
                                }
                            }}
                            required 
                            />
                    </div>
                    <div>
                        <button type='submit'>Sign up</button>
                        <button type='submit' onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
