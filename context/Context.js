import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Usercontext = createContext();
export function Context({ children  }) {
  const [userdata, setUserdata] = useState([]);
  const {  user } = useSelector((state) => state.auth);

  useEffect(()=>{
    // const dk = user
    setUserdata(user)
  },[user])


  return (
    <Usercontext.Provider value={{ userdata }}>
      {children}
    </Usercontext.Provider>
  );
}
export function useUserContext() {
  return useContext(Usercontext);
}
