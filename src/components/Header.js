import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

// https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // redirect to the error page
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the header component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 h-28 w-full bg-gradient-to-b from-black flex items-center justify-between">
      <div className="h-full">
        <img className="h-3/4 w-auto mx-24 my-5" src={LOGO_URL} alt="logo" />
      </div>
      {user && (
        <div className=" h-full flex items-center justify-center p-3 gap-3">
          <img
            className="h-2/5 rounded"
            src={user?.photoURL}
            alt="Profile IMG"
          />
          <button
            onClick={handleSignOut}
            className="bg-transparent border rounded border-gray-100 text-white px-3 h-2/5"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
