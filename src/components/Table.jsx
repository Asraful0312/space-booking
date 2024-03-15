const Table = ({ headData, data }) => {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead className="bg-[#F2F2F2] rounded-2xl">
          {headData?.map((data) => (
            <th key={data} className="px-7 py-8 text-start whitespace-nowrap">
              {data}
            </th>
          ))}
        </thead>
        {data?.length === 0 && (
          <div className="flex items-center justify-center">
            <h1 className="text-center">Not Found!</h1>
          </div>
        )}
        <tbody
          className={`transition-all duration-300 ${
            data.length === 0 ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          {data?.map((item) => (
            <tr key={item?.id}>
              <td className="py-7">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-7">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src={item?.img}
                    alt="table image"
                  />
                  <div>
                    <p className="text-black/70">{item?.space}</p>
                  </div>
                </div>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-start">{item?.location}</p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-start">{item?.time}</p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-center">{item?.date}</p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-center">
                  {item?.numberOfPeople}
                </p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-center">{item?.price}</p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-center">{item?.tableNo}</p>
              </td>
              <td className="p-7">
                <p className="text-black/70 text-center">{item?.gustes}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
