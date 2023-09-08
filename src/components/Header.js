import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseSetup";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logo, userIcon } from "../../utils/constants";

const Header = () => {
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

  return (
    <div className="flex w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-52" src={logo} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="w-11 h-11 rounded mt-2"
            src={userIcon}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 rounded text-black m-2 w-11 h-11 mt-2 text-sm font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
