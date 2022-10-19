import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

const InfoUser = ({ children }) => {

    const [user, setUser] = useState("Unknown");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

export default InfoUser;