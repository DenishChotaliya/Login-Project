import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,  
  isLoading: true,
  isError: null,
  role: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      const { role } = action.payload;
      state.user = action.payload;
      state.isAuth = true;
      // console.log("setInitialData");
      state.role = role;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuth = false;
      state.isLoading = false;
      // console.log("logOut")
      state.isError = null;
      state.role = null;
    },
    logIn: (state, action) => {
      const { role  } = action.payload;
      state.user = action.payload;
      state.isAuth = true;
      state.role = role;
    },
  },
});

export const { setLoading, logIn, logOut, setInitialData } = AuthSlice.actions;
export default AuthSlice.reducer;


// export const initialData = () => async (dispatch) => {
//   const cookies = parseCookies()
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

// const [cookies] = useCookies(["token"]);

// const [RolCookie, setRolCookie] = useCookies(["rol"]);
// const [TokenCookie, setTokenCookie] = useCookies(["token"]);
// setRolCookie(`rol=${btoa(RolCookie)}; expires=${expires}; path=/`);
// setTokenCookie(`token=${btoa(TokenCookie)}; expires=${expires}; path=/`);
// import { createSlice } from "@reduxjs/toolkit";
// import { destroyCookie, parseCookies } from "nookies";
// import axios from "axios";
// import { useCookies } from "react-cookie";

// const api = `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD`;
// const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString();

// const initialState = {
//   user: {},
//   isAuth: false,
//   isLoading: true,
//   isError: null,
//   rol: null,
// };
// // console.log(api);
// const AuthSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setInitialData: (state, action) => {
//       const { rol } = action.payload;
//       state.user = action.payload;
//       state.isAuth = true;
//       state.rol = rol;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     logOut: (state) => {
//       destroyCookie(null, "rol");
//       destroyCookie(null, "token");
//       state.user = null;
//       state.isAuth = false;
//       state.isLoading = false;
//       state.isError = null;
//       state.rol = null;
//     },
//     logIn: (state, action) => {
//       // const [RolCookie, setRolCookie] = useCookies(['rol']);
//       // const [TokenCookie, setTokenCookie] = useCookies(['token']);
//       const { rol , name } = action.payload;
//       state.user = action.payload;
//       state.isAuth = true;
//       state.rol = rol;
//       state.name = name;
//       // setRolCookie(`rol=${btoa(rol)}; expires=${expires}; path=/`);
//       // setTokenCookie(`token=${btoa(name)}; expires=${expires}; path=/`);
//       document.cookie = `rol=${btoa(rol)}; expires=${expires}; path=/`;
//       document.cookie = `token=${btoa(name)}; expires=${expires}; path=/`;

//     },
//   },
// });

// export const { setLoading, logIn, logOut, setInitialData } = AuthSlice.actions;
// export default AuthSlice.reducer;

// export const initialData = () => async (dispatch) => {
//   try {
//     const cookies = parseCookies();
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
