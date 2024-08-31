import React from 'react'
import { Link } from 'react-router-dom'


export const Card = () => {
  return (
    <div className="w-96 h-41 text-white rounded-lg shadow-md bold" >
      <div className="p-3 text-xl text-center bg-gray-500">TRANSACTIONS</div><hr />
      <div className="p-3 text-2xl text-center bg-zinc-500">444</div><hr />
      <Link to={"/transactions/adminTransactions"}>
        <div className="p-3 text-xl text-center bg-gray-500">BROWSE</div>
      </Link>
    </div>

  )
}

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-8 m-10">
      <Card />
    </div>
  )
}

export default Dashboard