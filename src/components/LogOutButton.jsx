import React from "react";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };

  return (
    <button className="btn btn-sm btn-error" onClick={() => handleLogout()}>
      Log Out
    </button>
  );
};

export default LogOutButton;
