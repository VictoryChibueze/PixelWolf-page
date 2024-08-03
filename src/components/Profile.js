import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import { LuArrowUpDown } from "react-icons/lu";
function Profile() {
  return (
    <section className="profile">
      <div className="account-info">
        <h3>Trader Profile</h3>
        <img
          src="/github avatar.webp"
          alt="Trader-profile"
          className="user-img"
        />
        <p className="username">Han Ji Pyeong</p>
        <Link to="/">Edit Profile</Link>

        <table>
          <thead>
            <tr>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joined</td>
              <td className="user-creation__date">June 22,2020</td>
            </tr>
            <tr>
              <td>Asset Total</td>
              <td className="user-asset">$1,312,900</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="asset">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td>
                23.5 <span>BTC</span>
              </td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>
                180 <span>ETH</span>
              </td>
            </tr>
            <tr>
              <td>Doge</td>
              <td>
                239,500 <span>DOGE</span>
              </td>
            </tr>
            <tr>
              <td>Ripple</td>
              <td>
                65,100 <span>XRP</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/assets">More assets...</Link>
      <div className="btn-container">
        <button>
          <LuArrowUpDown />
          Trade Now
        </button>
      </div>
    </section>
  );
}

export default Profile;
