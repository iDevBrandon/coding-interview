import React from "react";
import { useDispatch } from "react-redux";
import { fetchRandomUser, logout } from "../../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>Personal Libaray</h1>
      <button className="user-btn" onClick={() => dispatch(fetchRandomUser())}>
        Get User Data
      </button>
      <button className="logout-btn" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Header;
