import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="z-10 fixed top-0 w-full flex h-14 bg-blue-500 items-center justify-between shadow-md">
        <div className="m-3 text-xl text-slate-100"><Link className="text-slate-100" to="/transactions">Home</Link></div>
        <div>
          <form className="search">
            <input className="pl-4 w-96 h-8 rounded-md focus:outline-emerald-600" placeholder="Search..." type="text" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} className="search-icon text-white text-xl ml-2" />
            </button>
          </form>
        </div>
        <div className="flex gap-2 text-xl">
          <div className="m-3 text-slate-100">User : Sushil</div>
          <Link className="m-3 text-slate-100" to="/" target="_blank" rel="noopener noreferrer">Site</Link>
          <div className="m-3  text-slate-100"><button >Logout</button></div>
        </div>
      </div>
      <div className="p-6 pt-20 text-base">
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
