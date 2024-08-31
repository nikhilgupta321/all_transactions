import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddTransactions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    journal: "",
    ref_num: "",
    title: "",
    remark: "",
    country: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.journal ||
      !formData.ref_num ||
      !formData.title ||
      !formData.country
    ) {
      console.log("fill all the fields");
      alert("Fill all the details");

      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/items/",
      formData
    );
    
    console.log(response);
    console.log("data submited ", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Link
          to={`/transactions/adminTransactions`}
          className="w-16 p-2 mb-4 text-center text-gray-500 bg-gray-200 rounded "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <button
          type="submit"
          className="w-24 p-2 mb-4 text-gray-100 rounded bg-sky-600"
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div>Name *</div>
          <input
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
            type="text"
          />
        </div>
        <div>
          <div>EMAIL *</div>
          <input
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
            type="text"
          />
        </div>
        <div>
          <div>PHONE *</div>
          <input
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
            type="number"
          />
        </div>
        <div className="col-span-3">
          <div>JOURNAL *</div>
          <input
            required
            value={formData.journal}
            onChange={(e) => {
              setFormData({ ...formData, journal: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
          />
        </div>
        <div>
          <div>REFNUMBER *</div>
          <input
            required
            value={formData.ref_num}
            onChange={(e) => {
              setFormData({ ...formData, ref_num: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
            type="text"
          />
        </div>
        <div className="col-span-2">
          <div>Title *</div>
          <input
            required
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600`}
            type="text"
          />
        </div>
        <div className="col-span-2">
          <div>REMARK </div>
          <input
            value={formData.remark}
            onChange={(e) => {
              setFormData({ ...formData, remark: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 `}
            type="text"
          />
        </div>
        <div>
          <div>COUNTRY</div>
          <input
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
            className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600`}
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default AddTransactions;
