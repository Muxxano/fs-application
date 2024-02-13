import StatusContainer from "../UI/StatusContainer/StatusContainer";

export default function Status() {
  return (
    <div className="content-status">
      <StatusContainer
        title="OVERALL"
        track="overall0"
        bar="overall1"
        percent={75}
      />
      <StatusContainer
        title="COMPLETION"
        track="comp0"
        bar="comp1"
        percent={75}
      />
    </div>
  );
}
