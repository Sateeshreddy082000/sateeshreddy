import React, { useState } from 'react';
import './DepositForm.css';
import axios from "axios";
import Swal from "sweetalert";
import logoImage from "../../src/images/Logo.png";

const DepositForm = ({customer,updateBalance}) => {
    const [depositData, setDepositData] = useState({
        username: customer.username,
        accountNumber: customer.accountNumber,
        date: "",
        depositAmount: "",
        depositType: "",
    });
    const handleDeposit = async(e) => {
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:3001/api/deposit",depositData);
            updateBalance(response.data.balance)
            Swal({
                title: "Deposit Successful!",
                text: `Amount deposited: ${depositData.depositAmount}`,
                icon: "success",
              });

        }
        catch (error) {
            console.error("Deposit failed", error);
          }

    };
    const handleClear = () => {
        setDepositData({
            date: "",
            depositAmount: "",
            depositType: "",
        })
    }
    return (
        <div className='deposit'>
            <div className='deposit-img'></div>
            <div className='deposit-text'>
            <img src={logoImage}  alt='sateesh bank'/>
            <form onSubmit={handleDeposit}>
                <h2>Deposit Form</h2>
                <p>Username:{customer.username}</p>
                <p>Account Number:{customer.accountNumber}</p>
                <label>Date:</label>
                <input type='date'
                    value={depositData.date}
                    on onChange={(e) => setDepositData({ ...depositData, date: e.target.value })}
                    required
                />
                <label>Deposit Amount:</label>
                <input type='number'placeholder='Deposit Amount'
                    value={depositData.depositAmount}
                    onChange={(e) => setDepositData({ ...depositData, depositAmount: e.target.value })}
                    required
                />
                <label>Deposit Type:</label>
                <input type='text' placeholder='Deposit Type'
                    value={depositData.depositType}
                    onChange={(e) => setDepositData({ ...depositData, depositType: e.target.value })}
                    required
                />
                <button type='submit'>Deposit</button>
                <button type='submit' onClick={handleClear}>Clear</button>
            </form>

        </div>
        </div>
    )
}

export default DepositForm;
