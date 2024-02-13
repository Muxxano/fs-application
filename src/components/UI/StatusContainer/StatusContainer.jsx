import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export default function StatusContainer({
  title = "",
  track,
  bar,
  percent = 75,
}) {
  return (
    <div className={`status-${title.toLowerCase()}-container`}>
      <CircularProgressBar percentage={percent} track={track} bar={bar} />
      <h2>{title}</h2>
    </div>
  );
}
