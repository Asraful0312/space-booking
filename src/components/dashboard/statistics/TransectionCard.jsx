const TransectionCard = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex w-full md:w-[40%] items-center gap-12">
        <img
          className="w-10 h-10 md:w-[45px] 2xl:w-[60px] md:h-[45px] 2xl:h-[60px]"
          src="/images/icons/sheet.png"
          alt="sheet image"
        />
        <p className="text-lg md:text-xl 2xl:text-2xl">
          Coworking Space: Corporate Suites Rockefeller Center in New York City
        </p>
      </div>
      <h1 className="text-2xl font-bold text-black/70">$140</h1>
    </div>
  );
};

export default TransectionCard;
