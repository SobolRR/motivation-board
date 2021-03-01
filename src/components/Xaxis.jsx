
export const Xaxis = (props) => {
    const points = props.values.map((value,idx) => {

      return     <div className="point" key={idx}><span className="point__number" style={{left:value * 100 / props.goal -2 +"%"}} >{value}</span></div>
  
    })
    return (
    <div className="x-axis">
      {points}
    </div>)
  }

  Xaxis.defaultProps = {
    values:[50000,100000,150000,200000]
  }