import './App.css';
import Home from './Home';
import Registration from './Forms/Registration';
import Login from './Forms/Login';
import AccountDetails from './Forms/AccountDetails';
import { useState } from "react";
import DepositForm from './Forms/DepositForm';
import WithdrawForm from './Forms/WithdrawForm';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const [customer, setCustomer] = useState();
  const [updatedBalance, setUpdatedBalance] = useState(0);
  const updateBalance = (newBalance) => {
    setUpdatedBalance(newBalance)
  }
  const updateCustomer = (userData) => {
    setCustomer(userData);
  };
  const handleLogout = () => {
    navigate("/login")
    setCustomer(null)
  }
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className='nav-link'>
              Home
            </Link>
          </li>
          {!customer ? (
            <>
              <li>
                <Link to="/login" className='nav-link'>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className='nav-link'>
                  Register
                </Link>
              </li>
            </>)
            : (
              <>
                <li>
                  <Link to='/accountdetails' className='nav-link'>
                    AccountDetails
                  </Link>
                </li>
                <li><Link className="nav-link" to="/deposit">Deposit</Link></li>
                <li><Link className="nav-link" to='/withdraw'>Withdraw</Link></li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>

              </>)
          }
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login updateCustomer={updateCustomer} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/accountdetails" element={<AccountDetails customer={customer} updatedBalance={updatedBalance} />} />
        <Route path="/deposit" element={<DepositForm customer={customer} updateBalance={updateBalance} />} />
        <Route path="/withdraw" element={<WithdrawForm customer={customer}  updateBalance={updateBalance}/>} />
      </Routes>
    </div>
  );
}

export default App;
