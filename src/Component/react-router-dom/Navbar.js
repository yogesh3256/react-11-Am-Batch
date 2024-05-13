import React, { useState } from 'react';
import Login from './Login';

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false)
 const handleOpen = () => { setOpenLogin(true) }
  const handleClose = () => { setOpenLogin(false) }
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
        <div>
          <button className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </div>
        <div>
          <button
            onClick={handleOpen}
            className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </nav>
      {
        openLogin &&
        <Login
          open={openLogin}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      }
    </>
  );
}

export default Navbar;
