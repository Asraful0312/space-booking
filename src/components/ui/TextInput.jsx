const TextInput = ({ size, width, label, icon, ...rest }) => {
  const classes = `
        outline-none rounded-lg border border-primary
        ${
          size === "medium"
            ? "py-3 px-9 text-xl"
            : size === "small"
            ? "py-2 px-5 text-base"
            : size === "large"
            ? "py-6 px-10 text-2xl"
            : "py-3 px-9 "
        }
        ${width === "full" ? "w-full" : `w-[${Number(width)}px]`}
    `;
  return (
    <>
      {!icon && label ? (
        <label className="flex flex-col gap-3">
          {label}
          <input className={classes} type="text" {...rest} />
        </label>
      ) : (
        <input className={classes} type="text" {...rest} />
      )}
    </>
  );
};

export default TextInput;
