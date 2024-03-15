const Heading = ({ mb, size, title, className, weight, desc }) => {
  return (
    <div>
      <h1
        className={`text-black ${weight || "font-medium"} ${mb || "mb-8"} ${
          size || "text-[28px] 2xl:text-5xl"
        }
        ${desc && "mb-0"}
      ${className || ""}`}
      >
        {title}
      </h1>
      {desc && <p className="font-medium text-black/70 text-xl">{desc}</p>}
    </div>
  );
};

export default Heading;
