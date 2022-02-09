import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const values = { user, setUser };

  return (
    <UserContext.Provider value={values}> {children}</UserContext.Provider>
  );
};

export default UserContext;

// Ben artık bu context'i herhangi bir componentimde kullanabiliyor durumdayım. Bunun için bu context'i import app.js'e import ediyoruz.
