import TextInput from "../components/ui/TextInput";
import { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <section className="flex gap-6 lg:gap-0 flex-col lg:flex-row w-full">
      <div className="w-full lg:w-[35%] px-5 md:px-20 h-full">
        <div className="flex flex-col justify-center">
          <Link className="pt-6 pb-32 lg:pt-6 lg:pb-16" to="/">
            <img className="h-6" src="/images/Logo.svg" alt="logo" />
          </Link>
          <h2 className="font-medium text-[44px]">Sign up</h2>
          <h1 className="font-bold  mb-9 text-primary/70 whitespace-nowrap">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-bold text-black">
              Signup
            </Link>
          </h1>
          <div className="flex  flex-col gap-5">
            <TextInput
              size="medium"
              width={"full"}
              placeholder="First name*"
              onChange={(e) => setValue(e.target.value)}
            />
            <TextInput size="medium" width={"full"} placeholder="Password*" />
            <Button variant="primary">Login</Button>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block lg:w-[65%] h-screen">
        <img className="w-full h-full" src="/images/2.jpeg" alt="image" />
      </div>
    </section>
  );
};

export default Login;
