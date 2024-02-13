export default function CircularProgressBar({
  percentage,
  track = "",
  bar = "",
}) {
  // Calculate the radius and circumference of the progress circle
  const radius = "135"; // You can adjust the radius as needed
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <svg className="progress-circle" width="60%" height="80%">
      <circle
        className={`progress-circle-track ${track}`}
        cx="50%"
        cy="50%"
        r={radius}
        strokeWidth="50"
      />
      <circle
        className={`progress-circle-bar ${bar}`}
        cx="50%"
        cy="50%"
        r={radius}
        strokeWidth="50"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
      />
      <text x="50%" y="50%" className={`progress-text ${track}-${bar}`}>
        {percentage}%
      </text>
    </svg>
  );
}
