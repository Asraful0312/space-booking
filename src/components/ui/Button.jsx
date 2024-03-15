import { cva } from "class-variance-authority";
import cn from "../../utils/cn";
import { Link } from "react-router-dom";

const Button = ({ to, className, variant, size, ...rest }) => {
  console.log(to);
  return (
    <>
      {to ? (
        <Link
          {...rest}
          to={to}
          className={cn(buttonVariants({ variant, size }), className)}
        />
      ) : (
        <button
          {...rest}
          className={cn(buttonVariants({ variant, size }), className)}
        />
      )}
    </>
  );
};

const buttonVariants = cva(
  "rounded-[100px] transition-all duration-300 border font-medium px-6 py-3  transition-all duration-200 border border-black",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-white hover:border-black hover:text-black",
        secondry:
          "bg-secondry text-black hover:bg-black hover:border-black hover:text-white",
        white:
          "bg-white text-black hover:bg-black hover:bg-black hover:border-black hover:text-white",
      },
      size: {
        small: "px-6 py-3",
        medium: "py-5 px-12 text-xl",
        large: "py-7 px-16 text-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;
