import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const api = `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD`;
const initialState = {
  user: [],
  isLoading: true,
  isError: null,
};
const usersData = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setUserData, setLoading, upDateUser } = usersData.actions;
export default usersData.reducer;
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(api);
    dispatch(setUserData(res.data));
  } finally {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, "1000");
  }
};
export const editUserData = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.put(`${api}/${data.id}`, data);
    toast.success("Edit Successfully ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};
export const addUserData = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.post(`${api}`, data);
    toast.success("Register Successfully ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};
export const deleteUserData = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.delete(`${api}/${id}`);
    toast.success("User Deleted Successfully ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};