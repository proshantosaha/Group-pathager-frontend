import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// export type UserDataType = {
//     authToken : string;
//     userName : string;
//     is
// }

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    const parseUserData = JSON.parse(userDataCookie || "{}");
    setUserData(parseUserData);

    const storageEventListener = (event:Storage) => {
      // :StorageEvent
      if (event.key === "userData") {
        const updateUserData = JSON.parse(event.newValue || "{}");
        setUserData(updateUserData);
      }
    };

    window.addEventListener("storage", storageEventListener);

    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
  }, []);

  return userData;
};

export default useUserData;
