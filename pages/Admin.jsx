import { useEffect } from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import Loder from "./Loder";
import Navbar12 from "./Navbar12";
import { deleteUserData, getUsers } from "@/lib/Reducers/todoSlice";

function Admin() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDeleteTodo = (id) => {
    dispatch(deleteUserData(id));
  };

  if (isLoading) {
    return <Loder />;
  }

  return (
    <>
      <Navbar12 className="mb-12" />
      <div className="mt-12">
        {isLoading ? (
          <Loder />
        ) : (
          <div className="mt-12">
            {user?.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="p-4  border items-start border-slate-300 my-3 flex justify-between "
                >
                  <div>
                    <h3>Id: {todo.id}</h3>
                    <h3>Name: {todo.name}</h3>
                    <h3>Password: {todo.password}</h3>
                    <h3>Number: {todo.number}</h3>
                    <h3>City: {todo.city}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/edit/${todo.id}`}>
                      <button>
                        <HiPencilAlt size={25} />
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteTodo(todo.id)}>
                      <HiOutlineTrash size={25} color="red" />
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
