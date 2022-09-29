import React, { createContext, useState } from 'react';

export const ActiveUsersContext = createContext(null);

const ActiveUsersProvider = ({children}) => {
  const [activeUsers, setActiveUsers] = useState();

  return (
    <ActiveUsersContext.Provider value={{activeUsers, setActiveUsers}}>
      {children}
    </ActiveUsersContext.Provider>
  );
};

export default ActiveUsersProvider;