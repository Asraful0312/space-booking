import "./CircleProgressBar.css";

const CircleProgressBar = ({ bars }) => {
  const radius = 70;
  const barMargin = 0; // Adjust margin between bars

  return (
    <div className="circle-progress">
      <svg className="circle-progress-svg" width="100%" height="100%">
        {bars.map((bar, index) => {
          const circumference = 2 * Math.PI * (radius - index * barMargin);
          const progressOffset = ((100 - bar.percentage) / 100) * circumference;

          return (
            <circle
              key={index}
              className="circle-progress-bar"
              cx="50%"
              cy="50%"
              r={radius - index * barMargin}
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              stroke={bar.color}
            />
          );
        })}
      </svg>
      <div className="circle-progress-text">
        <h1 className="text-sm font-bold text-black/70 text-center">300</h1>
        <h1 className="text-xl font-bold text-center">Total</h1>
      </div>
    </div>
  );
};

export default CircleProgressBar;
