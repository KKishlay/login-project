import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import * as Yup from "yup";

const Logout = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const initialValues = {
    company: "Creative code inc",
    name: "",
    email: user.email,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    aboutMe: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().required("Required!"),
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    address: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    country: Yup.string().required("Required!"),
    postalCode: Yup.string().required("Required!"),
    aboutMe: Yup.string().required("Required!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // console.log("form values", formik.values);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="flex flex-col h-screen p-[30px]">
      <div className="flex justify-between">
        <h1 className="text-[35px] font-medium">Profile</h1>
        <button
          className="w-[100px] p-[10px]] bg-slate-400"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="flex  mt-[30px]">
          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              disabled="true"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("company")}
            />
            {formik.touched.company && formik.errors.company ? (
              <div className="text-red-700">{formik.errors.company}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-700">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled="true"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-700">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="flex mt-[30px]">
          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-[700px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-700">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-[670px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-700">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col mt-[30px]">
          <label className="text-[20px] ml-[13px]" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-[85%] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-700">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="flex mt-[30px]">
          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-700">{formik.errors.city}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-700">{formik.errors.country}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label className="text-[20px] ml-[13px]" htmlFor="postalCode">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-[450px] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
              {...formik.getFieldProps("postalCode")}
            />
            {formik.touched.postalCode && formik.errors.postalCode ? (
              <div className="text-red-700">{formik.errors.postalCode}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col mt-[30px]">
          <label className="text-[20px] ml-[13px]" htmlFor="aboutMe">
            About Me
          </label>
          <textarea
            type="text"
            id="aboutMe"
            name="aboutMe"
            className="w-[85%] ml-[15px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] p-[8px]"
            {...formik.getFieldProps("aboutMe")}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe ? (
            <div className="text-red-700">{formik.errors.aboutMe}</div>
          ) : null}
        </div>
        <button
          className="py-[17px] px-[30px] w-[300px] mx-auto mt-[10px] bg-black text-white border-none text-[14px] border-r-[3px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Logout;
