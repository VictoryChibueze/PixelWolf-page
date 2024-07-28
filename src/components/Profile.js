import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
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
              <td>23.5 BTC</td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td>180 ETH</td>
            </tr>
            <tr>
              <td>Doge</td>
              <td>239,500 DOGE</td>
            </tr>
            <tr>
              <td>Ripple</td>
              <td>65,100 XRP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;
