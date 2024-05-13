import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

function Login(props) {
  const [loginData, setLoginData] = React.useState([]); // State to hold login data
  const [showRegistration, setShowRegistration] = React.useState(false);


  const {
    register,
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    let tempData = [...loginData];
    tempData.push(data);
    setLoginData(tempData);
    localStorage.setItem('loginData', JSON.stringify(tempData)); // Save tempData to localStorage

    props.handleClose();
    reset();
  };




  const handleRegisterToggle = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-red-600 border border-red-600 p-1 rounded px-3 text-end  "
              onClick={() => {
                props.handleClose();
                reset();
              }}
            >
              X
            </button>
          </div>

          {showRegistration ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" mx-auto max-w-md px-4">
                <div className="text-center">
                  <h1 className="font-normal text-3xl mt-7">Register</h1>
                  <p className="text-sm mt-4">
                    Please enter your details to create an account:
                  </p>
                </div>
                <div className="mt-8">
                  <div className="mb-4">
                    <TextField
                      label="Full Name"
                      placeholder="Full Name"
                      fullWidth
                      name="fullname"
                      {...register("fullname")}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      label="E-mail"
                      placeholder="Email"
                      fullWidth
                      name="email"
                      {...register("email")}
                    />
                  </div>
                  <div className="relative mb-4">
                    <TextField
                      className="border-black"
                      label="Password"
                      placeholder="Password"
                      type="password"
                      name="password"
                      {...register("password")}

                      fullWidth
                    />
                  </div>
                  <button className="bg-black text-white p-4 w-full rounded font-bold">
                    Register
                  </button>
                  <div className="flex justify-center mt-4">
                    <p className="text-gray-400 mr-2">Already Have an Account?</p>
                    <h1
                      onClick={handleRegisterToggle}
                      className="underline text-gray-400 hover:text-black"
                    >
                      Login
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" mx-auto max-w-md px-4">
                <div className="text-center">
                  <h1 className="font-normal text-3xl mt-7">Login</h1>
                  <p className="text-sm mt-4">
                    Please enter your e-mail and password:
                  </p>
                </div>
                <div className="mt-8">
                  <div className="mb-4">
                    <TextField
                      label="E-mail"
                      placeholder="Email"
                      fullWidth
                      name="email"
                      {...register("email")}
                    />
                  </div>
                  <div className="relative mb-4">
                    <TextField
                      className="border-black"
                      label="Password"
                      placeholder="Password"
                      type="password"
                      name="password"
                      {...register("password")}

                      fullWidth
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <h1 className="font-mono text-xs mr-2 underline text-gray-500 hover:text-black">
                        Forgot Password?
                      </h1>
                    </div>
                  </div>
                  <button className="bg-black text-white p-4 w-full rounded font-bold">
                    Login
                  </button>
                  <div className="flex justify-center mt-4">
                    <p className="text-gray-400 mr-2">New customer?</p>
                    <h1
                      onClick={handleRegisterToggle}
                      className="underline text-gray-400 hover:text-black"
                    >
                      Create an account
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
