import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
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

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };


  return (
    <div className="flex items-center justify-between w-full px-8 py-4 bg-black bg-opacity-70 fixed top-0 left-0 z-50">
      <img
        src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
        alt="logo"
        className="h-12"
      />
      {user ? (
        <div className="flex items-center space-x-4">
          <select  className="p-2 m-2 bg-yellow-700 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-6 mx-4 my-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-lg hover:from-purple-700 hover:to-pink-800 transition-all duration-300"
            >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full"
            alt="usericon"
            src={user?.photoURL || USER_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>Loading...</div> // Optionally show a loading state while user info is being fetched
      )}
    </div>
  );
};

export default Header;
