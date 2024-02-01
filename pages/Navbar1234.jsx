import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { logIn, logOut } from "@/lib/Reducers/AuthSlice";
import { useUserContext } from "@/context/Context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Navbarredux() {
  const router = useRouter();
  const { isAuth,role, user } = useSelector((state) => state.auth);
//   const { users } = useUserContext();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const dispatch = useDispatch();
  // console.log(users);
  // console.log(users?.name);
  return (
    <>
      {isAuth && role === "2" ? (
        <>
          <nav className="  bg-blue-gray-600  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4">
              {/* <div> */}
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse max-lg:ml-4"
              >
                <small className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-200 ">
                  My Web-site
                </small>
              </Link>
              <div className=" md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                <div className=" max-lg:mr-3 text-end">
                  {!isAuth ? (
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        router.push(`/Login`);
                      }}
                    >
                      Login
                    </button>
                  ) : ( 
                    <Button onClick={toggleOpen}>
                      <BsFillPersonLinesFill />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </nav>
          <Collapse open={open} className="z-40 absolute top-14 left-0">
            <Card className="my-4 mx-auto w-full ">
              <CardBody>
                <div>
                  <div>
                    <h1 className="flex justify-center font-bold text-2xl text-blue-800  dark:text-blue-500">
                      Profile
                    </h1>
                    <div className="bg-whit p-5 shadow-md rounded-md bg-gray-50 mt-5 dark:bg-gray-900">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 dark:text-gray-50">
                        <small clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </small>
                        <small className="tracking-wide">About</small>
                      </div>
                      <div className="mt-3">
                        <div className="grid sm:grid-cols-2 text-sm gap-1 dark:text-gray-100">
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold"> Name</p>
                            <p className="px-4 py-2 bg-gray-200 rounded-md truncate dark:bg-gray-700">
                              {user?.name}
                            </p>
                          </div>
                          {/* <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">Password</p>
                            <div className="px-4 py-2 bg-gray-200 rounded-md dark:bg-gray-700">
                              <p className=" dark:text-blue-500 truncate">
                                {user?.password}
                              </p>
                            </div>
                          </div> */}
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">City</p>
                            <div className="px-4 py-2 bg-gray-200 rounded-md dark:bg-gray-700">
                              <p className=" dark:text-blue-500 truncate">
                                {user?.city}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">
                              Contact No.
                            </p>
                            <p className="px-4 py-2 bg-gray-200 rounded-md truncate dark:bg-gray-700">
                              {user?.number}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mr-5 mt-3">
                        <button
                          type="button"
                          className="block mb-0 bg-transparent text-red-800 text-sm font-semibold rounded-lg hover:bg-red-800 hover:text-white  focus:outline-none focus:shadow-outline focus:bg-red-800 focus:text-white hover:shadow-xs p-3 my-4 border border-red-800 hover:border-transparent dark:hover:bg-red-600 dark:border-red-600 dark:text-red-600 dark:focus:bg-red-600 dark:focus:text-gray-100 dark:hover:text-gray-100"
                          onClick={() => {
                            dispatch(logOut());
                            toggleOpen();
                            router.push(`/`);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </>
      ) : (
        <>
          <nav className="bg-blue-gray-600  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex  flex-wrap  justify-between mx-auto p-3">
              <div>
                <Link
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <small className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
                    Apple Wood
                  </small>
                </Link>
              </div>
              <div className=" md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <div className="max-lg:mr-3 text-end">
                  {!isAuth ? (
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        router.push(`/Login`);
                      }}
                    >
                      Login
                    </button>
                  ) : (
                    <Button onClick={toggleOpen}>
                      <BsFillPersonLinesFill />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </nav>
          {/* {userDataFromApi && ( */}
          <Collapse open={open} className="absolute top-14 left-0">
            <Card className="my-4 mx-auto w-full">
              <CardBody>
                <div>
                  <div>
                    <div className="flex justify-center font-bold text-2xl text-blue-800 underline dark:text-blue-500">
                      Profile
                    </div>
                    <div className="bg-whit p-5 shadow-md rounded-md bg-gray-50 mt-5 dark:bg-gray-900">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 dark:text-gray-50">
                        <small clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </small>
                        <small className="tracking-wide">About</small>
                      </div>
                      <div className="mt-3">
                        <div className="grid sm:grid-cols-2 text-sm gap-1 dark:text-gray-100">
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold"> Name</p>
                            <p className="px-4 py-2 bg-gray-200 rounded-md truncate dark:bg-gray-700">
                              {user?.name}
                            </p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">Password</p>
                            <div className="px-4 py-2 bg-gray-200 rounded-md dark:bg-gray-700">
                              <p className="text-blue-800 dark:text-blue-500 truncate">
                                {user?.password}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">City</p>
                            <div className="px-4 py-2 bg-gray-200 rounded-md dark:bg-gray-700">
                              <p className="text-blue-800 dark:text-blue-500 truncate">
                                {user?.city}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="px-4 py-2 font-semibold">
                              Contact No.
                            </p>
                            <p className="px-4 py-2 bg-gray-200 rounded-md truncate dark:bg-gray-700">
                              {user?.number}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mr-5 mt-3">
                        <button
                          type="button"
                          className="block mb-0 bg-transparent text-red-800 text-sm font-semibold rounded-lg hover:bg-red-800 hover:text-white  focus:outline-none focus:shadow-outline focus:bg-red-800 focus:text-white hover:shadow-xs p-3 my-4 border border-red-800 hover:border-transparent dark:hover:bg-red-600 dark:border-red-600 dark:text-red-600 dark:focus:bg-red-600 dark:focus:text-gray-100 dark:hover:text-gray-100"
                          onClick={() => {
                            dispatch(logOut());
                            toggleOpen();
                            router.push(`/`);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
          {/* )} */}
        </>
      )}
    </>
  );
}

export default Navbarredux;
