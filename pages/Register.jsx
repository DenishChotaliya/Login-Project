import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Loder from "./Loder";
import { useForm } from "react-hook-form";
import Navbar from "./compo/Navbar";
import { setLoading } from "@/lib/Reducers/AuthSlice";
import { addUserData } from "@/lib/Reducers/todoSlice";
const AddItem = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isLoading } = useSelector((state) => state.todos);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));  
    }, "1000");
  });
  const submitData = (data) => {
    const userDetails = { ...data, role: "2" };
    dispatch(addUserData(userDetails));
    router.push("/Login");
  };
  if (isLoading) {
    return <Loder />;
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2 "
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            pattern: /^([a-z])([A-Z])/i,
            minLength: 2,
          })}
        />
        {errors?.name?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.name?.type === "pattern" && (
          <small className="text-red-500 pl-5">Please enter a valid Name</small>
        )}
        {errors?.name?.type === "minLength" && (
          <small className="text-red-500 pl-5">Min-2</small>
        )}
        <input
          type="Password"
          placeholder="Password"
          className="border border-slate-500 px-8 py-2 "
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
          })}
        />
        {errors?.password?.type === "required" && (
          <small className="text-red-500  pl-5 ">This field is required</small>
        )}
        {errors?.password?.type === "pattern" && (
          <small className="text-red-500  pl-5 ">
            Please enter a valid password
          </small>
        )}
        <input
          type="tel"
          placeholder="Number"
          maxLength={10}
          className="border border-slate-500 px-8 py-2 "
          {...register("number", {
            required: true,
            pattern: /[0-9]{3}[0-9]{3}[0-9]{4}/,
          })}
        />
        {errors?.number?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.number?.type === "pattern" && (
          <small className="text-red-500 pl-5">
            Please enter a valid 8-Digit number
          </small>
        )}
        <input
          type="text"
          placeholder="city"
          className="border border-slate-500 px-8 py-2 "
          {...register("city", {
            required: true,
            pattern: /^([a-z])([A-Z])/i,
          })}
        />
        {errors?.city?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.city?.type === "pattern" && (
          <small className="text-red-500 pl-5">
            {" "}
            Please enter a valid city
          </small>
        )}
        <button
          className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default AddItem;
