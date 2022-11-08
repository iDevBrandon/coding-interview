import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "./success";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/helper";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateUserForm({ formId, formData, setFormData }) {
  // const [formData, setFormData] = useReducer(formReducer, {});

  const {isLoading, isError, error, data} = useQuery(["user", formId], () => getUser(formId));

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>{error}</div>

  const {name, avatar, salary, date, email, status} = data
  const [firstname, lastname] = name? name.split(' ') : formData

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");
  };

  if (Object.keys(formData).length > 0) {
    return <Success message={"Data added"} />;
  }
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          defaultValue={firstname}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          defaultValue={lastname}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          defaultValue={email}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          onChange={setFormData}
          defaultValue={salary}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          defaultValue={date}
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="Active"
            id="radioDefault1"
            name="status"
            onChange={setFormData}
            defaultValue={status== 'Active'}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value="Inactive"
            id="radioDefault2"
            name="status"
            onChange={setFormData}
            defaultValue={status== 'Inactive'}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update{" "}
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
}
