import "./App.scss"
import 'antd/dist/antd.css';
import { Demo } from "./components/Form"
import { ProgressBar } from "./components/ProgressBar"
function App(props) {

  const records = [
    {name:"Julia", value:50000,color:"green"},
    {name:"Kate", value:50000,color:"blue"},
    {name:"Roman", value:35000,color:"orange"},

  ]
  const totalGoal = 200000
  const personalGoal = totalGoal / records.length

const personalRecords = records.map((record, idx)=> {
  return <ProgressBar records={[record]} key={idx} pointsValues={[35000,50000,67000]} goal={personalGoal} goalMarkerPos={personalGoal * 100 / 100000 + "%"}/>
})
 
  return (
    <>
    <ProgressBar goal={totalGoal} records = {records} goalMarkerPos={totalGoal * 100 / 250000 + "%"}/>
    {personalRecords}
    <Demo/>
    </>
  );
}


export default App;
