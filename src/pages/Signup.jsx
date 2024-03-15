import TextInput from "../components/ui/TextInput";
import { useState } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <section className="flex gap-6 lg:gap-0 flex-col lg:flex-row w-full">
      <div className="w-full lg:w-[35%] px-5 md:px-20 h-full">
        <div className="flex flex-col justify-center">
          <Link className="pt-6 pb-32 lg:pt-6 lg:pb-8" to="/">
            <img className="h-6" src="/images/Logo.svg" alt="logo" />
          </Link>
          <h2 className="font-medium text-[44px] mb-7">Sign up</h2>
          <div className="flex flex-col gap-5">
            <TextInput size="medium" width={"full"} placeholder="First name*" />
            <TextInput size="medium" width={"full"} placeholder="Last name*" />
            <TextInput size="medium" width={"full"} placeholder="E-mail*" />
            <TextInput
              size="medium"
              width={"full"}
              placeholder="Create password*"
            />
            <h1 className="font-bold">
              Password must be at least 8 characters log
            </h1>
            <Button variant="primary">Sign up</Button>
            <h1 className="font-bold text-primary/70 whitespace-nowrap">
              Already a member? Sign in
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block lg:w-[65%] h-screen">
        <img className="w-full h-full" src="/images/1.jpeg" alt="image" />
      </div>
    </section>
  );
};

export default Signup;
