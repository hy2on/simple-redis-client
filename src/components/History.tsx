import React from "react";

type HistoryProps = {
  show: boolean;
};

//React.FC 사용 시 defaultProps 사용 불가한 문제점
const History = ({ show }: HistoryProps) => {
  return (
    <div className={["historyBox", show ? "openHistoryBox" : ""].join(" ")}>
      {show}
    </div>
  );
};

History.defaultProps = {
  show: false,
};

export default History;
