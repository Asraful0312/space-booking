const SingleStatus = ({ status, bookings }) => {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-2">
        <div
          className={`w-6 h-6 rounded-lg ${
            status === "confirmed"
              ? "bg-[#E6E6E6]"
              : status === "pending"
              ? "bg-[#CBCBCB]"
              : status === "cancelled"
              ? "bg-[#919191]"
              : "bg-[#E6E6E6]"
          }`}
        />
        <p className="text-sm font-medium text-black/70 uppercase">{status}</p>
      </div>
      <p className="text-sm font-medium text-black/70">{bookings}</p>
    </div>
  );
};

export default SingleStatus;
