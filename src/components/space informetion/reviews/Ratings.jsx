import ProgressBar from "@ramonak/react-progress-bar";

const Ratings = ({ rating }) => {
  const convertedRating = Math.ceil((Number(rating) / 5) * 100);
  console.log(convertedRating);
  return (
    <div className="flex items-center gap-2">
      <p className="text-black/70">{Number(rating)}</p>
      <ProgressBar
        completed={convertedRating}
        bgColor="#000000"
        height="5px"
        width="168px"
        isLabelVisible={false}
        labelColor="#e8090"
      />
    </div>
  );
};

export default Ratings;
