// Burada userContext'den aldığımız bilgileri kullanacağız.

import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState("");

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        userName: "mseven",
        bio: "lorem ipsum doler",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>
      {/* Burda loading true ise loading göster değilse Login'i göster demiş olduk. */}
      <br />
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;

// JSON.stringify(data) data objesini JSON'a çevirir.
// JSON.parse(data) JSON'dan objeye çevirmeye yarar.
