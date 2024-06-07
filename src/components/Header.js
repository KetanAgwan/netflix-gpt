import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // redirect to the error page
        console.log(error);
      });
  };

  return (
    <div className="absolute z-10 h-28 w-full bg-gradient-to-b from-black flex items-center justify-between">
      <div className="h-full">
        <img
          className="h-3/4 w-auto mx-24 my-5"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && <div className=" h-full flex items-center justify-center p-3 gap-3">
        <img className="h-2/5 rounded" src={user?.photoURL} alt="Profile IMG" />
        <button
          onClick={handleSignOut}
          className="bg-transparent border rounded border-gray-100 text-white px-3 h-2/5"
        >
          SignOut
        </button>
      </div>}
    </div>
  );
};

export default Header;
