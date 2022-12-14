import React, { useEffect, useState } from "react";
import "./login.scoped.css";
import { PrimaryButton } from "../../components/button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { saveData } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type Results = {
  data: [];
};

const Login = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const getUserData = async () => {
    try {
      const { data }: Results = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data);
      if (data.length <= 0) {
        return;
      }
      const Login = data.filter((x: any) => {
        return x.email == email && x.username == password;
      });
      setIsSuccess((prev) => !prev);
      if (Login.length > 0) {
        toast.success("Login Success!", { theme: "colored" });
        dispatch(saveData(Login));
        setTimeout(() => {
          navigation("/home");
        }, 2000);
      }
      if (Login.length <= 0) {
        toast.error("Login Error!", { theme: "colored" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Error!", { theme: "colored" });
    }
  };

  useEffect(() => {
    // getUserData();
  }, []);
  return (
    <>
      <div className="container">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            {" "}
            <p className="text-login">Login Page</p>
            <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <div className="btn-wrapper">
              <PrimaryButton btnText="Login" onClick={() => getUserData()} href={undefined} />
            </div>
            <ToastContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Login;
