import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseSetup";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-11 h-11 rounded mt-4"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 rounded text-black m-2 w-11 h-11 mt-4 text-sm font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
