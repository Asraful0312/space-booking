const SingleCard = () => {
  return (
    <div className="bg-secondry rounded-2xl py-4 px-5">
      <h3 className="text-lg 2xl:text-xl text-black/70 leading-9">
        Pending Bookings
      </h3>
      <div className="flex items-center gap-5  mt-7 pb-12">
        <h1 className="font-bold text-4xl">03</h1>
        <img src="/images/icons/stock up.png" alt="stock image" />
      </div>
    </div>
  );
};

export default SingleCard;
