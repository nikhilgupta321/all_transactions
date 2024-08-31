import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../helper/fetchData";

const AdminTransactions = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchData("http://localhost:3000/api/items/");
      setItems(res);
    })();
  }, []);

  if (items.length == 0) {
    return <div>Loading</div>;
  }

  return (
    <div className=" w-[140vw]">
      <div className="flex gap-4">
        <Link
          className="w-24 p-2 text-center bg-green-700 rounded text-slate-200"
          to={`/transactions/adminTransactions/addTransactions`}
        >
          Add New
        </Link>
        <input
          className="w-auto border-2 border-gray-300 rounded px-2 focus:outline-emerald-600"
          type="date"
        />
        <input
          className="w-auto border-2 border-gray-300 rounded px-2 focus:outline-emerald-600"
          type="date"
        />
        <button className="w-auto px-4 text-center bg-blue-600 rounded text-slate-200">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <button className="w-auto p-2 text-center bg-gray-500 rounded text-slate-200">
          All
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          PAYUBIZ
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          PAYUBIZ USD
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          PAYUMONEY
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          RAZORPAY
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          ISGPAY
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          PAYPAL1
        </button>
        <button className="w-auto p-2 text-center bg-cyan-600 rounded text-slate-200">
          PAYPAL2
        </button>
        <button className="w-auto p-2 text-center bg-gray-500 rounded text-slate-200">
          PAID
        </button>
        <button className="w-auto p-2 text-center bg-gray-500 rounded text-slate-200">
          FREE
        </button>
        <button className="w-auto p-2 text-center bg-gray-500 rounded text-slate-200">
          NOT USED
        </button>
      </div>
      <div >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light border-slate-700">
                <thead className="border-b font-medium ">
                  <tr>
                    {/* <th width={51} nowrap="" hidden="">
                        <input
                          type="checkbox"
                          name="checkall"
                          className="checkall"
                          onchange="_call(this)"
                        />
                      </th> */}
                    <th
                      scope="col"
                      className="border px-2 py-2 text-lg "
                      nowrap=""
                    >
                      S. NO.
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      REF. NUM.
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      TXN ID
                    </th>
                    <th
                      scope="col"
                      className="border px-4 py-2 text-lg w-[20vw]"
                    >
                      ARTICLE TITLE
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg w-[20vw] ">
                      JOURNAL NAME
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      PHONE
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      NAME
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      EMAIL
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      REMARK
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      COMPANY
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      COUNTRY
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      AMOUNT
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      STATUS
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      DATE CREATED
                    </th>
                    <th scope="col" className="border px-2 py-2 text-lg ">
                      IS USED
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr class="border  border-black text-xl">
                      <td className="border px-4 py-4 font-medium ">
                        {item.transactionid}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.refnumber}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.txnid}
                      </td>
                      <td className="border px-4 py-4 font-medium w-[20vw]">
                        {item.title}
                      </td>
                      <td className="border px-4 py-4 font-medium w-[20vw]">
                        {item.journal}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.phone}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.name}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.email}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.remark}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        RazorPay
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {item.country}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        {" "}
                        {item.amount}
                      </td>
                      <td className="border px-4 py-4 font-medium ">
                        <button
                          className={`text-white rounded-lg text-sm px-2 uppercase ${
                            item.status === "failed"
                              ? "bg-red-600"
                              : `${
                                  item.status === "pending"
                                    ? "bg-yellow-600"
                                    : "bg-green-600"
                                }`
                          }`}
                        >
                          {item.status}
                        </button>
                      </td>
                      <td className="  border px-4 py-4 font-medium ">
                        {item.creation}
                      </td>
                      <td className=" border px-4 py-4 font-medium ">
                        {item.isused === "N" ? (
                          <tr>N</tr>
                        ) : (
                          <tr>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-12 h-6 text-green-700"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </tr>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTransactions;
