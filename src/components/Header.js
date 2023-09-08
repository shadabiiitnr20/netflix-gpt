import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseSetup";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logo, userIcon } from "../../utils/constants";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const showDropDownHandle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-52" src={logo} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          <img
            onClick={showDropDownHandle}
            className="w-11 h-11 rounded mt-2 hover:cursor-pointer "
            src={userIcon}
            alt="usericon"
          />
          <div
            className={`${
              showDropdown
                ? `top-full opacity-100 visible`
                : "top-[110%] invisible opacity-0"
            } absolute right-24 z-40 w-28 rounded border-[.5px] border-light bg-black text-white font-semibold p-2 shadow-card transition-all -mt-8`}
          >
            {user.displayName}
          </div>

          <button
            onClick={handleSignOut}
            className="hover:cursor-pointer bg-red-700 rounded text-white m-2 w-11 h-11 mt-2 text-sm font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
