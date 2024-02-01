import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import { logIn, setLoading } from "@/lib/Reducers/AuthSlice";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

export default function index() {
  const router = useRouter();

  const [Cookie, setCookie] = useCookies("auth");
  const [showPassword, setShowPassword] = useState(false);

  // const [TokenCookie, setTokenCookie]  useCookies(["token"]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const submitData = async (inputData) => {
    dispatch(setLoading(true));
    // console.log("okk");
    try {
      const res = await axios.get(
        `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD`
      );
      const getUser = res.data.filter((data) => inputData.name === data.name);

      if (getUser.length === 0) {
        toast.error(`name is Not Found`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (getUser[0].password === inputData.password) {
        dispatch(logIn(getUser[0]));
        setCookie("role", getUser[0]?.role, { expires });
        setCookie("token", getUser[0]?.name, { expires });
        if (getUser[0].role === "1") {
          router.push("/Admin");
          toast.success("welcome to Admin Page ", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          router.push("/");
          toast.success("welcome to web-site ", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        toast.error("Wrong Password", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (errors) {
      throw errors.massage;
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      {/* {isLoading && <Loder />} */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(submitData)}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="Username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UserName
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name", {
                    required: true,
                    pattern: /^([a-z])([A-Z])/i,
                    minLength: 2,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <small className="text-red-500 pl-5">
                    This field is required
                  </small>
                )}
                {errors?.name?.type === "pattern" && (
                  <small className="text-red-500 pl-5">
                    This pattern is required
                  </small>
                )}
                {errors?.name?.type === "minLength" && (
                  <small className="text-red-500 pl-5">Min-2</small>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-96 bottom-40 mt-7 mr-6 mb-4 p-1 cursor-pointer"
                >
                  {showPassword ?  <BiShow />:<BiHide /> } 
                </button>
                {errors?.Password?.type === "required" && (
                  <small className="text-red-500  pl-5">
                    This field is required
                  </small>
                )}
                {errors?.Password?.type === "pattern" && (
                  <small className="text-red-500 pl-5">
                    Please enter a valid password
                  </small>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10  text-center text-sm text-gray-500">
            Not a member?  
            <Link
              href="/Register"
              className="font-semibold leading-6 ml-1 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
