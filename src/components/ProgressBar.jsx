import { Xaxis } from "./Xaxis";

export function ProgressBar({records, goal,pointsValues,goalMarkerPos}) {

  const items = records.map((record,idx) => {
    const width = record.value * 100 / goal
    return (
      <div
        className="progressbar__item"
        style={{ backgroundColor: record.color, width: width + "%" }}
        key={idx}
      >
        {record.name}
      </div>
    );
  })
  return (
    <>
    <div className="progressbar-wrapper" style={{margin:"7rem 0"}}>
      <div className="progressbar">{items}</div>
      <Xaxis values={pointsValues} goal={goal}/>
      </div>
    
    </>
  );
}
//<div className="plan-marker" style={{left:goalMarkerPos}}></div>

