import { logOut } from "@/lib/Reducers/AuthSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
// import "../app/globals.css";

export default function Navbar2() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex justify-between bg-slate-800 items-center px-8 py-3">
        <Link href={""} className="text-white font-bold">
          {" "}
          Apple Wood{" "}
        </Link>
        <div className="flex items-start">
          {/* <Link href={"/Login"} className="bg-slate-800 text-white p-2">
            Login
          </Link> */}
          <Link href={"/Login"} className="ml-4">
            <button
              className="text-white flex pt-2"
              onClick={() => {
               
                dispatch(logOut());
              }}
            >
              Log-out
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
