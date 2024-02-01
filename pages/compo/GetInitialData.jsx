import {
  logOut,
  setInitialData,
  setLoading,
} from "@/lib/Reducers/AuthSlice";
import { getUsers } from "@/lib/Reducers/todoSlice";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

const GetInitialData = () => {
  const api = `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD`;

  const dispatch = useDispatch();
  
  const [cookie] = useCookies(["auth"]);
  const initialData = async () => { 
    try {
      if (cookie.token !== "" && cookie.token !== undefined) {
        const res = await axios.get(api);
        const filterUser = res.data.filter((user) => user.name === cookie.token);
        if (filterUser.length !== 0) {
          dispatch(setInitialData(filterUser[0]));
        } else {
          dispatch(logOut());
        }
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      await initialData();
      dispatch(getUsers());
    };
    fetchDataAndDispatch();
  });
  return null;
};
export default GetInitialData;

// const initialData = () => async (dispatch) => {
//   const cookies = useCookies(["token"]);
//   try {
//     if (cookies.token !== "" && cookies.token !== undefined) {
//       const token = atob(cookies?.token);

//       const res = await axios.get(api);
//       const filterUser = res.data.filter((users) => users.name === token);
//       if (filterUser.length !== 0) {
//         dispatch(setInitialData(filterUser[0]));
//         console.log(`Geting Data`);
//       } else {
//         console.log(`Name Not Found`);
//         dispatch(logOut());
//       }
//     }
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
