import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Navbar3 from "../compo/Navbar3";
import { editUserData } from "@/lib/Reducers/todoSlice";

const EditItem = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      password: data.password,
      number: data.number,
      city: data.city,
    },
  });

  const submitData = (data) => {
    dispatch(editUserData(data));
    router.push("/Admin");
  };
  return (
    <>
      <Navbar3 />
      <div className="py-5">
        <form className="flex flex-col gap-3">
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
            <small className="text-red-500 pl-5">
              Please enter a valid name
            </small>
          )}
          {errors?.name?.type === "minLength" && (
            <small className="text-red-500 pl-5">Min-2</small>
          )}
          <input
            type="Password"
            placeholder="Password"
            className="border border-slate-500 px-8 py-2"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
            })}
          />
          {errors?.password?.type === "required" && (
            <small className="text-red-500  pl-5 ">
              This field is required
            </small>
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
              Please enter a valid number
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
              Please enter a valid city
            </small>
          )}

          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit(submitData)}
              className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const itemId = params.id;

  const response = await fetch(
    `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD/` + itemId
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default EditItem;
