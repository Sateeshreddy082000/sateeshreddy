import React from 'react';
import './AccountDetails.css';
import logoImage from "../../src/images/Logo.png";
const AccountDetails = ({ customer,updatedBalance }) => {
    return (
        <div className='account'>
            <div className='account-img'></div>
            <div className='account-text'>
            <img src={logoImage}  alt='sateesh bank'/>
            <h2>Account Details :</h2>
            <p>Username:  {customer.username}</p>
            <p>Account Number:  {customer.accountNumber}</p>
            <p>Branch:  {customer.branch}</p>
            <p>Phone Number:  {customer.phoneNumber}</p>
            {/*<p>Available Balance: {customer.balance}</p>*/}
            <p>Available Balance: <span style={{color:"green", fontSize:"24px", fontWeight:"600"}}> {updatedBalance === 0 ? customer.balance : updatedBalance}</span> Balance</p>
        </div>
        </div>
    )
}

export default AccountDetails;
